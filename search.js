/* ========== OTSIMINE: SISESTUS JA NAVIGEERIMINE ==========
   See kood halludab otsingut ja suunab kasutaja õppeteemade lehtedele.
*/

/* Otsingusisestuse väli ja nupp */
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

/* Teemade kaartlemine: otsingusõnad -> HTML failid */
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

/* Otsingufunktsioon - kontrollib sisestust ja suunab vastavale lehtele */
function handleSearch() {
  if (!searchInput) return;

  /* Saame sisestuse väärtuse ja teeme väiketäheks */
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchInput.focus();
    return;
  }

  /* Otsime otsest vastet */
  const page = topicMap[query];
  if (page) {
    window.location.href = page;
    return;
  }

  /* Proovime ka ilma spetsiaaliste märkideta */
  const normalized = query.replace(/[^a-z0-9]/g, "");
  const fuzzyPage = topicMap[normalized];
  if (fuzzyPage) {
    window.location.href = fuzzyPage;
    return;
  }

  /* Kui teemat ei leitud, näitame veateadet */
  alert("Teemat ei leitud.");
}

/* Otsingu nupp - käivitab otsingufunktsiooni */
if (searchButton) {
  searchButton.addEventListener("click", handleSearch);
}

/* Sisestusväli - käivitab otsingufunktsiooni Enter klahviga */
if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
}
