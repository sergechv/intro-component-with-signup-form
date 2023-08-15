const submit = document.getElementById('claim-btn');
const inputs = document.querySelectorAll('input')
const errorMsg = document.querySelectorAll('.errMsg');
const icon = document.querySelectorAll('.icon-container');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


submit.addEventListener('click', (event) => {
  event.preventDefault();
  let anyInputEmpty = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim()) {
      inputs[i].classList.remove('inputErr');
      errorMsg[i].style.display = 'none';
      icon[i].style.display = 'none';

      if (inputs[i].type === 'email' && !emailRegex.test(inputs[i].value)) {
        errorMsg[i].textContent = 'Invalid email format';
        errorMsg[i].style.display = 'inline-block';
        icon[i].style.display = 'inline-block';
        anyInputEmpty = true;
      }
    } else {
      inputs[i].classList.add('inputErr');
      errorMsg[i].style.display = 'inline-block';
      icon[i].style.display = 'inline-block';
      anyInputEmpty = true;
    }
  }

  if (!anyInputEmpty) { // If no empty inputs were found
    for (const input of inputs) {
      input.value = ""; // Clear input values
    }
  }
  
});

inputs.forEach(input => {
  input.addEventListener('click', () => {
    input.classList.remove('inputErr');
  });
});
