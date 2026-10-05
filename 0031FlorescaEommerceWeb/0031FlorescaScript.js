let introOpened = false;

const videoIntro = document.getElementById("videoIntro");

if (videoIntro) {

    videoIntro.addEventListener("click", function () {

        if (!introOpened) {

            introOpened = true;

            videoIntro.classList.add("hide");

            setTimeout(function () {
                videoIntro.style.display = "none";
            }, 1000);

        }

    });

}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}


// sign up modals

// Open Sign Up
function openSignup() {
    document.getElementById("signupModal").style.display = "flex";
}


// Close Sign Up
function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

// Go from Sign In to Sign Up
function switchToSignup() {
    closeLogin();
    openSignup();
}


// Go from Sign Up to Sign In
function switchToLogin() {
    closeSignup();
    openLogin();
}


//signup

function signup(event) {
    event.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    // Check if the passwords match
    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters long!");

        return;
    }


    // Save the account
    localStorage.setItem("artsistaName", name);
    localStorage.setItem("artsistaEmail", email);
    localStorage.setItem("artsistaPassword", password);


    alert("Signup successful! You can now log in. 💗");


    // Clear the Sign Up form
    document.querySelector("#signupModal form").reset();


    // Close Sign Up
    closeSignup();


    // Open Sign In
    openLogin();
}


//signin

function login(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get information from the Sign In form
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;


    // Get the saved account
    let savedEmail = localStorage.getItem("artsistaEmail");
    let savedPassword = localStorage.getItem("artsistaPassword");
    let savedName = localStorage.getItem("artsistaName");


    // Check if an account exists
    if (savedEmail === null || savedPassword === null) {

        alert("No account found. Please Sign Up first.");

        return;
    }


    // Check the email and password
    if (email === savedEmail && password === savedPassword) {

        alert("Welcome back, " + savedName + "! 💗");


        // Clear the Sign In form
        document.querySelector("#loginModal form").reset();


        // Close Sign In
        closeLogin();

    } else {

        alert("Incorrect email or password.");

    }
}


//cart 


let cart = [];
function addToCart(productName) {

    
    cart.push(productName);
    alert(productName + " has been added to your cart! 🛒");


    // Show the cart in the browser console
    console.log("Cart:", cart);
}


// inquiry form

function sendInquiry(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get information from the form
    let name = document.getElementById("inquiryName").value;
    let email = document.getElementById("inquiryEmail").value;
    let message = document.getElementById("inquiryMessage").value;

    if (name === "" || email === "" || message === "") {

        alert("Please complete all fields.");

        return;
    }


    // Check the email
    if (!email.includes("@") || !email.includes(".")) {

        alert("Please enter a valid email address.");

        return;
    }

    alert("Thank you, " + name + "! Your inquiry has been received. 💌");
    document.querySelector(".inquiry form").reset();
}


window.onclick = function(event) {

    let loginModal = document.getElementById("loginModal");
    let signupModal = document.getElementById("signupModal");


    // Close Sign In and sign up
    if (event.target === loginModal) {
        closeLogin();
    }

    if (event.target === signupModal) {
        closeSignup();
    }
};

let galleryPhotos = [];
let currentPhoto = 0;
let currentProduct = "";


function openGallery(photo, productName) {

    let product = photo.parentElement;
    let photos = product.querySelectorAll("img");

    galleryPhotos = [];
    currentProduct = productName;

    for (let i = 0; i < photos.length; i++) {
        galleryPhotos.push(photos[i].src);
    }

    currentPhoto = 0;

    document.getElementById("galleryPhoto").src =
        galleryPhotos[currentPhoto];

    document.getElementById("galleryProductName").textContent =
        currentProduct;

    document.getElementById("photoGallery").style.display = "flex";
}


function closeGallery() {

    document.getElementById("photoGallery").style.display = "none";

}


function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= galleryPhotos.length) {
        currentPhoto = 0;
    }

    document.getElementById("galleryPhoto").src =
        galleryPhotos[currentPhoto];

}


function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = galleryPhotos.length - 1;
    }

    document.getElementById("galleryPhoto").src =
        galleryPhotos[currentPhoto];

}


function addGalleryProduct() {

    addToCart(currentProduct);

    closeGallery();

}