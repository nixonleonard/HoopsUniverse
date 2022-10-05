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
    let sizeButtons = $(".size-option button");
    sizeButtons.removeClass("selected-type");
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

// Form validations
const registerForm = document.forms["registerForm"];
const name = document.forms["registerForm"]["name"];
const phoneNumber = document.forms["registerForm"]["phoneNumber"];
const email = document.forms["registerForm"]["email"];
const age = document.forms["registerForm"]["age"];
const district = document.forms["registerForm"]["district"];
const address = document.forms["registerForm"]["address"];
const postalCode = document.forms["registerForm"]["postalCode"];
const notes = document.forms["registerForm"]["notes"];
const errorMessage = document.getElementById("error-message");

registerForm.addEventListener("submit", (e) => {
    let messages = [];

    if (name.value === "") {
        messages.push("Name cannot be blank");
    }

    if (phoneNumber.value === "") {
        messages.push("Phone number cannot be blank");
    } else if (!phoneNumber.value.isNumeric()) {
        messages.push("Only can enter number to phone number")
    }

    if (email.value === "") {
        messages.push("Email cannot be blank");
    } else if (!(email.value.includes("@") && email.value.includes("."))) {
        messages.push("Email is not  valid");
    }

    if (district.value === "") {
        messages.push("District cannot be blank");
    }

    if (address.value === "") {
        messages.push("Address cannot be blank");
    }

    if (postalCode.value === "") {
        messages.push("Phone number cannot be blank");
    } else if (!postalCode.value.isNumeric()) {
        messages.push("Only can enter number to phone number")
    }

    if (address.notes === "") {
        messages.push("Address cannot be blank");
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMessage.innerText = messages[0]
    }
});

