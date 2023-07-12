function currentProject(projeto) {
  showProject(slideIndex = projeto);
}

function showProject(projeto) {
  let i;
  let slides = document.querySelectorAll(".mySlides"); // let x
  let project = document.querySelectorAll(".project"); // let dots
  if (projeto > slides.length) {slideIndex = 1}
  if (projeto < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < project.length; i++) {
    project[i].className = project[i].className.replace(" projectOpacity", "");
  }
  slides[slideIndex-1].style.display = "block";
  project[slideIndex-1].className += " projectOpacity";
}