import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');
//console.log(formRef)
const textareaRef = document.querySelector('.feedback-form textarea');
const inputRef = document.querySelector('.feedback-form input');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextareaInput, 500));


function onTextareaInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
};

populateTextarea();

function onFormSubmit (evt) {
  evt.preventDefault(); 
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY); 
}

function populateTextarea() {
const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(savedMessage)
if (savedMessage) {
   textareaRef.value = savedMessage.message;
   inputRef.value = savedMessage.email;
}
}