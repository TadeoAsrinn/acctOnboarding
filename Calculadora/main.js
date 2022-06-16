let display = document.querySelector("#display-result");

function getNumber(ref) {
  let value = ref.value;
  display.value += value;
}

function clean() {
  display.value = "";
}

function result() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => {
      clean();
    }, 300);
  }
}


// let buttons = document.querySelectorAll('button');
// for (item of buttons) {
//     item.addEventListener('click', getNumber);
//   }