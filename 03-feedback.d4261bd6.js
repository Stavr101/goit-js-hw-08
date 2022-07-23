const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()})),e.textarea.addEventListener("input",(function(e){const t=e.currentTarget.value;localStorage.setItem("fbk-message",t),console.log(t)}));
//# sourceMappingURL=03-feedback.d4261bd6.js.map
