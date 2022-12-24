/*function showOrHideTextarea() {
	document.querySelector(".textareadiv").style.display = "block";
	document.querySelector(".plus").style.display = "none";
}*/

const plusMaterialIcon = document.querySelector('.plus')
console.log(plusMaterialIcon)

const clickLinkToShowDropDown = document.querySelector('.extra')
console.log(clickLinkToShowDropDown)

const divToShow = document.querySelector('.textareadiv')
console.log(divToShow)

showFunc = () => {
	if (divToShow.classList.contains('extra')) {
		divToShow.classList.remove('extra')
	} else {
		divToShow.classList.add('extra')
	}

	if (divToShow.classList.contains('extra')) {
		plusMaterialIcon.style.display = 'none';
	} else {
		plusMaterialIcon.style.display = 'inline-flex';
	}
}

clickLinkToShowDropDown.addEventListener('click', showFunc)



const myFunc = () => alert("This should take you to a payment gateway when implemented");



// add to or subtract from an array based on event listener
	//changes I have made from the previous code
		//1. I added a class of summm to the DIV 
		//2. I added css to show or hide the div via js
		//3. comment A1 below marks the start of my attempt to make the div show or hide via js
let arrayItems = new Array();
let total = 0;
function removeValue(v){
let f,k=0;
for(let i=0; i<arrayItems.length; i++){
	if(arrayItems[i]==v && !f){
		f=true; k=i;
	}

}
if(f){
arrayItems.splice(k,1);
}
}
function feedArray(){
const chbox=document.querySelectorAll('.jsss');
for(let i=0; i<chbox.length; i++){

chbox[i].onclick=function(){
if(this.checked){
 arrayItems.push(this.value)
}else{
removeValue(this.value);
}
totalSet();
}
}
}
function totalSet(){
total = 0;
for (i = 0; i < arrayItems.length; i++ ) {
    total += parseFloat(arrayItems[i]);
}
if(total>0){
	document.getElementById('SUM').style.display='block'; //<- show the div because total is not null
	document.getElementById('SUM').innerHTML="Total: "+total;
	}else{
	document.getElementById('SUM').style.display='none';  //<- hide the div because total is null
	}
}

feedArray();
totalSet();


// I am comment A1 = show or hide sum based on if any checkbox is checked

/*let checkboxes = document.querySelectorAll('.jsss')
let ans = ""
for (i = 0; i < checkboxes.length; i++) {
	ans = checkboxes[i]
}

const totalHide = document.querySelector('.summm')

hideOrShowTotalFunc = () => {
	if (totalHide.classList.contains('jsss')) {
		totalHide.classList.remove('jsss')
	} else {
		totalHide.classList.add('jsss')
	}
}

ans.addEventListener('change', hideOrShowTotalFunc)*/

