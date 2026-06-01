const learnBtn = document.getElementById("learnBtn");
const learnA = document.getElementById("learnA");

const scrollToTopics = () => {
  const topicsSection = document.getElementById("learning-topics");
  if (topicsSection) {
    topicsSection.scrollIntoView({
      behavior: "smooth",
    });
  }
};

if (learnBtn) {
  learnBtn.onclick = scrollToTopics;
}

if (learnA) {
  learnA.onclick = scrollToTopics;
}

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const topicMap = {
  matemaatika: "mata.html",
  math: "mata.html",
  javascript: "javascript.html",
  js: "javascript.html",
  python: "py.html",
  py: "py.html",
  html: "html.html",
  css: "css.html",
  sass: "sass.html",
  bootstrap: "bootstrap.html",
  kontakt: "kontakt.html",
  koduleht: "index.html",
};

function handleSearch() {
  if (!searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchInput.focus();
    return;
  }

  const page = topicMap[query];
  if (page) {
    window.location.href = page;
    return;
  }

  const normalized = query.replace(/[^a-z0-9]/g, "");
  const fuzzyPage = topicMap[normalized];
  if (fuzzyPage) {
    window.location.href = fuzzyPage;
    return;
  }

  alert(
    "Teemat ei leitud. Proovi kirjutada teemade nimesid nagu Matemaatika, JavaScript, Python, HTML, CSS, SASS või Bootstrap.",
  );
}

if (searchButton) {
  searchButton.addEventListener("click", handleSearch);
}

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
}
