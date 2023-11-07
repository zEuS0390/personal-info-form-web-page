import {
  CheckRangeEvent,
  submitEvent,
  resetEvent,
  updateTextCount,
} from "./functions.js";
import * as vars from "./variables.js";

document.body.onload = () => {
  updateTextCount();
};

// Check Number Input Min - Max Range
vars.numberInput.addEventListener("keyup", CheckRangeEvent);

// Submit Input Event
vars.form.addEventListener("submit", submitEvent);

// Clear Input Event
vars.form.addEventListener("reset", () => {
  resetEvent();
  const confirmationResponse = confirm("Are you sure you want to reset?");
  if (confirmationResponse) {
    vars.termsAndPrivacy.checked = false;
  }
});

vars.formValues["desc"].addEventListener("keyup", updateTextCount);
