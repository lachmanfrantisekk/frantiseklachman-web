/* ==================================================
   LANGUAGE SWITCH
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const switcher = document.getElementById("language-switch");

    if (!switcher) return;

    const buttons = switcher.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

           console.log(index);

            // Odebere active oběma tlačítkům
            buttons.forEach(btn => btn.classList.remove("active"));

            // Přidá active kliknutému
            button.classList.add("active");

            // Posune slider
            if (index === 1) {

                switcher.classList.add("en");

            } else {

                switcher.classList.remove("en");

            }

        });

    });

});
