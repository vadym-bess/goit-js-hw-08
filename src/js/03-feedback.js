import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-msg";
const form = document.querySelector(".feedback-form");
const feedbackForm = document.querySelector(".feedback-form__textarea");
const formData = {};

feedbackForm.addEventListener("input", throttle(onTextAreaInput, 1000));
form.addEventListener("submit", onFormSubmit);

form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
});

populateTextarea();



function onFormSubmit(e) {

    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
 };


function onTextAreaInput(e) {

    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);

};

function populateTextarea(e) {
  
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    
    if (savedMessage) {
        feedbackForm.value = savedMessage;
    };
};

