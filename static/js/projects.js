const projectList = [
  {
    id: 1,
    filter: "development",
    name: "Development Services",
    title: "B2Btesters",
    heading: "Web Development",
    img: "./static/images/projects/dev/b2b.jpg",
    link: "https://b2btesters.com/",
  },
  {
    id: 2,
    filter: "advertising",
    name: "Advertising",
    title: "CrimeScan",
    heading: "Advertising Services",
    img: "./static/images/projects/adv/crimescan.jpg",
    link: "https://crimescan.ai/",
  },
  {
    id: 3,
    filter: "design-services",
    name: "Design Services",
    title: "BNI",
    heading: "Design Services",
    img: "./static/images/projects/design-ser/bni.jpg",
    link: "https://www.instagram.com/bni_tirupati_achievers/",
  },
  {
    id: 4,
    filter: "digital-marketing",
    name: "Digital Marketing",
    title: "RiloxEV",
    heading: "Paid Advertising/Lead Generation",
    img: "./static/images/projects/digital-marketing/rilox.jpg",
    link: "https://www.linkedin.com/company/rilox-ev/posts/?feedView=all",
  },
  {
    id: 5,
    filter: "digital-marketing",
    name: "Digital Marketing",
    title: "B2BTesters",
    heading: "Social Media Management",
    img: "./static/images/projects/digital-marketing/b2b.jpg",
    link: "https://www.linkedin.com/company/b2btesters/?viewAsMember=true",
  },
];

// Filter List
const container = document.querySelector(".project-page .grid");
const filters = document.querySelector(".project-page .filter");

// Load Items
window.addEventListener("DOMContentLoaded", () => {
  displayItem(projectList);
  displayBtns();
});

// Item Element
const displayItem = (menuItems) => {
  let items = menuItems.map((item) => {
    return `
    <div class="col-lg-4">
        <a href="${item.link}" target="_blank">
            <div class="project-card">
                <div class="text">
                    <h6>${item.title}</h6>
                    <h5>${item.heading}</h5>
                </div>
                <div class="image">
                    <img src="${item.img}" alt="${item.name}" />
                </div>
            </div>
        </a>
    </div>
      `;
  });
  items = items.join("");
  container.innerHTML = items;
};

const displayBtns = () => {
  const categories = projectList.reduce(
    (values, item) => {
      if (!values.includes(item.filter)) {
        values.push(item.filter);
      }
      return values;
    },
    ["All"]
  );
  const categorieBtns = categories
    .map((category) => {
      const categoryName =
        category === "All"
          ? "All"
          : projectList.find((item) => item.filter === category).name;
      const activeClass = category === "All" ? "active" : "";
      return `
      <button class="filter-btn ${activeClass}" data-filter="${category}">
          ${categoryName}
      </button>
  `;
    })
    .join("");
  filters.innerHTML = categorieBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Item
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      e.currentTarget.classList.add("active");

      const filter = e.currentTarget.dataset.filter;
      const menuFilter = projectList.filter((menuItem) => {
        if (menuItem.filter == filter) {
          return menuItem;
        }
      });
      if (filter == "All") {
        displayItem(projectList);
      } else {
        displayItem(menuFilter);
      }
    });
  });
};
