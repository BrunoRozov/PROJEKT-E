/* ========== SUJUV KERIMINE: "ALUSTA ÕPPIMIST" NUPUST ==========
   See kood suunab kasutaja klikkimisel õppeteemade sektsioonile.
*/

/* "Alusta Õppimist" nupp ja kontakti link */
const learnBtn = document.getElementById("learnBtn");
const learnA = document.getElementById("learnA");

/* Sujuva kerimise funktsioon - liigub õppeteemade sektsioonile */
const scrollToTopics = () => {
  const topicsSection = document.getElementById("learning-topics");
  if (topicsSection) {
    topicsSection.scrollIntoView({
      behavior: "smooth" /* Sujuv kerimine (mitte hüppamine) */,
    });
  }
};

/* Nupule klikkimisel - sujuv kerimine */
if (learnBtn) {
  learnBtn.onclick = scrollToTopics;
}

/* Kontakti lingile klikkimisel - samuti sujuv kerimine */
if (learnA) {
  learnA.onclick = scrollToTopics;
}
