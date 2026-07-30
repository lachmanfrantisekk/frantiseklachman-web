/* ==================================================
   MAIN
   Frantisek Lachman 
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initHeroTilt();
    initBackgroundParallax();

});


/* ==================================================
   HERO 3D TILT
================================================== */

function initHeroTilt() {

    const card = document.querySelector(".hero-card");

    if (!card) return;

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-4px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
        `;

    });

}


/* ==================================================
   BACKGROUND PARALLAX
================================================== */

function initBackgroundParallax() {

    const blobs = document.querySelectorAll(".blob");

    if (!blobs.length) return;

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5);
        const y = (e.clientY / window.innerHeight - 0.5);

        blobs.forEach((blob, index) => {

            const speed = (index + 1) * 12;

            blob.style.transform = `
                translate(
                    ${x * speed}px,
                    ${y * speed}px
                )
            `;

        });

    });

}
