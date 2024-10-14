document.addEventListener("DOMContentLoaded", function() {
    console.log("Page has loaded");
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the item ID from the URL (e.g., ?id=1)
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');
    
    // Fetch the JSON data
    fetch('assets/json/items.json')
      .then(response => response.json())
      .then(data => {
        // Find the item by its ID
        const item = data.find(item => item.id == itemId);
        
        if (item) {
          // Populate the page with the item's details
          document.querySelector('.item-details').innerHTML = `
            <img src="${item.imageFront}" alt="${item.name}">
            <img src="${item.imageBack}" alt="${item.name} back">
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