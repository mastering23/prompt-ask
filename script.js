const userInput = () => {
  
  let userInputValues = prompt(
    `=============================================
    
    Please enter some numbers 
    separated by commas for example [1,2,3,4]  :
    ==============================================  `
  );

  let arrayString = userInputValues.split(",");

  let numberArray = [];
  let eveNumber = [];
  let oddNumber = [];

  let sumArrayTotal = 0;

  for (let index = 0; index < arrayString.length; index++) {
    numberArray[index] = Number(arrayString[index]);

    num = numberArray[index];

    sumArrayTotal += num;

    if (num % 2 === 0) {
      eveNumber.push(num);
    } else {
      oddNumber.push(num);
    }
  }

  let maxNumber = Math.max(...numberArray);
  let minNumber = Math.min(...numberArray);

  let rangeNumber = maxNumber - minNumber;
  let averageNumber = sumArrayTotal / numberArray.length;

  const message = `
  ----------------Result----------------------

  String Array to Number Array : ${numberArray},

  Array total sum : ${sumArrayTotal},

  Even Numbers : ${eveNumber},
  Odd Numbers  : ${oddNumber},

  Max number   : ${maxNumber},
  Min number   : ${minNumber},

  Array length : ${numberArray.length},

  Range Number : ${rangeNumber},
  
  Average Number: ${averageNumber}

  `;

  alert(message);
  return message;
};

userInput();
