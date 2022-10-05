$(document).ready(() => {
  var index = 0
  var indexp = 0
  var slides = document.getElementsByClassName("slide");

  for(var i=0;i<slides.length;i++){
    slides[i].style.display= "none"
  }
  slides[index].style.display = "block"

  $(".next").click(() => {
    indexp++
    indexp %= slides.length

    for(var i=0;i<slides.length;i++){
      slides[i].style.display= "none"
    }
    slides[indexp].style.display = "block"
    
  })

  $(".prev").click(() => {
    indexp--
    indexp %= slides.length
    if(indexp<0){
      indexp = 2
    }

    for(var i=0;i<slides.length;i++){
      slides[i].style.display= "none"
    }
    slides[indexp].style.display = "block"
    
  })
})