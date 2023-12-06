function toggleAccordion(element) {
  // Get the next sibling, which is the content div
  var content = element.nextElementSibling;

  // Toggle the display of the content
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
