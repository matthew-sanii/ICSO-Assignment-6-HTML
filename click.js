// JavaScript File
let response=document.getElementById("response");
let tax=document.getElementById("tax");
let total=document.getElementById("total");
document.getElementById("Button").onclick=function(){Click()};
function Click(){
  let cost=0;
  let taxes=0;
  let totalcost=0;
  let toppings=0;
  let answer=document.getElementById("answer");
  let answerValue;
  answerValue=String(answer.value);
  let answer2=document.getElementById("answer2");
  answer2=Number(answer2.value);
  if (answer2 > 4){
    response.innerHTML="Please input a number of toppings between 0 and 4."; // This innerHTML line asks you to input a topping number between 0 and 4.
  }
  else if (answerValue=="Large" || answerValue=="large"){ // This if statement checks to see if you chose to order a large pizza.
    if (answer2==0){
      toppings=0;
    }
    else if (answer2==4){
      toppings=3.35;
    }
    else{
      toppings=(answer2*0.75)+0.25;
    }
    cost=Number(6+toppings);
    taxes=Number(cost*0.13);
    totalcost=Number(cost+taxes);
    response.innerHTML=cost.toFixed(2); // This innerHTML line returns the cost of the pizza without tax.
    tax.innerHTML=taxes.toFixed(2); // This innerHTML line returns the tax amount.
    total.innerHTML=totalcost.toFixed(2); // This innerHTML line returns the cost of the pizza with tax.
}
  else if (answerValue=="Extra Large" || answerValue=="extra large" || answerValue=="Extra large" || answerValue=="extra Large"){ // This if statement checks to see if you chose to order an extra large pizza.
    if (answer2==0){
      toppings=0;
    }
    else if (answer2==4){
      toppings=3.35;
    }
    else{
      toppings=(answer2*0.75)+0.25;
    }
    cost=Number(10+toppings);
    taxes=Number(cost*0.13);
    totalcost=Number(cost+taxes);
    response.innerHTML=cost.toFixed(2); // This innerHTML line returns the cost of the pizza without tax.
    tax.innerHTML=taxes.toFixed(2); // This innerHTML line returns the tax amount.
    total.innerHTML=totalcost.toFixed(2); // This innerHTML line returns the cost of the pizza with tax.
}
}