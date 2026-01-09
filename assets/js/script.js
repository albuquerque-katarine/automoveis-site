const page = document.getElementById('page');
const buttonHeader = document.getElementById('link-next-page');

function scrollBehavior() {

    // remove qualquer comportamento anterior
    page.onwheel = null;

    if (window.innerWidth >= 800) {

        // DESKTOP — scroll horizontal
        page.style.overflowX = "hidden";
        page.style.overflowY = "hidden";

        buttonHeader.onclick = (event) => {
            event.preventDefault();
            page.scrollBy({
                left: 800,
                behavior: "smooth"
            });
        };

        page.onwheel = (event) => {
            event.preventDefault();
            page.scrollLeft += event.deltaY;
        };

    } else {

        // MOBILE — scroll normal
        page.style.overflowX = "hidden";
        page.style.overflowY = "auto";

        buttonHeader.onclick = null;
    }
}

// executa ao carregar
scrollBehavior();

// executa ao redimensionar
window.addEventListener("resize", scrollBehavior);
