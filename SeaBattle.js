function getRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fieldLength = getRandomNumber(5, 10);
const shipLength = getRandomNumber(2, 5);

const field = Array(fieldLength).fill(0);
const shipLocation = getRandomNumber(0, fieldLength - shipLength);

for (let i = shipLocation; i < shipLocation + shipLength; i++) 
{
    field[i] = 1;
}

let guesses = [];
let hits = 0;

while (field.includes(1)) 
{
    let guess = +prompt(`Ваш выстрел! (введите число от 0 до ${fieldLength - 1}):`);

    if (guess === null || isNaN(guess) || guess < 0 || guess >= fieldLength) 
    {
        alert("Введите правильный номер!");
        continue;
    }

    if (guesses.includes(guess)) 
    {
        alert("Вы уже стреляли в эту клетку!");
        continue;
    }

    guesses.push(guess);

    if (field[guess] === 1) 
    {
        alert("Потрапили!");
        hits++;
        field[guess] = -1;
    }
    else 
    {
        alert("Промах!");
    }
}

    alert(`Поздравляем, вы потопили корабль! Количество выстрелов: ${guesses.length}`);