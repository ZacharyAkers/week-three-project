function num7(){

	document.case.display.value += "7"
};
function num8(){

	document.case.display.value += "8"
};
function num9(){

	document.case.display.value += "9"
};
function num4(){

	document.case.display.value += "4"
};
function num5(){

	document.case.display.value += "5"
};

function num6(){

	document.case.display.value += "6"
};

function num1(){

	document.case.display.value += "1"
};

function num2(){

	document.case.display.value += "2"
};

function num3(){

	document.case.display.value += "3"
};

function num0(){

	document.case.display.value += "0"
};
function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};

function runC(){

	document.case.display.value = ""
};

function runPeriod() {
    document.case.display.value += "."
};


function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
}
