// Create a new div element for the bar
var bar = document.createElement('div');

// Set the styles for the bar
bar.style.position = 'fixed'; // Fixed at the top of the viewport
bar.style.top = '0'; // Place it at the top
bar.style.left = '0'; // Align it to the left of the screen
bar.style.width = '100%'; // Stretch the bar across the full width of the screen
bar.style.height = 'calc(30px + 2cm)'; // Make the bar taller to cover the old one
bar.style.backgroundColor = 'white'; // Set the bar color to white
bar.style.zIndex = '9999'; // Ensure it is the topmost layer
bar.style.display = 'flex'; // Use flexbox for layout
bar.style.justifyContent = 'space-between'; // Distribute content between the edges
bar.style.alignItems = 'center'; // Align items vertically
bar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; // Add a subtle shadow for depth

// Create an img element for the logo
var logo = document.createElement('img');
logo.src = 'https://cdn-icons-png.flaticon.com/512/8702/8702643.png'; // Logo URL
logo.alt = 'Logo'; // Alternative text for the logo
logo.style.height = '40px'; // Set a smaller height for the logo
logo.style.marginLeft = '15px'; // Add a small margin to the left of the logo
logo.style.objectFit = 'contain'; // Ensure the logo scales properly

// Create a span element for the text
var text = document.createElement('span');
text.textContent = 'ClustR'; // Set the text content
text.style.fontSize = '1.8rem'; // Set the font size
text.style.fontWeight = 'bold'; // Make the text bold
text.style.marginLeft = '10px'; // Add a small margin to the left of the text

// Create a button for "Mods"
var modsButton = document.createElement('button');
modsButton.textContent = 'Mods'; // Set the button text
modsButton.style.marginRight = '15px'; // Add a small margin to the right
modsButton.style.padding = '8px 15px'; // Set padding for the button
modsButton.style.fontSize = '1rem'; // Set the font size
modsButton.style.cursor = 'pointer'; // Add a pointer cursor for interactivity
modsButton.style.border = '1px solid #ccc'; // Add a border
modsButton.style.borderRadius = '5px'; // Add rounded corners
modsButton.style.backgroundColor = '#f5f5f5'; // Set background color
modsButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Add a subtle shadow
modsButton.style.transition = 'all 0.3s ease'; // Add a transition for hover effects

// Add hover effect to the button
modsButton.onmouseover = function () {
  modsButton.style.backgroundColor = '#e0e0e0';
};
modsButton.onmouseout = function () {
  modsButton.style.backgroundColor = '#f5f5f5';
};

// Create a button for "Dashboard"
var dashboardButton = document.createElement('button');
dashboardButton.textContent = 'Dashboard'; // Set the button text
dashboardButton.style.marginRight = '15px'; // Add a small margin to the right
dashboardButton.style.padding = '8px 15px'; // Set padding for the button
dashboardButton.style.fontSize = '1rem'; // Set the font size
dashboardButton.style.cursor = 'pointer'; // Add a pointer cursor for interactivity
dashboardButton.style.border = '1px solid #ccc'; // Add a border
dashboardButton.style.borderRadius = '5px'; // Add rounded corners
dashboardButton.style.backgroundColor = '#f5f5f5'; // Set background color
dashboardButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Add a subtle shadow
dashboardButton.style.transition = 'all 0.3s ease'; // Add a transition for hover effects
dashboardButton.onclick = function () {
  window.location.href = 'https://resources.languagenut.com/resources/#/Dashboard?curriculumUid=55';
};

// Add hover effect to the button
dashboardButton.onmouseover = function () {
  dashboardButton.style.backgroundColor = '#e0e0e0';
};
dashboardButton.onmouseout = function () {
  dashboardButton.style.backgroundColor = '#f5f5f5';
};

// Create a container for the logo and text
var leftContainer = document.createElement('div');
leftContainer.style.display = 'flex'; // Use flexbox to align logo and text horizontally
leftContainer.style.alignItems = 'center'; // Align items vertically
leftContainer.appendChild(logo); // Add the logo to the container
leftContainer.appendChild(text); // Add the text to the container

// Append the left container and buttons to the bar
bar.appendChild(leftContainer);
bar.appendChild(modsButton);
bar.appendChild(dashboardButton);

// Append the bar to the body of the document
document.body.appendChild(bar);

// Remove specific elements by ID
function removeElementsById(ids) {
  ids.forEach(function (id) {
    var element = document.getElementById(id);
    if (element) element.remove();
  });
}

// List of IDs to remove
var idsToRemove = ['mountain', 'hill'];
removeElementsById(idsToRemove);

// Change the background image of the site
document.body.style.backgroundImage = 'url("https://cdn2.steamgriddb.com/hero/de6ddd41822944b7a1c6f82769b53fa6.png")';
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';

// Change the site's favicon
var favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.href = 'https://cdn-icons-png.flaticon.com/512/8702/8702643.png'; // Favicon URL
document.head.appendChild(favicon);

// Change the site's title
document.title = 'ClustR';

// Add a modal for "Mods"
modsButton.onclick = function () {
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(255, 255, 255, 1)';
  modal.style.zIndex = '10000';

  var closeButton = document.createElement('div');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.color = 'red';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '1.5rem';
  closeButton.onclick = function () {
    document.body.removeChild(modal);
  };

  // Add options inside the modal
  var bgInputLabel = document.createElement('label');
  bgInputLabel.textContent = 'Set Background URL: ';
  var bgInput = document.createElement('input');
  bgInput.type = 'text';
  bgInput.placeholder = 'Enter image URL';

  var bgButton = document.createElement('button');
  bgButton.textContent = 'Set Background';
  bgButton.onclick = function () {
    if (bgInput.value) {
      document.body.style.backgroundImage = `url("${bgInput.value}")`;
    }
  };

  var clearCacheButton = document.createElement('button');
  clearCacheButton.textContent = 'Clear Cache';
  clearCacheButton.onclick = function () {
    localStorage.clear();
    sessionStorage.clear();
    alert('Cache cleared!');
  };

  modal.appendChild(closeButton);
  modal.appendChild(bgInputLabel);
  modal.appendChild(bgInput);
  modal.appendChild(bgButton);
  modal.appendChild(clearCacheButton);

  document.body.appendChild(modal);
};
