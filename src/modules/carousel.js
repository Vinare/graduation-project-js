import Swiper, {
    Navigation
} from 'swiper';

export const carousel = () => {
    const carouselWrapper = document.querySelectorAll('.swiper-slide > .element');

    carouselWrapper.forEach((slide) => {
        slide.style.cursor = "pointer";
    })

    carouselWrapper.style.margin = '0 auto'

    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
};