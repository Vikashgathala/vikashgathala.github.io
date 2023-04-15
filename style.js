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
