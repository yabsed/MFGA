// index.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. 스크롤 애니메이션 기능
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.1, // 요소가 10% 보일 때 애니메이션 실행
    }
  );

  // 애니메이션을 적용할 모든 요소들을 선택
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));

  // 2. 다크 모드 토글 기능
  const themeToggleButton = document.getElementById("theme-toggle");
  const themeIcon = themeToggleButton.querySelector("i");

  // 페이지 로드 시 저장된 테마 적용
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // 아이콘 변경 및 로컬 스토리지에 테마 저장
    if (document.body.classList.contains("dark-mode")) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    }
  });
});