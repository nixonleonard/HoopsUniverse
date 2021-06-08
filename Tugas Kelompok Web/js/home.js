$(document).ready(() => {
  var index = 0
  var slides = document.getElementsByClassName("slide");

  for(var i=0;i<slides.length;i++){
    slides[i].style.display= "none"
  }
  slides[index].style.display = "block"

  $(".arrow").click(() => {
    index++
    index %= slides.length

    for(var i=0;i<slides.length;i++){
      slides[i].style.display= "none"
    }
    slides[index].style.display = "block"
    
  })
})