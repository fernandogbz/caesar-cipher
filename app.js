const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const originalInput = document.getElementById('original-input');
const cipher = document.getElementById('cipher');
const outcome = document.getElementById('outcome');
const range = document.getElementById('range');

const shiftMessage = () => {
  const wordArray = [...originalInput.value.toUpperCase()];
  printChar(0, wordArray);
}

const printChar = (currentLetterIndex, wordArray) => {
  if(wordArray.length === currentLetterIndex) return;
  originalInput.value = originalInput.value.substring(1);
  const spanChar = document.createElement("span");
  outcome.appendChild(spanChar);
  animateChar(spanChar)
    .then(() => {
      const charUncoded = wordArray[currentLetterIndex];
      spanChar.innerHTML = alphabet.includes(charUncoded) ?
          alphabet[(alphabet.indexOf(charUncoded) + parseInt(range.value)) % alphabet.length] :
          charUncoded;
      printChar(currentLetterIndex + 1, wordArray);
    });
}

const animateChar = spanChar => {
  let changeLetter = 0;
  return new Promise(resolve => {
    const interval = setInterval(() => {
      spanChar.innerHTML = alphabet[Math.floor(Math.random() * alphabet.length)];
      changeLetter++;
      if(changeLetter === 5) {
        clearInterval(interval);
        resolve();
      }
    }, 70);
  });
}

const submit = e => {
    e.preventDefault();
    outcome.innerHTML = '';
    shiftMessage()
}

cipher.onsubmit = submit;
