let drawnNumbersList = [];
let attempts = 0;
let maxNumber = 10;
let secretNumber = generateSecretNumber();

function setElementText(element, text) {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}

function checkGuess() {
    attempts++;
    let userNumber = parseInt(document.getElementById('userValue').value);

    if (userNumber === secretNumber) {
        setElementText('p', `You guessed the number in ${attempts} ${attempts === 1 ? 'try' : 'tries'}`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        // The user did not guess correctly
        if (userNumber > secretNumber) {
            setElementText('p', 'The secret number is lower');
        } else {
            setElementText('p', 'The secret number is higher');
        }
        clearInputBox();
    }
    return;
}

function clearInputBox() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * maxNumber) + 1;
    
    // If all possible numbers have been drawn
    if (drawnNumbersList.length == maxNumber) {
        setElementText('p', 'All possible numbers have already been drawn');
    } else {
        // If the generated number is already in the list
        if (drawnNumbersList.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            drawnNumbersList.push(generatedNumber);
            return generatedNumber;
        }
    }
}

function initialMessages() {
    setElementText('h1', 'Secret Number Game!');
    setElementText('p', `Guess a number from 1 to ${maxNumber}`);
}

function restartGame() {
    // Clear the input box
    clearInputBox();
    // Set the initial messages
    initialMessages();
    // Generate a new secret number
    drawnNumbersList = []; // <- restart the list
    secretNumber = generateSecretNumber();
    // Reset the attempts counter
    attempts = 0;
    // Disable the "New Game" button
    document.querySelector('#restart').setAttribute('disabled', 'true');
}

initialMessages();
