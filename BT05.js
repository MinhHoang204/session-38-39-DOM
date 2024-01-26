const numberDisplay = document.getElementById('numberDisplay');
    const maxNumber = 10;
    const animationDuration = 1000;

    let currentNumber = 0;

function animateNumber() {
    if (currentNumber <= maxNumber) {
        numberDisplay.textContent = currentNumber;
        currentNumber++;
        setTimeout(animateNumber, animationDuration);
    }
}

animateNumber();