var sum = document.querySelector("h1");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var a5 = document.querySelector("#a5");
var a6 = document.querySelector("#a6");
var a7 = document.querySelector("#a7");
var a8 = document.querySelector("#a8");
var a9 = document.querySelector("#a9");
var a0 = document.querySelector("#a0");
var plus = document.querySelector("#a");
var less = document.querySelector("#aa");
var double = document.querySelector("#aaa");
var division = document.querySelector("#aaaa");
var equal = document.querySelector("#aaaaa");

var sumsum = 0;
var number1 = 0;
var number2 = 0;
var symbol = 0;

alert("計算機開始囉~~~~~");

function inputnumber1(){sumsum = sumsum*10 + 1;sum.textContent = sumsum;}
function inputnumber2(){sumsum = sumsum*10 + 2;sum.textContent = sumsum;}
function inputnumber3(){sumsum = sumsum*10 + 3;sum.textContent = sumsum;}
function inputnumber4(){sumsum = sumsum*10 + 4;sum.textContent = sumsum;}
function inputnumber5(){sumsum = sumsum*10 + 5;sum.textContent = sumsum;}
function inputnumber6(){sumsum = sumsum*10 + 6;sum.textContent = sumsum;}
function inputnumber7(){sumsum = sumsum*10 + 7;sum.textContent = sumsum;}
function inputnumber8(){sumsum = sumsum*10 + 8;sum.textContent = sumsum;}
function inputnumber9(){sumsum = sumsum*10 + 9;sum.textContent = sumsum;}
function inputnumber0(){sumsum = sumsum*10 + 0;sum.textContent = sumsum;}

sum.addEventListener("click",function(){
    sum.textContent = 0;
    sumsum = 0;
}); 
a1.addEventListener("click",inputnumber1) ;
a2.addEventListener("click",inputnumber2) ;
a3.addEventListener("click",inputnumber3) ;
a4.addEventListener("click",inputnumber4) ;
a5.addEventListener("click",inputnumber5) ;
a6.addEventListener("click",inputnumber6) ;
a7.addEventListener("click",inputnumber7) ;
a8.addEventListener("click",inputnumber8) ;
a9.addEventListener("click",inputnumber9) ;
a0.addEventListener("click",inputnumber0) ;

plus.addEventListener("click",function(){
	number1 = sumsum;
	sumsum = 0;
	sum.textContent = 0;
    symbol = 1;

}) ;

less.addEventListener("click",function(){
	number1 = sumsum;
	sumsum = 0;
	sum.textContent = 0;
    symbol = 2;


}) ;

double.addEventListener("click",function(){
	number1 = sumsum;
	sumsum = 0;
	sum.textContent = 0;
    symbol = 3;


}) ;

division.addEventListener("click",function(){
	number1 = sumsum;
	sumsum = 0;
	sum.textContent = 0;
    symbol = 4;


}) ;

equal.addEventListener("click",function(){
	switch(symbol){
		case 1:
		sumsum = number1+sumsum;
		sum.textContent =sumsum ;

		break;
		
		case 2:
		sumsum = number1-sumsum;
		sum.textContent =sumsum ;
		
		break;
		
		case 3:
		sumsum = number1*sumsum;
		sum.textContent =sumsum ;
		
		break;
		
		case 4:
		sumsum = number1/sumsum;
		sum.textContent =sumsum ;
		
		break;
	}


}) ;



