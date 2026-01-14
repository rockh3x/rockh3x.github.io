// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // Animate skill bars
      entry.target.querySelectorAll(".bar").forEach(bar => {
        bar.querySelector("::after");
        bar.style.setProperty("--level", bar.dataset.level + "%");
        bar.style.position = "relative";
        bar.style.overflow = "hidden";
        bar.firstElementChild;
        bar.style.setProperty("width", "100%");
        bar.style.setProperty("--fill", bar.dataset.level);
        bar.style.setProperty("transition", "none");
        bar.style.setProperty("transition", "width 1s");
        bar.querySelector("::after");
      });
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));

// Skill bar animation
document.querySelectorAll(".bar").forEach(bar => {
  const level = bar.dataset.level;
  bar.style.setProperty("--level", level + "%");
  bar.innerHTML = `<div style="height:100%; width:0;"></div>`;
  setTimeout(() => {
    bar.firstChild.style.width = level + "%";
  }, 500);
});
