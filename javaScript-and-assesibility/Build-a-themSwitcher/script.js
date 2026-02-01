// ======= Theme Data =======
const themes = [
  { name: "light", message: "Light theme is now active!" },
  { name: "dark", message: "Dark theme is now active!" },
  { name: "ocean", message: "Ocean theme is now active!" } ,
  { name: "nord", message: "The frost has settled - Nord theme is on!" } 
  // optional extra theme
];


// ======= Create DOM Elements =======

// Create theme switcher button
const themeButton = document.createElement("button");
themeButton.id = "theme-switcher-button";
themeButton.setAttribute("aria-haspopup", "true");
themeButton.setAttribute("aria-expanded", "false");
themeButton.setAttribute("aria-controls", "theme-dropdown");
themeButton.textContent = "Switch Theme";
document.body.appendChild(themeButton);

// Create dropdown menu
const themeDropdown = document.createElement("ul");
themeDropdown.id = "theme-dropdown";
themeDropdown.setAttribute("role", "menu");
themeDropdown.setAttribute("aria-labelledby", "theme-switcher-button");
themeDropdown.hidden = true;

// Add li items for each theme

themes.forEach(theme => {
  const li = document.createElement("li");
  li.setAttribute("role", "menuitem");
  li.id = `theme-${theme.name}`; // matches the lowercase name
  li.textContent = theme.name.charAt(0).toUpperCase() + theme.name.slice(1); // display capitalized
  themeDropdown.appendChild(li);
});

document.body.appendChild(themeDropdown);

// Create status element with aria-live
const statusEl = document.createElement("div");
statusEl.id = "status";
statusEl.setAttribute("aria-live", "polite");
document.body.appendChild(statusEl);

// ======= Functionality =======

// Toggle dropdown menu visibility
themeButton.addEventListener("click", () => {
  const isOpen = !themeDropdown.hidden;
  themeDropdown.hidden = isOpen; // hide if open, show if hidden
  themeButton.setAttribute("aria-expanded", String(!isOpen));
});

// Handle theme selection
themeDropdown.addEventListener("click", (event) => {
  const selected = event.target;

  // Only respond to menu items
  if (selected && selected.getAttribute("role") === "menuitem") {
    const themeName = selected.id.replace("theme-", ""); // e.g., "light"

    // Remove existing theme classes from body
    themes.forEach(t => document.body.classList.remove(`theme-${t.name}`));

    // Add the selected theme class
    document.body.classList.add(`theme-${themeName}`);

    // Find the corresponding theme object to get the message
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      statusEl.textContent = theme.message; // <-- aria-live updates automatically
    }

    // Close dropdown
    themeDropdown.hidden = true;
    themeButton.setAttribute("aria-expanded", "false");
  }
});


// Optional: close dropdown if click outside
document.addEventListener("click", (event) => {
  if (!themeButton.contains(event.target) && !themeDropdown.contains(event.target)) {
    themeDropdown.hidden = true;
    themeButton.setAttribute("aria-expanded", "false");
  }
});
