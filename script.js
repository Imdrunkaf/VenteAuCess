import{GGB} from "/page article/English/The  Golden Grammar Book/script.js"
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
var contentList = [];
contentList.push(GGB);

function filterContentByTag(tag){
    console.log(contentList);
    filteredList = contentList.filter(content => content.tags.includes(tag));
    displayContent(filteredList);
}

function displayContent(contentList){
    var mainDiv = document.getElementById("main");

    mainDiv.innerHTML = "";

    for (var i = 0; i < contentList.length; i++) {
        var contentHtml = `
            <div class="content">
                <a href="${contentList[i].href}">
                    <img class="imgArticle" src="${contentList[i].imgSrc}" alt="${contentList[i].alt}" />
                    <div class="description">
                        <div class="itemName">${contentList[i].itemName}</div>
                    </div>
                </a>
            </div>
        `;

        mainDiv.innerHTML += contentHtml;
    }
}
