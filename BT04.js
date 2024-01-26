let jokes = [
    {
      "joke": "All vampires keep their money in a special place—the blood bank."
    },
    {
      "joke": "What do you call someone who can’t stick to a diet? A desserter."
    },
];

const jokeDisplay = document.getElementById('joke-display');
const getJokeButton = document.getElementById('getJokeButton');

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex].joke;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

getJokeButton.addEventListener('click', () => {
    const randomJoke = getRandomJoke();
    const randomColor = getRandomColor();

    jokeDisplay.textContent = randomJoke;
    document.body.style.backgroundColor = randomColor;
});