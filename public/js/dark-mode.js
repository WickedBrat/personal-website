window.onload = function () {
    var toggle = document.getElementById("dark-mode-toggle");
    var theme = document.getElementById("theme");

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme(localStorage.getItem("dark-mode-storage") || "dark");
    } else {
        setTheme(localStorage.getItem("dark-mode-storage") || "light");
    }

    toggle.addEventListener("click", () => {
        if (toggle.className === "fas fa-moon") {
            setTheme("dark");
        } else if (toggle.className === "fas fa-sun") {
            setTheme("light");
        }
    });

    function updateSocialIcons() {
        let theme = localStorage.getItem("dark-mode-storage");
        var classes = document.getElementsByClassName("social-icons__icon");
        for(let i = 0; i < classes.length; i++) {
            const url = classes[i].style.backgroundImage;
            if (theme === "dark") {
                const b = "-white";
                const position = url.length - 6;
                classes[i].style.backgroundImage = [url.slice(0, position), b, url.slice(position)].join('');
            } else {
                classes[i].style.backgroundImage = url.replace("-white", "")
            }
        }
    }

    function setTheme(mode) {
        localStorage.setItem("dark-mode-storage", mode);
        if (mode === "dark") {
            theme.className = "darkTheme";
            toggle.className = "fas fa-sun";
        } else if (mode === "light") {
            theme.className = "lightTheme";
            toggle.className = "fas fa-moon";
        }
        updateSocialIcons();
    }
}