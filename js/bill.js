

$(document).ready(function () {
    

    $("#mobile").click(function () {
        $("#progress-bar").val(0.33);
        $('#bill-address').hide();
        $('#payment-method').hide();
        $('#bill-mobile').show();
    });

    $(".mobile-cont").click(function () {
        var inputValue = $('#10dig').val();
        if (inputValue === '') {
            alert("Please, Enter the mobile Number");
        } else {
        $("#progress-bar").val(0.66);
        $('#payment-method').hide();
        $('#bill-address').show();
        $('#bill-mobile').hide();
        }

    });

    $("#address").click(function () {
        var inputValue = $('#10dig').val();
        if (inputValue === '') {
            alert("You cannot jumb to next step. Sorry!!. Please, Enter the mobile Number");
        } else {
            $("#progress-bar").val(0.66);
            $('#payment-method').hide();
            $('#bill-address').show();
            $('#bill-mobile').hide();
        }


    });

    $(".nextstep-address").click(function () {
        $("#progress-bar").val(1);
        $('#bill-address').hide();
        $('#bill-mobile').hide();
        $('#payment-method').show();

    });


    $(".close-btn").click(function () {
        $(".bill").hide();
    });


    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");

    // Event listener to toggle dropdown visibility
    dropdownButton.addEventListener("click", function () {
        if (dropdownContent.style.display === "block" || dropdownContent.style.display === "") {
            dropdownContent.style.display = "none";
            dropdownButton.style.transform = "rotate(90deg)";
        } else {
            dropdownContent.style.display = "block";
            dropdownButton.style.transform = "rotate(-90deg)";
        }
    });
});