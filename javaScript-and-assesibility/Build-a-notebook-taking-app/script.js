const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");

let currentContent = "";

// When the user focuses on the note, clear the saved message
noteEl.addEventListener("focus", () => {
  statusEl.textContent = "";
});


noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;
  console.log(currentContent);

  statusEl.textContent = "Note saved successfully!";
});

window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});