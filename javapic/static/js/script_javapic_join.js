// A login form that won’t let users continue until their inputs are correct
// >>>-------------------------------------------------------------->

var form = document.getElementById("signup");
var nameInput = document.querySelector("[name=name]");
var username = document.querySelector("[name=username]");
var email = document.querySelector("[type=email]");

// validates each input field
// >>>-------------------------------------------------------------->
nameInput.addEventListener("blur", function(){ checkName(); });
username.addEventListener("blur", function(){ checkUsername(); });
email.addEventListener("blur", function(){ checkEmail(); });

// check name input field
function checkName() {
  if (nameInput.value.length < 2) {
    alert('Please provide a name of two or more characters.');
    nameInput.focus;
    return false
  }
  return true
}
// check username input field
function checkUsername() {
  if (username.value.length < 2) {
    alert('Please provide a username of two or more characters.');
    username.focus;
    return false
  }
  return true
}
// check email input field
function checkEmail() {
  var valid = /[^@]+@[^@].+/;
  if (!valid.test(email.value)) {
    alert('Please provide a valid email address.\n' +
      'yourEmail@place.com');
    email.focus;
    return false
  }
  return true
}

// prevent the submit button from resetting the page
// otherwise route to the javapic_gallery.html
// >>>-------------------------------------------------------------->
form.addEventListener("submit", function(){ checkFormValidation(event); });

function checkFormValidation(e) {
  // preventDefault for submit button
    e.preventDefault();

  // otherwise submit form and go to javapic_gallery.html
  if (checkName() && checkUsername() && checkEmail()) {
    //console.log(checkName(), checkUsername(), checkEmail())
    //form.setAttribute("action", "javapic_jquery_gallery.html");

    // redirect to gallery upon clicking submit button
    window.location.href = "gallery";

    // Make tagline Develop something beautiful, {name} on javapic_gallery.html
    // >>>------------------------------------------------------------>
    if (window.sessionStorage) {
      sessionStorage.setItem('txtName', nameInput.value);
      console.log(nameInput.value);
    }
  }
}
