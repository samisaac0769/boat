// document.addEventListener('DOMContentLoaded', () => {
//     const wrapper = document.querySelector('.wrapper');
//     const loginLink = document.querySelector('.login-link');
//     const registerLink = document.querySelector('.register-link');
//     const btnPopup = document.querySelector('.btnlogin-popup');
//     const iconClose = document.querySelector('.close-icon');

//     registerLink.addEventListener('click', () => {
//         wrapper.classList.add('active');
//     });

//     loginLink.addEventListener('click', () => {
//         wrapper.classList.remove('active');
//     });

//     btnPopup.addEventListener('click', () => {
//         wrapper.classList.add('active-popup');
//     });

//     iconClose.addEventListener('click', () => {
//         wrapper.classList.remove('active-popup');
//     });

// });

document.addEventListener('DOMContentLoaded', () => {

    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");
    const loginButton = document.getElementById("logindrop");

    // Event listener to toggle dropdown visibility
    dropdownButton.addEventListener("click", function () {
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        }
    });

    // Event listener to close the dropdown when Login button is clicked
    loginButton.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });

    const Categories = document.getElementById("Categories");
    const Categoriesdrop = document.getElementById("Categories-drop");

    Categories.addEventListener("mouseover", function () {
        if (Categoriesdrop.style.display === "none" || Categoriesdrop.style.display === "") {
            Categories.addEventListener("mouseover", function () {
                Categoriesdrop.style.display = "block";
            });


            Categoriesdrop.addEventListener("mouseover", function () {
                Categoriesdrop.style.display = "block";
            });
        } else {
            Categoriesdrop.addEventListener("mouseout", function () {
                Categoriesdrop.style.display = "none";
            });
        }
    });




});

function otp() {
    var mobileNumber = document.getElementById("mobileNumber").value;
    var error = document.getElementById("errormsg");

    var phonePattern = /^[6789]\d{9}$/;

    if (mobileNumber === "") {
        error.textContent = "Mobile Number is Required";
    }
    else if (!phonePattern.test(mobileNumber)) {
        error.textContent = "Mobile No. should be 10 digits & start with 6789 ";
    }
    else {
        error.textContent = ""; // Clear the error message if the input is not empty
        // $('#myModal').modal('hide');
        // $('#myModal2').modal('show');
        mobileNumber.value = "";
        $('#myModal').on('hidden.bs.modal', function () {
            $('#myModal2').modal('show');
        });

        $('#myModal').modal('hide');

        startCountdown();
    }
}




function timer() {
    startCountdown();
}

function startCountdown() {
    var countdown = 60; // 60 seconds = 1 minute
    var timeDisplay = document.getElementById("time");

    function updateCountdown() {
        if (countdown > 0) {
            timeDisplay.textContent = "Resend OTP in : " + countdown + " sec";
            countdown--;
        } else {
            clearInterval(interval);
            timeDisplay.style.width = "auto";
            timeDisplay.style.padding = "5px";
            timeDisplay.textContent = "Resend OTP!";
        }
    }

    updateCountdown();
    var interval = setInterval(updateCountdown, 1000); // Update every second
}


function checkotp() {
    const otpNumber = document.getElementById("otpNumber").value;
    const error = document.getElementById("timerror");



    if (otpNumber === "") {
        error.textContent = "Enter the OTP";
    }
    else if (otpNumber.length !== 6) {
        error.textContent = "Enter the 6 digit OTP number ";
    }
    else {
        error.textContent = "";
        $('#myModal2').modal('hide');
    }
}

