module.exports = function check(str, bracketsConfig) {
  console.log(str,bracketsConfig);

  for (let i=0; !(str===''); i++){
    str=help(str,bracketsConfig);
    if (str===false) {console.log('false',str);return false;}
    if ((str===undefined)||(str==='')) return true;
  }
  if (str!='') {console.log('false',str);return false;}

  return true;
}

function help(str,bracketsConfig){
  
  for (let i=0; i<str.length; i++){
    for (let j=0;j<bracketsConfig.length;j++){
      if (str[i]===bracketsConfig[j][1]){
        if (str[i-1]===bracketsConfig[j][0]){
          str=str.substr(0,i-1)+str.substr(i+1,str.length);
          
          return str;
        }
      }
    }
  }
  return false;
}