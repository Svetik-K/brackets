module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(pair => {
      if(str[i] === pair[0]) {
        if(str[i] === pair[1]) {
          if(stack.indexOf(str[i]) === -1) {
            stack.push(str[i]);
          } else {
            stack.splice(stack.indexOf(str[i]), 1);
          }
        } else {
          stack.push(str[i]);
        }
      } 
      else if(str[i] === pair[1] && stack[stack.length - 1] === pair[0]) {
          stack.pop();
      }
    })
  }
  return stack.length === 0 ? true : false;

}


