	// alert("This Portfolio is optimized for Desktop only. Kindly make sure that you are using desktop.");

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
