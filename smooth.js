const learnBtn = document.getElementById("learnBtn");

learnBtn.onclick = () => {

    document.getElementById("learning-topics")
        .scrollIntoView({
            behavior: "smooth"
        });
};