// Declaring Variables
let buttonId = document.querySelectorAll("#calculator-input");

// Function
function select(event) {
  let selectId = event.target.id;
  console.log(selectId);
}

buttonId.addEventListener("click", select);

/*
MY THOUGHT PROCESS

1. CASE BY CASE
let select1 = document.getElementById('1');
let content1 = select1.textContent;
function display1() {
  document.getElementById("output").textContent = content1;
}
select1.addEventLIstener("click", display1);

2. ACCUMULATION
select.addEventListener("click", select(event) {
    let selectId = event.target.id;
    console.log(selectId);
  }
);

function displayHSTR {
  
}
function displayTotal() {

}
*/
