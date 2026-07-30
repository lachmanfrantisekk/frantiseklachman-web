/* ==================================================
   THEME SWITCH
   Frantisek Lachman
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const switcher = document.getElementById("theme-switch");

    if (!switcher) return;

    const buttons = switcher.querySelectorAll("button");

    // Načtení uloženého motivu
    const savedTheme = localStorage.getItem("theme") || "light";

    applyTheme(savedTheme);

   document.documentElement.setAttribute("data-theme", theme);

    buttons.forEach((button, index) => {

        button.addEventListener("click", () => {

            const theme = index === 0 ? "light" : "dark";

            applyTheme(theme);

        });

    });

});


/* ==================================================
   APPLY THEME
================================================== */

function applyTheme(theme) {

    const switcher = document.getElementById("theme-switch");

    const buttons = switcher.querySelectorAll("button");

    buttons.forEach(btn => btn.classList.remove("active"));

    if (theme === "dark") {

        document.documentElement.setAttribute("data-theme", "dark");

        switcher.classList.add("dark");

        buttons[1].classList.add("active");

    } else {

        document.documentElement.removeAttribute("data-theme");

        switcher.classList.remove("dark");

        buttons[0].classList.add("active");

    }

    localStorage.setItem("theme", theme);

}
