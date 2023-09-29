const botResponses = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!"
  ];
  
  function getRandomResponse() 
  {
    
    return ;
  }
  
  while (true) 
  {
    const userInput = prompt("Вы: ");
  
    if (userInput === "До свидания") 
    {
      alert("Бот: До свидания, рад был пообщаться!");
      break;
    }

    let botResponse = "";
    if (userInput === "Привет") 
    {
      botResponse = "Приветствую!";
    } 
    else if (userInput === "Ты кто?") 
    {
      botResponse = "Я бот Василий.";
    } 
    else 
    {
      const randomIndex = Math.floor(Math.random() * botResponses.length);
      botResponse = botResponses[randomIndex];
    }
  
    alert(botResponse);
  }