console.log("index.js is loaded");
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");
  const textarea = document.querySelector("textarea");
  const output = document.getElementById("output");

 button.addEventListener("click", function () {
  const promptText = textarea.value.trim();

  // Input validation
  output.innerHTML = "<p>Generating...</p>";
  output.style.opacity = "0"; // Optional: fade out first

  // Simulate delay
  setTimeout(() => {
    let imageHTML = "";

    if (promptText.toLowerCase().includes("boxing")) {
      imageHTML = `<img src="https://media.giphy.com/media/xUOwGmoX6C02MEzLGM/giphy.gif" alt="Boxing clip" style="max-width:100%; border-radius:10px;">`;
    } else if (promptText.toLowerCase().includes("space")) {
      imageHTML = `<img src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif" alt="Space scene" style="max-width:100%; border-radius:10px;">`;
    } else {
      imageHTML = `<img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Random animation" style="max-width:100%; border-radius:10px;">`;
    }

    output.innerHTML = `
      <p><strong>Prompt:</strong> <em>${promptText}</em></p>
      ${imageHTML}
    `;
    output.style.opacity = "1"; // Optional: fade in
  }, 1000); // Simulate thinking delay
});

  output.innerHTML = `
    <p><strong>Prompt:</strong> <em>${promptText}</em></p>
    ${imageHTML}
  `;

  output.style.opacity = "1"; // Step 2: fade new content in
}, 1000);
