/* ==================================================
   LANGUAGE SWITCH
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const switcher = document.getElementById("language-switch");

    if (!switch) return;

    const buttons = switch.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            // Odebere active oběma tlačítkům
            buttons.forEach(btn => btn.classList.remove("active"));

            // Přidá active kliknutému
            button.classList.add("active");

            // Posune slider
            if (index === 1) {

                switch.classList.add("en");

            } else {

                switch.classList.remove("en");

            }

        });

    });

});
