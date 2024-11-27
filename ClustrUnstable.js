// Show alert and log messages at the start
alert(
  "Press OK if you allow us to make modifications to the current website! To cancel press anywhere outside the alert box!"
);
console.warn("Press CTRL + R to remove modifications");
console.error(
  "ClustR is not made/endorsed by LanguageNut. ClustR is a modification client for LanguageNut to improve your experience!"
);

// Apply styles and features when the page loads
document.addEventListener("DOMContentLoaded", function () {
  // Create a new div element for the bar
  var bar = document.createElement("div");

  // Set the styles for the bar
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.width = "100%";
  bar.style.height = "calc(30px + 2cm)";
  bar.style.backgroundColor = "#2c2c2c"; // Dark grey
  bar.style.zIndex = "9999";
  bar.style.display = "flex";
  bar.style.justifyContent = "space-between";
  bar.style.alignItems = "center";
  bar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
  bar.style.color = "white";

  // Create an img element for the logo
  var logo = document.createElement("img");
  logo.src = "https://cdn-icons-png.flaticon.com/512/8702/8702643.png"; // Logo URL
  logo.alt = "Logo";
  logo.style.height = "40px";
  logo.style.marginLeft = "15px";
  logo.style.objectFit = "contain";

  // Create a span element for the text
  var text = document.createElement("span");
  text.textContent = "ClustR";
  text.style.fontSize = "1.8rem";
  text.style.fontWeight = "bold";
  text.style.marginLeft = "10px";

  // Create a button for "Mods"
  var modsButton = document.createElement("button");
  modsButton.textContent = "Mods";
  modsButton.style.marginRight = "15px";
  modsButton.style.padding = "8px 15px";
  modsButton.style.fontSize = "1rem";
  modsButton.style.cursor = "pointer";
  modsButton.style.border = "1px solid #ccc";
  modsButton.style.borderRadius = "5px";
  modsButton.style.backgroundColor = "#3e3e3e";
  modsButton.style.color = "white";
  modsButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.3)";

  // Create a button for "Dashboard"
  var dashboardButton = document.createElement("button");
  dashboardButton.textContent = "Dashboard";
  dashboardButton.style.marginRight = "15px";
  dashboardButton.style.padding = "8px 15px";
  dashboardButton.style.fontSize = "1rem";
  dashboardButton.style.cursor = "pointer";
  dashboardButton.style.border = "1px solid #ccc";
  dashboardButton.style.borderRadius = "5px";
  dashboardButton.style.backgroundColor = "#3e3e3e";
  dashboardButton.style.color = "white";
  dashboardButton.onclick = function () {
    window.location.href =
      "https://resources.languagenut.com/resources/#/Dashboard?curriculumUid=55";
  };

  // Create a container for the logo and text
  var leftContainer = document.createElement("div");
  leftContainer.style.display = "flex";
  leftContainer.style.alignItems = "center";
  leftContainer.appendChild(logo);
  leftContainer.appendChild(text);

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
  var idsToRemove = ["mountain", "hill"];
  removeElementsById(idsToRemove);

  // Change the background image of the site
  document.body.style.backgroundImage =
    'url("https://cdn2.steamgriddb.com/hero/de6ddd41822944b7a1c6f82769b53fa6.png")';
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";

  // Change the site's favicon
  var favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.href = "https://cdn-icons-png.flaticon.com/512/8702/8702643.png";
  document.head.appendChild(favicon);

  // Change the site's title
  document.title = "ClustR";

  // Add a modal for "Mods"
  modsButton.onclick = function () {
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.width = "300px";
    modal.style.padding = "20px";
    modal.style.backgroundColor = "white";
    modal.style.border = "1px solid #ccc";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    modal.style.textAlign = "center";
    modal.style.zIndex = "10000";

    var closeButton = document.createElement("div");
    closeButton.textContent = "X";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.color = "red";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "1.5rem";
    closeButton.onclick = function () {
      document.body.removeChild(modal);
    };

    // Add options inside the modal
    var bgInputLabel = document.createElement("label");
    bgInputLabel.textContent = "Set Background URL: ";
    var bgInput = document.createElement("input");
    bgInput.type = "text";
    bgInput.placeholder = "Enter image URL";
    bgInput.style.width = "90%";

    var bgButton = document.createElement("button");
    bgButton.textContent = "Set Background";
    bgButton.style.marginTop = "10px";
    bgButton.onclick = function () {
      if (bgInput.value) {
        document.body.style.backgroundImage = `url("${bgInput.value}")`;
      }
    };

    modal.appendChild(closeButton);
    modal.appendChild(bgInputLabel);
    modal.appendChild(bgInput);
    modal.appendChild(bgButton);

    document.body.appendChild(modal);
  };

  // Dynamically load scripts based on URL keywords
  var url = window.location.href;
  if (url.includes("writing")) {
    var script = document.createElement("script");
    script.src =
      "https://raw.githubusercontent.com/Zepr01/Storybook/refs/heads/main/plots/languagenut.js";
    document.body.appendChild(script);
  } else if (url.includes("AiChat")) {
    var script = document.createElement("script");
    script.src =
      "https://raw.githubusercontent.com/Zepr01/Storybook/refs/heads/main/plots/languagenutai.js";
    document.body.appendChild(script);
  }
});
