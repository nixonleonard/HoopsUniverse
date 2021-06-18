/*Product slider start------------------------------------------------------*/
var currentImageName;

function getid(obj) {
  currentImageName = obj.id;
}

var imageSize = 9;
var imageName = [];
var elementName = [];
var mainImageName = [];

for(i=0;i<imageSize;i++){
	imageName[i] = "thumbnail-"+(i+1);
	elementName[i] = "active-"+(i+1);
	mainImageName[i] = "main-image-"+(i+1);
}

var idx;
for(i=0;i<imageSize;i++){
	let thumbnails = document.getElementsByClassName(imageName[i])
	let activeImages = document.getElementsByClassName(elementName[i])
	
	for(var j = 0; j < thumbnails.length; j++){
		thumbnails[j].addEventListener('mouseover', function(){
			idx = currentImageName.substring(currentImageName.length - 1, currentImageName.length);
			if(activeImages.length > 0){
				activeImages[0].classList.remove(elementName[idx-1]);
			}

			this.classList.add(elementName[idx-1]);
			document.getElementById(mainImageName[idx-1]).src = this.src;
		})
	}
}
/*Procuct slider end-----------------------------------------------------*/

/*Menu dropdown for responsive start---------------------------------------------------*/
$(document).ready(function(){
	$('.m-dropdown').click(function(){
		$('.m-dropdown').toggleClass('active')
		$('.navigation').toggleClass('active')
	})
})
/*Menu dropdown for responsive end-------------------------------------------------*/
