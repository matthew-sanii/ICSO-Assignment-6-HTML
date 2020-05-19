// JavaScript File
let response=document.getElementById("response");
let tax=document.getElementById("tax");
let total=document.getElementById("total");
document.getElementById("Button").onclick=function(){Click()};
function Click(){
  let toppings=0;
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue = String(answer.value);
  let answer2=document.getElementById("answer2");
  answer2 = Number(answer2.value);
  if ((answer2 > 4) || (answerValue )){
    response.innerHTML="Please input a number of toppings between 0 and 4."; // This innerHTML line returns that the discount is available.
  }
  else if (answerValue == "Large" || answerValue == "large"){ // This if statement checks to see if you chose to order a large pizza.
    if (answer2 == 0){
      toppings=0;
    }
    else if (answer2 == 4){
      toppings=3.35;
    }
    else{
      toppings=(answer2*0.75)+0.25;
    }
  response.innerHTML=toppings; // This innerHTML line returns that the discount is available.
  tax.innerHTML="";
  total.innerHTML="";
}
}