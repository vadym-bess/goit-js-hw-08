import throttle from "lodash.throttle";

const EMAIL_KEY = "user-email"
const STORAGE_KEY = "feedback-msg";

const userEmail = document.querySelector(".user-email")
const form = document.querySelector(".feedback-form");
const feedbackForm = document.querySelector(".feedback-form__textarea");
let formData = {};

feedbackForm.addEventListener("input", throttle(onTextAreaInput, 1000));
form.addEventListener("submit", onFormSubmit);
userEmail.addEventListener("input", throttle(onEmailAreaInput, 1000));




form.addEventListener("input", e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
});

populateTextarea();
populateEmailarea();


function onFormSubmit(e) {

    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(EMAIL_KEY);
 };

function onEmailAreaInput(e) {
    const email = e.target.value;
    localStorage.setItem(EMAIL_KEY, JSON.stringify(email));
}


function onTextAreaInput(e) {

    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(message));

};

function populateTextarea(e) {
  
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    
    if (savedMessage) {
        feedbackForm.value = JSON.parse(savedMessage);
    };

    
};

function populateEmailarea(e) {
    const savedEmail = localStorage.getItem(EMAIL_KEY)

    if (savedEmail) {
        userEmail.value = JSON.parse(savedEmail);
    };
};