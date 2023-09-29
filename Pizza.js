function orderingPizza(pizza = 1, count = 1) 
{
    let pizzaName = '';
  
    switch (pizza) 
    {
    case 1:
        pizzaName = 'Піца «З шинкою»';
        break;
    case 2:
        pizzaName = 'Піца «М’ясна»';
        break;
    case 3:
        pizzaName = 'Піца «З грибами»';
        break;
    case 4:
        pizzaName = 'Піца «Курка з грибами»';
        break;
    case 5:
        pizzaName = 'Піца «Курка з ананасом»';
        break;
    case 6:
        pizzaName = 'Піца «Салямі»';
        break;
    case 7:
        pizzaName = 'Піца «Фірмова»';
        break;
    case 8:
        pizzaName = 'Піца «Фітнес»';
        break;
    case 9:
        pizzaName = 'Піца «Баварська»';
        break;
    case 10:
        pizzaName = 'Піца «4 сира»';
        break;
    case 11:
        pizzaName = 'Піца «Цезар»';
        break;
    case 12:
        pizzaName = 'Піца «М’ясний Мікс»';
        break;
      default:
        return 'Произошла ошибка, повторите заказ.';
    }
  
    if (count > 0) 
    {
      return `Ваш заказ: ${pizzaName} — ${count}шт.`;
    } 
    else 
    {
      return 'Произошла ошибка, повторите заказ.';
    }
  }

  let TypesOfPizza = [
    'Піца «З шинкою»',
    'Піца «М’ясна»',
    'Піца «З грибами»',
    'Піца «Курка з грибами»',
    'Піца «Курка з ананасом»',
    'Піца «Салямі»',
    'Піца «Фірмова»',
    'Піца «Фітнес»',
    'Піца «Баварська»',
    'Піца «4 сира»',
    'Піца «Цезар»',
    'Піца «М’ясний Мікс»'
  ];

let menu = "Меню піцц:\n";
for(let i = 0; i < TypesOfPizza.length; i++)
{
    menu += i+1 + ". " + TypesOfPizza[i] + "\n";
}
alert(menu);

let type = +prompt("Введіть яку піццу ви хочете цифрою від 1 до 12");
let count = +prompt("Введіть кількість штук: ");

alert(orderingPizza(type, count));