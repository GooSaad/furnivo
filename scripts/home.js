    const slider = document.getElementById("slider");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0;
    const totalSlides = slider.children.length;

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
