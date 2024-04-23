// Animation On Scroll
AOS.init({
  easing: "ease",
  once: true,
  duration: 500,
});

// Copyright
const copyright = () => {
  const tag = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  tag.textContent = year;
};
copyright();

// Hover Menu
const hoverMenu = () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("mouseover", () => {
      const dropdownMenu = toggle.nextElementSibling;
      if (!dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.add("show");
        toggle.classList.add("show");
      }
    });

    toggle.addEventListener("mouseout", () => {
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        toggle.classList.remove("show");
      }
    });
  });

  dropdownMenus.forEach((menu) => {
    menu.addEventListener("mouseover", () => {
      if (!menu.classList.contains("show")) {
        menu.classList.add("show");
      }
    });

    menu.addEventListener("mouseout", () => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        const toggle = menu.previousElementSibling;
        if (toggle) {
          toggle.classList.remove("show");
        }
      }
    });
  });
};
hoverMenu();
