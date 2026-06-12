/*
   Lisab elementidele animatsiooni, kui need keritakse vaatevälja.
*/
const aosSelectors = [
  ".welcome",
  ".content img",
  ".content1 p",
  ".topic",
  ".teema",
  ".image-card",
];

const aosElements = document.querySelectorAll(aosSelectors.join(", "));

aosElements.forEach((element) => element.classList.add("aos-item"));

if (aosElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  aosElements.forEach((element) => observer.observe(element));
} else {
  aosElements.forEach((element) => element.classList.add("aos-visible"));
}
