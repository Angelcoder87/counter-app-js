//create a new function called countEl
let countEl = document.getElementById("count-el") // pass in arguments
//console.log it to check for any errors
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}