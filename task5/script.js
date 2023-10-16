document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const imageGallery = document.querySelectorAll(".image-gallery .image");

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const filter = button.getAttribute("data-filter");
            filterImages(filter);
        });
    });

    function filterImages(filter) {
        imageGallery.forEach((image) => {
            const imageCategory = image.className.split(" ")[1];
            if (filter === "all" || filter === imageCategory) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }
});
