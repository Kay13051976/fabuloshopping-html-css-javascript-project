const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput([firstName, lastName, email, password, confirmPassword]);
  if (!validateEmail(email.value.trim())) {
    showerror(email, "Invalid Email");
  } else {
    showsuccess(email);
  }
  checkPassword(password, confirmPassword);
  checkInputLength(firstName, 1, 20);
  checkInputLength(lastName, 1, 20);
  checkInputLength(password, 8, 20);
  checkInputLength(confirmPassword, 8, 20);

});
//**** use function checkInput instead//
//   if (firstName.value === "") {
//     showerror(firstName, "Please enter your first name");
//   } else {
//     showsuccess(firstName);
//   }
//   if (lastName.value === "") {
//     showerror(lastName, "Please enter your first name");
//   } else {
//     showsuccess(lastName);
//   }
//   if (email.value === "") {
//     showerror(email, "Please enter your first name");
//   } else if (!validateEmail(email.value)) {
//     showerror(email, "Invalid Email");
//   } else {
//     showsuccess(email);
//   }
//   if (password.value === "") {
//     showerror(password, "Please enter your first name");
//   } else {
//     showsuccess(password);
//   }
//   if (confirmPassword.value === "") {
//     showerror(confirmPassword, "Please enter your first name");
//   } else {
//     showsuccess(confirmPassword);
//   }
// });

function showerror(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showsuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function checkInput(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showerror(input, `Please enter your ${getInputCase(input)}`);
    } else {
      showsuccess(input);
    }
  });
}
// need to double do to lowercase in firstName,lastName//
function getInputCase(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkPassword(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showerror(confirmPassword, "Confirm password not match");
  }
}
function checkInputLength(input, min, max) {
  if (input.value.length <= min) {
    showerror(
      input,
      `${getInputCase(input)} Have to have more than ${min}character`
    );
  } else if (input.value.length > max) {
    showerror(
      input,
      `${getInputCase(input)} Have to have less than ${max}character`
    );
  } else {
    showsuccess(input);
  }
}
