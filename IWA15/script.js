//script.js
 
const data = {
    lists: [
      ["first", [15, 11, 13, 7, 5]],
      ["second", [2, 6, 8, 4, 14, 12, 10]],
      ["third", [9, 3, 1]],
    ],
  }
  
  //Only edit below


  const result = [];
  
  const extractBiggest = () => {
    const first = data.lists[0][1];
    const second = data.lists[1][1];
    const third = data.lists[2][1];
  
    const firstLast = first[first.length - 1] || -Infinity;
    const secondLast = second[second.length - 1] || -Infinity;
    const thirdLast = third[third.length - 1] || -Infinity;
  
    if (firstLast >= secondLast && firstLast >= thirdLast) {
      return first.pop();
    }
  
    if (secondLast >= firstLast && secondLast >= thirdLast) {
      return second.pop();  // pop method is used to removes and returns the last elelment of the array
    }
  
    if (thirdLast >= firstLast && thirdLast >= secondLast) {
      return third.pop();
    }
  };
  
// If two or more arrays have the same largest value,the code returns the last element of the first array with that value, since the if statements are evaluated in order.

  // Only edit above

  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())
  result.push(extractBiggest())

  //can use one of the two to display  


  
  console.log(result);
  