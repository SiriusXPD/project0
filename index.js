let i=0;
let j = [1000,500,100,50,10,5,1];
let k = [900,400,90,40,9,4,1];
let c = "";
let p = "";


function rconvert(a,i){
  if(a>3999){
    return str = '';
  }
  switch (i){
    case 0: c="M";
    break;
    case 1: c="D";
    break;
    case 2: c="C";
    break;
    case 3: c="L";
    break;
    case 4: c="X";
    break;
    case 5: c="V";
    break;
    case 6: c="I";
    break;
  }
  switch (i){
    case 0: p="CM";
    break;
    case 1: p="CD";
    break;
    case 2: p="XC";
    break;
    case 3: p="XL";
    break;
    case 4: p="IX";
    break;
    case 5: p="IV";
    break;
    case 6: p="I";
    break;
  }
if (a>=j[i] && i<=6){
  str+=c;
  rconvert(a-j[i],i);
} else if(a<j[i]&&a>=k[i]){
  str+=p;
  rconvert(a-k[i],i);
}
else if (a<j[i]&&a<k[i]){
  rconvert(a,i+1);
}

}

let str = "";
let newstr = "";
function userNum() {
var num = document.getElementById("num").value;
rconvert(num,i);
  if(str===""){
    newstr="Please enter a valid number between 1 and 3999";
  } else{
    newstr="Your roman numeral is ";
  }
user.innerHTML = newstr + str;
  str="";
  }
  
