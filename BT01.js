let currentStep = 1;

function showStep(step) {
    const step = document.getElementsByClassName('step');
    for(let i = 0; i < step.length; i++) {
        if(i + 1 === step) {
            step[i].classList.add('active');
        } else {
            step[i].classList.remove('active');
        }
    }
} 

function nextStep() {
    if (currentStep < 4) {
        currentStep++;
        showStep(currentStep);
    }
    if (currentStep === 4) {
        document.getElementById('step4').querySelector('button:last-child').disabled = false;
    }
}

function prevStep() {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      document.getElementById('step4').querySelector('button:last-child').disabled = true;
    }
}

function submitForm() {
    alert('Form submitted!');
}

showStep(currentStep);