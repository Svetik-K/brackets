module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
  
  for(let bracket of str) {
    let bracketsIndex = config.indexOf(bracket);
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }  
  }
  return stack.length === 0;
}

