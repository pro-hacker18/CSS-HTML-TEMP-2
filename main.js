let toBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 574) {
    toBtn.classList.add("show");
  } else {
    toBtn.classList.remove("show");
  }
});

toBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// get nums pulsing
let nums = document.querySelectorAll(".stats .container .stat-box .number");
let section = document.querySelector(".stats");
let started = false;

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// get progress pulsing

let progressSpans = document.querySelectorAll(
  ".our-skills .skills .prog-holder span"
);

let progSection = document.querySelector(".our-skills");

window.addEventListener("scroll", function () {
  if (window.scrollY >= progSection.offsetTop + 50) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
