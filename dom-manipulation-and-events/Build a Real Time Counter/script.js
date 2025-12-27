    document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const charCount = document.getElementById("char-count");
  const maxChars = 50;

  textInput.addEventListener("input", () => {
    let currentText = textInput.value;

    // Trim if more than 50 characters
    if (currentText.length > maxChars) {
      currentText = currentText.substring(0, maxChars);
      textInput.value = currentText;
    }

    const count = currentText.length;

    // Update counter text
    charCount.textContent = `Character Count: ${count}/${maxChars}`;

    // Add red style if max reached
    if (count === maxChars) {
      charCount.classList.add("red");
    } else {
      charCount.classList.remove("red");
    }
  });
});