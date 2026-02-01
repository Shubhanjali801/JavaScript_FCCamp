const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Deselect all tabs
    tabs.forEach(t => t.setAttribute("aria-selected", "false"));

    // Hide all panels
    panels.forEach(p => p.hidden = true);

    // Select the clicked tab
    tab.setAttribute("aria-selected", "true");

    // Get the ID of the associated panel
    const associatedPanel = tab.getAttribute("aria-controls");

    // Get the actual panel element
    const panel = document.getElementById(associatedPanel);

    // Show the corresponding panel
    panel.hidden = false;
  });
});
