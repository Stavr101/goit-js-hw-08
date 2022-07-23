const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
}

function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem('fbk-message', message);
  console.log(message);
}
