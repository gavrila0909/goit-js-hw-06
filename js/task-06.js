
const textInput = document.getElementById('validation-input');


textInput.addEventListener( 'blur', () => {
    const expectedLength = Number(textInput.getAttribute('data-length'));
    const currentLength = textInput.value.trim().length;
    if (currentLength === expectedLength) {
      textInput.classList.add('valid');
      textInput.classList.remove('invalid');
    } else {
      textInput.classList.add('invalid');
      textInput.classList.remove('valid');
    }
  });




