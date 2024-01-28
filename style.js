window.onload = function() {
  var text = document.getElementById("dynamic-text");
  var words = ["Student", "Vikash", "Coder", "Learner"];
  var index = 0;
  var span = text.querySelector("span");
  setInterval(function() {
    span.classList.remove("show");
    setTimeout(function() {
      span.innerHTML = words[index];
      index = (index + 1) % words.length;
      span.classList.add("show");
      span.classList.add("blur");
      setTimeout(function() {
        span.classList.remove("blur");
        span.style.animation = '';
      }, 1000);
      span.style.animation = 'unblur 0.8s ease-out forwards';
    }, 400);
  }, 2500);
};

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".ripple-container");
  const content = document.querySelector(".content");

  container.addEventListener("mousemove", function(e) {
    moveContent(e.clientX, e.clientY);
  });

  function moveContent(mouseX, mouseY) {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    // Adjust the content's position based on the distance from the center
    const offsetX = deltaX * 0.01; // You can adjust the attraction strength
    const offsetY = deltaY * 0.01;

    content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  // Reset content position when mouse leaves the container
  container.addEventListener("mouseleave", function() {
    content.style.transform = "translate(0, 0)";
  });
});

