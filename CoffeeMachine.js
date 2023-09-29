function printReceipt(...orders) 
{
    let totalCost = 0;
    let receipt = "Чек:\n";
  
    for (let i = 0; i < orders.length; i += 2) 
    {
      const drink = orders[i];
      const cost = orders[i + 1];
  
      receipt += `${drink}: ${cost} грн\n`;
      totalCost += cost;
    }
  
    receipt += `Итого: ${totalCost} грн`;
    alert(receipt);
  }
  
  printReceipt("Эспрессо", 30, "Капучино", 40, "Латте", 35, "Горячий шоколад", 45);