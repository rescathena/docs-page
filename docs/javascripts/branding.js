document.addEventListener("DOMContentLoaded", function () {
  // Find the branding title element
  // MkDocs Material uses .md-header__title
  var title = document.querySelector(".md-header__title");
  if (title) {
    // Look for the specific text node or inner element
    // The standard structure might be .md-header__title > .md-header__button (logo) + text
    // Or just text. We'll target the text "Rescathena"

    // This is a rough replacement target. 
    // We want to wrap "RESC" and "ATHENA"
    // Since custom CSS is simpler, we'll replace the text content if it matches.

    // Need to be careful not to wipe out the logo image if present in the same container
    // Usually the logo is an <img> or <svg> separate from the text.

    // Let's modify the data-md-component="header-title" specifically
    var topic = document.querySelector(".md-header__topic"); // Site title
    if (topic) {
      var text = topic.innerText;
      if (text.toLowerCase().includes("rescathena")) {
        topic.innerHTML = '<span class="brand-resc">RESC</span><span class="brand-athena">ATHENA</span>';
      }
    }
  }
});
