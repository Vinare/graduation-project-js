export const smoothScroll = () => {
    const arrow = document.querySelector(".up");
    const elementsOfTopMenu = document.querySelectorAll(".top-menu ul>li>a");

    const showArrow = () => {
        window.addEventListener('scroll', (e) => {
            e.target.value = scrollY;
            if (e.target.value > 520) {
                arrow.style.display = "block";
            } else {
                arrow.style.display = "none";
            }
        });
    };

    const scroll = (button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const linkAddress = button.getAttribute("href");
            const section = document.querySelector(linkAddress);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    };

    const scrollToHeader = (button) => {
        button.setAttribute("href", ".main-wrapper");
        scroll(button);
    };

    arrow.style.display = "none";
    showArrow();
    scrollToHeader(arrow);

    elementsOfTopMenu.forEach((elem) => {
        scroll(elem);
    });
};