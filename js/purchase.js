// let searchBar = $("#dropdown-trigger");
//
// searchBar.addEventListener("focus", () => {
//     alert("test");
//     });

function test() {
    alert("showDetails");
}

// Details
function showDetails() {
    let popup = $("#popup");
    popup.removeClass("hide");
}

function closeDetails() {
    let popup = $("#popup");
    popup.addClass("hide");
}

// Size Selection
function updateSizeLabels(btn) {
    // alert("clicked " + btnId);
    let sizeButtons = $(".size-option button");
    sizeButtons.removeClass("selected-type");
    // let target = `#${btn}`;
    // console.log(target);
    let selectedType = $(`#${btn}`);
    selectedType.addClass("selected-type");
}

function selectedSize(btn) {
    let sizes = $(".size button");
    sizes.removeClass("selected-size");
    let selectedSize = $(`#${btn}`);
    selectedSize.addClass("selected-size")
}

// Product carousel
let index = 0;

function nextSlide() {
    if (index === 2) {
        index = 0;
    } else {
        index++;
    }
    showImage(index)
}

function prevSlide() {
    if (index === 0) {
        index = 2;
    } else {
        index--;
    }
    showImage(index)
}

function showImage(n) {
    let slides = $(".carousel-item");
    let navigationCircle = $(".circle");
    // console.log(slides[0].innerHTML);
    slides.hide();
    slides.eq(n).show()
    navigationCircle.removeClass("active");
    // console.log(navigationCircle);
    navigationCircle.eq(n).addClass("active");
}

function coba() { // TODO DELETE
    console.log("coba");
}

// Quantity selection
function increment() {
    let counterLabel = $("#current-quantity");
    let counterInString = counterLabel.html();
    let counterInInt = parseInt(counterInString);
    counterInInt++;
    document.getElementById("current-quantity").innerText = counterInInt.toString();
}

function decrement() {
    let counterLabel = $("#current-quantity");
    let counterInString = counterLabel.html();
    let counterInInt = parseInt(counterInString);
    counterInInt--;

    if (counterInInt === 0) {
        alert("Sorry you have to choose at least 1 item to order");
    } else {
        document.getElementById("current-quantity").innerText = counterInInt.toString();
    }
}

