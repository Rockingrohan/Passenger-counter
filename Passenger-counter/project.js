// document.getElementById("count-el").innerText = 5;

// function increment(){
//     console.log("The button was clicked");
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)
console.log(saveEl)
 let count =0;


 function increment(){
    count += 1
    countEl.textContent = count;
 }

 function save(){
    let countStr = count + " : "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count =0
    console.log(count)
 }
