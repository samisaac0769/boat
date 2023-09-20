

$(document).ready(function () {
    $("#mobile").click(function () {
        $("#progress-bar").val(0.33);
    });

    $("#address").click(function () {
        $("#progress-bar").val(0.66);
    });

    $("#payment").click(function () {
        $("#progress-bar").val(1);
    });
});