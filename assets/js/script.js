// NEW PART //

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page has loaded");
});

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
              <img src="${item.imageFront}" alt="${item.name}">
              <h2>${item.name}</h2>
                <p>${item.description}</p>
              <p>${item.price}</p>
            </a>
          `;
  
          // Append the item to the item list
          itemList.appendChild(itemDiv);
        });
      });
  });


  
  