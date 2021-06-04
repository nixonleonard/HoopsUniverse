var index = 1;
picture(index);

function move(n) {
  picture(index += n);
}

function slides(n) {
  picture(index = n);
}

function picture(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  var point = document.getElementsByClassName("point");
  if (n > slide.length) {
    index = 1
  }    
  if (n < 1) {
    index = slide.length
  }
  for (i = 0; i < slide.length; i++) {
      slide[i].style.display = "none";  
  }
  for (i = 0; i < point.length; i++) {
      point[i].className = point[i].className.replace(" now", " point");
  }
  slide[index-1].style.display = "block";  
  point[index-1].className += " now";
}