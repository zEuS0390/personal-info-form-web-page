import * as variables from "./variables.js";

export function CheckRangeEvent(e) {
  var value = Number(variables.numberInput.value);
  if (value > variables.numberInput.max) {
    variables.numberInput.value = variables.numberInput.max;
  } else if (value < variables.numberInput.min) {
    variables.numberInput.value = variables.numberInput.min;
  }
}

export function submitEvent(e) {
  e.preventDefault();
  const confirmationResponse = confirm("Are you sure you want to submit?");
  if (confirmationResponse) {
    const valuesOBJ = {};
    variables.formValuesKeys.forEach((key) => {
      valuesOBJ[key] = variables.formValues[key].value;
    });
    const valuesJSON = JSON.stringify(valuesOBJ);
    console.log(valuesJSON);
    resetEvent();
    variables.termsAndPrivacy.checked = false;
    setTimeout(() => {
      alert("Personal information was successfully submitted!");
      location.assign("about:blank");
    }, 500);
  }
}

export function resetEvent() {
  variables.formValuesKeys.forEach((key) => {
    variables.formValues[key].value = "";
  });
  updateTextCount();
}

export function updateTextCount() {
  const MAXTEXT = variables.MAXTEXT;
  const text = variables.formValues["desc"];
  const textCountLabel = variables.textCountLabel;
  const textLength = Number(text.value.length);

  if (textLength >= MAXTEXT) {
    text.value = text.value.slice(0, MAXTEXT);
    textCountLabel.innerHTML = String(MAXTEXT) + " / " + String(MAXTEXT);
    textCountLabel.style.color = "red";
    textCountLabel.style.fontWeight = "bold";
  } else {
    textCountLabel.innerHTML = String(textLength) + " / " + String(MAXTEXT);
    textCountLabel.style.color = "rgb(164, 164, 164)";
    textCountLabel.style.fontWeight = "normal";
  }
}
