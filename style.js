	alert("This Portfolio is optimized for Desktop mainly. Make sure to clear your browser caches timely to fetch the website with updated resources.");

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
				}, 380);
			}, 2000);
		};
