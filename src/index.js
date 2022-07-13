module.exports = function check(str, bracketsConfig) {
  const pattern = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
  
  for(let i = 0; i < str.length; i++) {
    let indexInPattern = pattern.indexOf(str[i]);
    if(indexInPattern % 2 === 0) {
      stack.push(str[i]);
    } else {
      let lastStackItem = stack[stack.length - 1];
      if(pattern.indexOf(lastStackItem) === (indexInPattern - 1)) {
        stack.pop();
      } else {
        return false;
      }
    }  
  }

  return stack.length === 0 ? true : false;
}

