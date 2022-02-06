module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let bracketsArr = {};
  bracketsConfig.forEach((item) => {
    bracketsArr[item[0]] = item[1];
  })
  for (let i = 0; i < str.length; i++) {
    if (arr.length === 0) {
      arr.push(str[i]);
    }
    else { 
      if (str[i] === bracketsArr[arr[arr.length - 1]]) {
        arr.pop();
      }
      else {
        arr.push(str[i]);
      }
    }
  }
  return (arr.length === 0) ? true : false;
  }