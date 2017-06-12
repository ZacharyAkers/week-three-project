const clearBtn = document.querySelector("#clearButton");
const calWindow = document.querySelector("#calWindow");
const sevenBtn = document.querySelector("#sevenButton");
const eightBtn = document.querySelector("#eightButton");
const nineBtn = document.querySelector("#nineButton");
const dividerBtn = document.querySelector("#dividerButton")
const fourBtn = document.querySelector("#fourButton");
const fiveBtn = document.querySelector("#fiveButton");
const sixBtn = document.querySelector("#sixButton");
const multiplyBtn = document.querySelector("#multiplyButton");
const oneBtn = document.querySelector("#oneButton");
const twoBtn = document.querySelector("#twoButton");
const threeBtn = document.querySelector("#threeButton");
const minusBtn = document.querySelector("#minusButton");
const zeroBtn = document.querySelector("#zeroButton");
const periodBtn = document.querySelector("#periodButton");
const equalBtn = document.querySelector("#equalButton");
const addBtn = document.querySelector("#Button")
let btnList = document.querySelectorAll(".square");

for (let i = 0; i < btnList.length; i++) {
    let btn = btnList[i];

    btn.addEventListener("click", function(event) {
        console.log("you clicked button number " + i)
    });
}
