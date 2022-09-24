var theme = "dark";

function changeTheme() {
    if (theme == "light") {
        changeThemeDark();
        theme = "dark";
    } else {
        changeThemeLight();
        theme = "light";
    }
}

function changeThemeLight() {
    document.body.style.setProperty("--color-background", "#dbe1e8");
    document.body.style.setProperty("--color-background-2", "white");
    document.body.style.setProperty("--color-text", "#12181b");
    document.body.style.setProperty("--color-text-2", "darkgrey");
    document.body.style.setProperty("--color-box", "black");
    document.body.style.setProperty("--color-box-2", "grey");
}

function changeThemeDark() {
    document.body.style.setProperty("--color-background", "#12181b");
    document.body.style.setProperty("--color-background-2", "#2a2e35");
    document.body.style.setProperty("--color-text", "white");
    document.body.style.setProperty("--color-text-2", "lightgrey");
    document.body.style.setProperty("--color-box", "white");
    document.body.style.setProperty("--color-box-2", "lightgrey");
}

function changeColor() {
    document.body.style.setProperty("--color-background", "red");
}
