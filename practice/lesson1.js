



let today =new Date();
var time = today.getHours();
var timeph = document.querySelector("#timePh")
var b_day = document.querySelector("#birthday")
var b_date = today.getMonth()+'-'+today.getDate();

alert("Today is "+b_date)
if(time < 12){

    timeph.textContent = ("Good Morning")
}
 else if(time < 17 && time > 12){
    timeph.textContent = ("Good Afternoon")
}
else if(time < 12 && time > 16){
    timeph.textContent = ("Good Evening")
}
else if(time < 24 && time > 19){
    timeph.textContent = ("Good Night")
}
else{
    timeph.textContent = ("Problem Just happened")
}

if (b_date == "12-31" ){
    b_day.textContent ="Its My birthday"
}
else {
    b_day.textContent ="Its Not My birthday"

}





let mb = {
    firstName: "Jarom",
    lastName: "Oyler",
    transport: "car"
}
alert(mb.firstName)


for (let i=1; i<100; i++ ){
    if(i%5==0 && i%3==0){
        console.log("FizzBuzz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }else if(i%3==0){
        console.log("Fizz")
    }else{
        console.log(i)
    }

}

//Goal:
//2 text inputs
//1 button, text will be a plus sign
//an empty div
// when you click the button it will take both text inputs, add 
//them together and then show the sum in the empty div



function adding(){
    var add1 = document.querySelector("#sumAdding1")
    var add2 = document.querySelector("#sumAdding2")
    var divAdding = document.querySelector("#addition")

    var newValue1 = Number(add1.value);
    var newValue2 = Number(add2.value);

    var isEmpty1 = newValue1.length == 0;
    var isEmpty2 = newValue2.length == 0;

    if(isEmpty1 || isEmpty2){
        alert("Need a Number inputed")
    }
    else{
        divAdding.textContent = (newValue1 + " + " + newValue2  + " = " + (newValue1 + newValue2));
        add1.value = "";
        add2.value = "";
    
    }
    


}






//Goal:
//is when person clicks the button the name div gets the text that is the 
//input and show the input text

//click the button
function undateTheName(){
//get the name from input element
    var inputElement = document.querySelector("#myNameInput")
    var divToShowTheNameElement =document.querySelector("#myName")
    
    var nameFromInputElement = inputElement.value;

    divToShowTheNameElement.textContent = nameFromInputElement;
//show name from input element

}




function putingNameIn(){
    var input1 = document.querySelector("#nameInputer")
    var divElement = document.querySelector("#nameFinder")

    var newName = input1.value;
    var isEmpty = newName.length == 0;
    var forbiddenName =newName.toLowerCase().includes("scott");

    if(isEmpty){
        alert("Need a name Inputted")
    }
    else if (forbiddenName){
        alert("This is a No Scott party")
    }
    else{
        divElement.textContent = newName.toUpperCase();
        input1.value = "";
    }
}
























// /*me Testing stuff out */
// /*me Testing stuff out */
// /*me Testing stuff out */
// /*me Testing stuff out */




// window.alert("My Name is Bubba")

// let gold = true;
// let color ="gold";
// let dog= "poodle";
// let bob = 1;
// window.alert(color + " " + dog)



// function double(bob=1 , gold=true){

//     window.alert(color + " " + dog)
//     bob++;

// } 




// //================================

// function doubleTheNumber (numberToDouble){
//     return numberToDouble * 2;
// }

// //================================
// var numberInputted = prompt("Input a Number:");
// var numberDoubled = doubleTheNumber(numberInputted);
// alert(numberDoubled);












// /*
// Notes
// Notes
// */

// let number = 5; //Number
// let name = 'Albert'; //string
// let isFriday = true; //Bollen
// let car = {brand:"BMW", model: "X5", cylinders: 8}; //object
// let fruits =['orange', 'pineapple', 'apples']; //array
// // let transferfunds = function =(){} //Function
// let dontknow = undefined; //undifend
// let dontcare =null; //null

