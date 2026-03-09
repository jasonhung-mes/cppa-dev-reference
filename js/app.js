window.onload = function(){

  // Render sidebar menu
  if (typeof renderSidebar === "function") {
    renderSidebar();
  }

  // Default landing page
  if (typeof loadPage === "function") {
    loadPage("ch3-master/plant.html");
  }

}