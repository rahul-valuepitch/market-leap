const caseStudies = [
  {
    id: "01",
    title: "Classplus Automation",
    excerpt: `Classplus is an Ed-Tech start-up company transforming the world of education by powering educationalists with the digital tools and resources that help them become future-ready. Classplus industry-first unified platform lets coaching institutes have their own app to manage all their tasks and reach lakhs of students across the country with our next-level technology.`,
    displayDate: "Feb 22, 2024",
    createdDate: new Date("2024-03-22"),
    link: `./case-study-classplus-automation.html`,
  },
  {
    id: "02",
    title: "Crowd Testing",
    excerpt: `Manual test cases execution for each release takes approx. 44 man days for 1 device & 1 browser. B2B Testers reduced this time to release drastically to 4 days which is 90% of overall time for release. This is achieved by implementing automation for all the Classplus modules.`,
    displayDate: "Feb 20, 2024",
    createdDate: new Date("2024-03-27"),
    link: `./case-study-crowd-testing.html`,
  },
  {
    id: "03",
    title: "Functional Testing",
    excerpt: `Implementing automation for all Classplus modules has proven to be an effective solution for reducing manual testing effort and speeding up the release cycle. Manual test cases execution for each release takes approx. 44 man days for 1 device & 1 browser. B2B Testers reduced this time to release drastically to 4 days which is 90% of overall time for release. This is achieved by implementing automation for all the Classplus modules.`,
    displayDate: "Feb 19, 2024",
    createdDate: new Date("2024-03-19"),
    link: `./case-study-functional-testing.html`,
  },
];

const recentCaseStudies = () => {
  const cardsContainer = document.querySelector(".recent-case-study-cards");
  const pageId = document
    .querySelector(".case-study-detail")
    .getAttribute("data-case-study-id");

  const card = (item) => {
    return `
            <a href="${item.link}" class="card recent-case-study mb-4">
              <div class="card-body">
                <span>${item.displayDate}</span>
                <h6>${item.title}</h6>
                <p>${item.excerpt}</p>
              </div>
            </a>
        `;
  };

  const newCaseStudies = caseStudies.filter((item) => item.id !== pageId);

  newCaseStudies.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
  );

  const items = newCaseStudies
    .slice(0, 3)
    .map((item) => card(item))
    .join("");
  cardsContainer.innerHTML = items;
};
recentCaseStudies();
