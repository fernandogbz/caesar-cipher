const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const originalInput = document.getElementById('original-input');
const cipher = document.getElementById('cipher');
const outcome = document.getElementById('outcome');
const range = document.getElementById('range');

const shiftMessage = () => {
  const wordArray = [...originalInput.value.toUpperCase()];
  alert(wordArray);
}

const submit = e => {
    e.preventDefault();
    outcome.innerHTML = '';
    shiftMessage()
}

cipher.onsubmit = submit;
