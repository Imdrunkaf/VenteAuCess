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

// NEW PART //


// index.html
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data
    fetch('assets/json/items.json')
      .then(response => response.json())
      .then(data => {
        const itemList = document.querySelector('.item-list');
        
        // Loop through the items and dynamically create HTML for each
        data.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
  
          // Create the inner HTML for each item
          itemDiv.innerHTML = `
            <a href="item.html?id=${item.id}">
              <img src="${item.image}" alt="${item.name}">
              <h2>${item.name}</h2>
              <p>$${item.price}</p>
            </a>
          `;
  
          // Append the item to the item list
          itemList.appendChild(itemDiv);
        });
      });
  });


// item.html
document.addEventListener('DOMContentLoaded', function() {
    // Get the item ID from the URL (e.g., ?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    
    // Fetch the JSON data
    fetch('assets/items.json')
      .then(response => response.json())
      .then(data => {
        // Find the item by its ID
        const item = data.find(item => item.id == itemId);
        
        if (item) {
          // Populate the page with the item's details
          document.querySelector('.item-details').innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
          `;
        } else {
          // If no item is found, show a message
          document.querySelector('.item-details').innerHTML = `<p>Item not found</p>`;
        }
      });
  });
  
  