module.exports = function check(str, bracketsConfig) {
  // your solution
  let openingBrackets = [], closingBrackets = [], transBrackets = [];
  let n = bracketsConfig.length;
  for(let i = 0; i < n; i++)
  {
    let a = bracketsConfig[i][0];
    let b = bracketsConfig[i][1];
    if(a === b)
    {
      transBrackets.push(a);
    } 
    else 
    {
      openingBrackets.push(a); 
      closingBrackets.push(b);
    }
  }

  let opened = [];
  n = str.length;
  for(let i = 0; i < n; i++)
  {
    if(openingBrackets.includes(str[i]))
    {
      opened.push(str[i]);
    }
    else if(closingBrackets.includes(str[i]))
    {
      let lastOpened = opened.pop();
      if(openingBrackets.indexOf(lastOpened) !== closingBrackets.indexOf(str[i]))
      {
        return false;
      }
    }
    else if(transBrackets.includes(str[i]))
    {
      let lastOpened = opened.pop();
      if(str[i] !== lastOpened)
      {
        if(lastOpened !== undefined)
        {
          opened.push(lastOpened, str[i]);
        }
        else 
        { 
          opened.push(str[i]);
        }
      }
    } 
  }
  if(opened.length === 0)
  {
    return true;
  }
  else return false;
}
