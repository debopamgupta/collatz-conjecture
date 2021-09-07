const form = document.querySelector(".input-form");
const btn = document.querySelector("button");
const outputElement = document.querySelector(".output");

function threeXPlusOne(number) {
  while (number != 1) {
    // show each calculation step on the page
    const ele = document.createElement("h4");
    ele.innerText = number;
    outputElement.append(ele);

    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3;
      number++;
    }
  }

  // append one at the end because the loop breaks without showing 1
  const ele = document.createElement("h4");
  ele.innerText = 1;
  outputElement.append(ele);
}

function handleInput(input) {
  outputElement.innerHTML = "";
  if (input > 0) {
    // valid
    threeXPlusOne(input);
  } else {
    // invalid
    const errorText = document.createElement("h3");
    errorText.innerText = "Invalid / Bad Input. Try again.";
    outputElement.append(errorText);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let input = formData.get("input");
  input = Number(input);
  handleInput(input);
  form.reset();
});
