#!/bin/bash
#Script written by vikashgathala for macOS only. Linux version is similar and is coming soon.
# Function to check if the OS is macOS
check_os() {
  if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "This GitHub SSH script is only for macOS only right now and will be available for other OS in few days."
    exit 1
  fi
}

#Main script
main() {
    #Check if Git is installed
    git -ver

    #Checks if host is macOS as this script works only for macOS right now.
    check_os

    #Just some info ;)
    echo "Follow the easy instructions and get your SSH set up done quickly."
    echo "If you are familiar with Windows and PowerShell then you can help porting this script to Windows."
    echo "Linux script under development."

    #Setup begins
    
    #User email for github commit purposes
    echo "Enter your email that is used in GitHub account:"
    read email
    git config --global user.email "$email"
    echo "Updated email in git credentials."

    #User name for github commit purposes
    echo "Enter your GitHub username:"
    read username
    git config --global user.name "$username"
    echo "Updated username in git credentials."

    #Generating new ssh key
    echo -e "\n\n" | ssh-keygen -t ed25519 -C "$email" -f ~/.ssh/id_ed25519 -N ""

    #Copying the key to clipboard
    pbcopy < ~/.ssh/id_ed25519.pub

    #Prompting user to paste the key in GitHub and then proceed
    echo "\n"
    echo "Key has been copied to your clipboard."
    echo "\n"
    echo "Now navigate to [GitHub->Settings->SSH and GPG keys->New SSH key]."
    echo "Enter any title and choose [Key type->Authentication Key] and paste the key, press [Add SSH key]."
    echo "\n"
    echo "After that, press [Enter] here in terminal to verify your setup."
    read temp

    # Adding GitHub to known hosts to skip confirmation prompt
    ssh-keyscan github.com >> ~/.ssh/known_hosts

    # Verification of the connection
    ssh_output=$(ssh -T git@github.com 2>&1)
    echo "\n"
    echo "\n"
        if echo "$ssh_output" | grep -q "successfully authenticated"; then
            echo "SSH connection successful, exiting script."
        else
            echo "Unknown error, exiting script."
            echo "SSH output: $ssh_output"
        fi

    echo "\n"
    }

main