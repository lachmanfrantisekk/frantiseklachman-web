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

           const language = index === 0 ? "cz" : "en";

applyLanguage(language);

        });

    });

});

/* ==================================================
   TRANSLATIONS
================================================== */

const translations = {

    cz: {

        status: "K dispozici pro nové projekty",

        subtitle: " Web Developer · AI",

        description: "Moderní weby, automatizace, AI řešení a IT služby.",

        portfolio: "Portfolio",

        contact: "Kontakt"

    },

    en: {

        status: "Available for Projects",

        subtitle: " Web Developer · AI",

        description: "Modern websites, automation, AI solutions and IT services.",

        portfolio: "Portfolio",

        contact: "Contact"

    }

};

/* ==================================================
   APPLY LANGUAGE
================================================== */

function applyLanguage(language) {

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (translations[language][key]) {

            element.textContent = translations[language][key];

        }

    });

}
