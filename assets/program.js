document.addEventListener("DOMContentLoaded", () => {
  // ページロード時の h2 フェードイン
  const headers = document.querySelectorAll("h2");
  headers.forEach((header, i) => {
    header.style.opacity = 0;
    header.style.transition = "opacity 1s ease";
    setTimeout(() => {
      header.style.opacity = 1;
    }, i * 300);
  });

  // スクロールに応じた fadein クラスの要素を可視化
  const fadeIns = document.querySelectorAll(".fadein");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeIns.forEach(el => observer.observe(el));
});
