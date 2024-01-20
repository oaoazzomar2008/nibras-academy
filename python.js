
function generateErrorsHtml(error) {
    return '<div class="alert alert-danger" role="alert">' +
        error + '</div>';
}
function generateSuccessHtml(success) {
    return '<div class="alert alert-success p-5 font-weight-bold" role="alert">' +
        success + '</div>';
}

var loginBtn = document.getElementById("submit");
loginBtn.addEventListener("click", function (ev) {
    ev.preventDefault();

    var errors = document.getElementById("errors");
    var username = document.getElementById("username").value.trim(); // Add parentheses to trim
    var password = document.getElementById("pass").value.trim(); // Add parentheses to trim
    var successful = document.getElementById("success");
    errors.innerHTML = "";
    successful.innerHTML = "";

    if (username.length === 0) {
        var error = generateErrorsHtml("Username is required!");
        errors.insertAdjacentHTML("beforeend", error);
    } else if (username.length < 6 ){
        var error = generateErrorsHtml("Username must be more than 6 characters");
        errors.insertAdjacentHTML("beforeend", error);
    }
    if (password.length < 1) { // Change <= to <
        var error = generateErrorsHtml("Password is required!");
        errors.insertAdjacentHTML("beforeend", error);
    } else if (password.length < 10 ){
        var error = generateErrorsHtml("Password must be more than 10 characters");
        errors.insertAdjacentHTML("beforeend", error);
    }
    else{
        var success = generateSuccessHtml("Hi, " + '"' + username + '"');
        successful.insertAdjacentHTML("beforeend", success);
        var container = document.getElementById("container");
        container.style.display = 'none';
    }
});









