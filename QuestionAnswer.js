function randomArrayValue(arr) 
{
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function generateRandomQuestionAnswer(questions, answers) 
{
    const randomQuestion = randomArrayValue(questions);
    const randomAnswer = randomArrayValue(answers);
    return `Вопрос: ${randomQuestion}\nОтвет: ${randomAnswer}`;
}
  
  const questions = [
    "Что мне взять с собой на каток?",
    "Что мне положить в холодильник?",
    "Что мне взять с собой в школу?",
    "Что мне взять с собой в бассейн?"
  ];
  
  const answers = [
    "коньки",
    "яблоки",
    "учебники",
    "полотенце"
  ];
  
  const randomQuestionAnswer = generateRandomQuestionAnswer(questions, answers);
  alert(randomQuestionAnswer);