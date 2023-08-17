document.addEventListener("DOMContentLoaded", function() {
    const targetNumber = Math.floor(Math.random() * 20) + 1;
    let attempts = 0;

    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const hint = document.getElementById("hint");

    guessButton.addEventListener("click", function() {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess < targetNumber) {
            hint.textContent = "O número é maior.";
        } else if (userGuess > targetNumber) {
            hint.textContent = "O número é menor.";
        } else {
            hint.textContent = `Parabéns! Você acertou o número ${targetNumber} em ${attempts} tentativas.`;
        }
    });
});