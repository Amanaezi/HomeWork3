"use strict";

function matchGame(n) 
{
  function show() 
  {
    const match = '|';
    let str = "";
    for (let i = n; i != 0; i--) 
    {
        str += match;
    }
    alert(`Remaining matches: ${str}`);
  }

  show();

  while (n > 0) 
  {
    alert("Your turn!");
    let m = +prompt("Get the matches (1-3)!");

    if (isNaN(m) || m < 1 || m > 3) 
    {
      alert("Incorrect count of matches, try again!");
      continue;
    }

    if (m > n) 
    {
      alert("You can't take more matches than you have left, try again!");
      continue;
    }

    n -= m;
    show();

    if (n <= 0) 
    {
      alert("You win!");
      return;
    }

    alert("Computer turn!");

    if (n % 4 !== 0) 
    {
      n -= n % 4;
    } 
    else 
    {
      n -= 3;
    }

    show();

    if (n <= 0) 
    {
      alert("Computer win!");
      return;
    }
  }
}

const n = +prompt("Input start count of matches:");

if (isNaN(n)) 
{
  alert("Incorrect count of matches. Game over!");
} 
else 
{
  matchGame(n);
}