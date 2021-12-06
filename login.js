// function rafAsync() {
//   return new Promise(resolve => {
//       requestAnimationFrame(resolve); //faster than set time out
//   });
// }

// async function checkElement(selector) {
//   var querySelector = null;
//   while (!querySelector) {
//       await rafAsync();
//       querySelector = document.querySelector(selector);
//   }
//   return querySelector;
// }  

async function login(passcode) {
  // var login_button = document.querySelector("[name='_eventId_proceed']");
  // login_button.click();
  // checkElement("[name='_eventId_proceed']").then((login_button) => {
  //   login_button.click();
  // }).then(() => {
  //   checkElement("#passcode").then((passcode_button) => {
  //     passcode_button.click();
  //   }).then(() => {
  //     var input_password = document.querySelector("[name='passcode']");
  //     input_password.value = "11111";
  //     passcode_button.click();
  //   }
  // )});

  // checkElement("[name='passcode']").then((element) => {
  //   element.value = "11111";
  // });
  // checkElement("#passcode").then((element) => {
  //   element.click();
  // });
  // var duo = document.querySelector("#duo_iframe");
  var enter_password = document.querySelector("#passcode");
  enter_password.click();
  var input_password = document.querySelector("[name='passcode']");
  input_password.value = passcode;
  enter_password.click();
}

login();