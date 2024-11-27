(function () {
  // Create a new div for the white bar
  var bar = document.createElement('div');
  bar.style.position = 'fixed';
  bar.style.top = '0';
  bar.style.left = '0';
  bar.style.width = '100%';
  bar.style.height = 'calc(30px + 2cm)';
  bar.style.backgroundColor = 'white';
  bar.style.zIndex = '9999';
  bar.style.display = 'flex';
  bar.style.justifyContent = 'center';
  bar.style.alignItems = 'center';
  bar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';

  // Create an img element for the logo
  var logo = document.createElement('img');
  logo.src = 'https://cdn-icons-png.flaticon.com/512/8702/8702643.png';
  logo.alt = 'Logo';
  logo.style.height = '40px';
  logo.style.marginLeft = '15px';
  logo.style.objectFit = 'contain';

  // Add the logo to the bar
  bar.appendChild(logo);

  // Append the bar to the body
  document.body.appendChild(bar);

  // Remove specific elements by ID
  function removeElementsById(ids) {
    ids.forEach(function (id) {
      var element = document.getElementById(id);
      if (element) element.remove();
    });
  }
  var idsToRemove = ['mountain', 'hill'];
  removeElementsById(idsToRemove);

  // Change the background image of the site
  var background = document.createElement('div');
  background.style.position = 'fixed';
  background.style.top = 'calc(30px + 2cm)';
  background.style.left = '0';
  background.style.width = '100%';
  background.style.height = '100%';
  background.style.backgroundImage = 'url("https://cdn2.steamgriddb.com/hero/de6ddd41822944b7a1c6f82769b53fa6.png")';
  background.style.backgroundSize = 'cover';
  background.style.backgroundRepeat = 'no-repeat';
  background.style.backgroundPosition = 'center';
  background.style.zIndex = '1';

  // Append the background to the body
  document.body.appendChild(background);

  // Create buttons
  function createButton(text, url) {
    var button = document.createElement('button');
    button.textContent = text;
    button.style.position = 'relative';
    button.style.padding = '15px 30px';
    button.style.fontSize = '1.2rem';
    button.style.margin = '10px';
    button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    button.style.border = '2px solid darkgray';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.3s ease';
    button.style.zIndex = '2';

    // Add hover effect
    button.onmouseover = function () {
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    };
    button.onmouseout = function () {
      button.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    };

    // Add click event if URL is provided
    if (url) {
      button.onclick = function () {
        window.location.href = url;
      };
    }
    return button;
  }

  // Container for the buttons
  var buttonContainer = document.createElement('div');
  buttonContainer.style.position = 'fixed';
  buttonContainer.style.top = '50%';
  buttonContainer.style.left = '50%';
  buttonContainer.style.transform = 'translate(-50%, -50%)';
  buttonContainer.style.zIndex = '2';
  buttonContainer.style.display = 'none'; // Hide initially

  // Create the buttons
  var dashboardButton = createButton('Dashboard', 'https://resources.languagenut.com/resources/#/Dashboard?curriculumUid=55');
  var homeworkButton = createButton('Homework', 'https://resources.languagenut.com/resources/#/Homework');
  var customisationButton = createButton('Customisation', null);

  // Append the buttons to the container
  buttonContainer.appendChild(dashboardButton);
  buttonContainer.appendChild(homeworkButton);
  buttonContainer.appendChild(customisationButton);

  // Append the container to the body
  document.body.appendChild(buttonContainer);

  // Function to check the current URL and display buttons if it matches
  function checkURL() {
    if (window.location.href === 'https://resources.languagenut.com/resources/#/Curriculum') {
      buttonContainer.style.display = 'flex'; // Show the buttons
    } else {
      buttonContainer.style.display = 'none'; // Hide the buttons
    }
  }

  // Check the URL every second
  setInterval(checkURL, 1000);

  // Change the site's favicon
  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = 'https://cdn-icons-png.flaticon.com/512/8702/8702643.png';
  document.head.appendChild(favicon);

  // Change the site's title
  document.title = 'FuseArc';
})();
