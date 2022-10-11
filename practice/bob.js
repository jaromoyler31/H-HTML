const bands =[

    {
        band: "Marron 5",
        image: "Marron5.jpg"

    },
    {
        band: "One Direction",
        image: "1Direction.jpg"
    },
    {
        band: "bettles",
        image: "Bettles.jpg"
    },
    {
        band: "bob",
        image: "bob.jpg"
    },
    {
        band: "coldplay",
        image: "coldplay.jpg"
    },

]

function showTheBands(){

    
    for(i=0; i <bands.length; i++){

       

        var li =document.createElement("li")
        var textnode =document.createTextNode(bands[i].band )
        var imagenode =document.createElement("img")
        imagenode.src = bands[i].image;
        li.appendChild(textnode);
        li.appendChild(imagenode)
        
        document.querySelector("ul").append(li)
    }
       

}




function popUpText(){
    var input =document.querySelector(".input").value;
    var endup =document.querySelector(".location")
    endup.textContent = input;
    document.querySelector(".location")
}


/// different types of way to write a function
///  => arrow function


function functionDeclaration (){
    console.log("This is the function declartation")
}

const functionExpression = () => {
    console.log("This is a function FunctionExpression")
}

functionExpression()



var screen = document.querySelector(".screen");
    

var num1 = document.querySelector(".one")
var num2 = document.querySelector(".two")
var num3 = document.querySelector(".three")
var num4 = document.querySelector(".four")
var num5 = document.querySelector(".five")
var num6 = document.querySelector(".six")
var num7 = document.querySelector(".seven")
var num8 = document.querySelector(".eight")
var num9 = document.querySelector(".nine")
var num0 = document.querySelector(".zero")
var plus = document.querySelector(".plus")
var equal = document.querySelector(".equal")
var div = document.querySelector(".div")
var dot = document.querySelector(".dot")
var minus = document.querySelector(".minus")
var mult =document.querySelector(".x")
var clear =document.querySelector(".clear")
var screen_input = ""


num1.addEventListener("click", function(){  
    screen_input = screen_input + "1" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num2.addEventListener("click", function(){  
    screen_input = screen_input + "2" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num3.addEventListener("click", function(){  
    screen_input = screen_input + "3" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num4.addEventListener("click", function(){  
    screen_input = screen_input + "4" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num5.addEventListener("click", function(){  
    screen_input = screen_input + "5" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num6.addEventListener("click", function(){  
    screen_input = screen_input + "6" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num7.addEventListener("click", function(){  
    screen_input = screen_input + "7" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num8.addEventListener("click", function(){  
    screen_input = screen_input + "8" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num9.addEventListener("click", function(){  
    screen_input = screen_input + "9" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
num0.addEventListener("click", function(){  
    screen_input = screen_input + "0" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
clear.addEventListener("click", function(){  
    screen_input = "" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
div.addEventListener("click", function(){  
    screen_input = screen_input +'/' ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
minus.addEventListener("click", function(){  
    screen_input = screen_input + "-" ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
plus.addEventListener("click", function(){  
    screen_input = screen_input +'+';
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
mult.addEventListener("click", function(){  
    screen_input = screen_input +'*' ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})
dot.addEventListener("click", function(){  
    screen_input = screen_input +'.' ;
    screen.textContent = screen_input;
    document.querySelector(".screen");

})


equal.addEventListener("click", function(){  
    if (screen_input.includes("*")){
        var split = screen_input.split("*")
        var total = split[0] *split[1]
        screen_input = total ;
        screen.textContent = screen_input;
        document.querySelector(".screen");
    } 
    if (screen_input.includes("-")){
        var split = screen_input.split("-")
        
        var total = split[0] - split[1]
        screen_input = total ;
        screen.textContent = screen_input;
        document.querySelector(".screen");
    } 
    if (screen_input.includes("/")){
        var split = screen_input.split("/")
        var total = split[0] / split[1]
        screen_input = total ;
        screen.textContent = screen_input;
        document.querySelector(".screen");
    } 
    if (screen_input.includes("+")){
        var split = screen_input.split("+")
        var total = Number(split[0]) + Number(split[1])
        screen_input = total ;
        screen.textContent = screen_input;
        document.querySelector(".screen");
    } 

})







function add(){
    var count = document.querySelector(".count")
    count.textContent = Number(count + 1);
    document.querySelector(".count");
}
function sub(){
    var count = document.querySelector(".count")
    count.textContent =Number(count - 1);
    document.querySelector(".count");
}



const random = ["bob", "cupcake", "Mountain"];


var x = document.querySelector(".array"); 
x.style.display ="none";


function add() {
    var array_input = document.querySelector(".arrayInput").value;
    var array_print =document.querySelector(".array")
    var isEmpty = ""
    if(document.querySelector(".arrayInput").value == ""){
        alert("Put text in the ('This is a input box')")
    }
    else{
        random.push(array_input);
        console.log(random);
        document.querySelector(".arrayInput").value ="";
        array_print.textContent=random
        document.querySelector(".array");
    }
    
    

}

function show_hide(){
    if (x.style.display == "none"){
        x.style.display ="block";

    } else{
        x.style.display ="none";

    }
}





var bid = document.querySelector(".highest").value;
bid=0;
var a=1
function bid2(){
    
    var player2Bid = document.querySelector(".player2").value;
    
    
    console.log(bid)
    console.log(player2Bid)
    
    if (bid>player2Bid){
        alert("Thats to low.")
        if (a==1){
            alert("Going Once")
            a++
        } else if (a==2){
            alert("Going twice")
            a++
        }else{
            alert("Sold for "+bid+"$")
            a=0
            bid = 0;
            document.querySelector(".highest").textContent= bid
        }
    } else if (bid<player2Bid){
        alert("I heard a " +player2Bid+"$ Do I Hear anything else")
        bid = player2Bid;
        document.querySelector(".highest").textContent= bid
        a=1
    } else if (bid=player2Bid){
        alert("That the Same Amount")
        if (a==1){
            alert("Going Once")
            a++
        } else if (a==2){
            alert("Going twice")
            a++
        }else{
            alert("Sold To ")
            alert("Sold for "+bid+"$")
            a=0
            bid = 0;
            document.querySelector(".highest").textContent= bid
        }
    }

}



function bid1(){
    
    var player1Bid = document.querySelector(".player1").value;
    
    
    console.log(bid)
    console.log(player1Bid)
    
    if (bid>player1Bid){
        alert("Thats to low.")
        if (a==1){
            alert("Going Once")
            a++
        } else if (a==2){
            alert("Going twice")
            a++
        }else{
            alert("Sold for "+bid+"$")
            a=0
            bid = 0;
            document.querySelector(".highest").textContent= bid
        }
    } else if (bid<player1Bid){
        alert("I heard a " +player1Bid+"$ Do I Hear anything else")
        bid = player1Bid;
        document.querySelector(".highest").textContent= bid
        a=1
    } else if (bid=player1Bid){
        alert("That the Same Amount")
        if (a==1){
            alert("Going Once")
            a++
        } else if (a==2){
            alert("Going twice")
            a++
        }else{
            alert("Sold for "+bid+"$")
            a=0
            bid = 0;
            document.querySelector(".highest").textContent= bid
        }
    }

}


function testInfo(){
    var input = document.getElementById("phone").value
    if (input.match( "[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]")){
        alert("Valid")

    } else{
        alert("Invalid")
    }
}



//fetch(" www.skywatch.co/?ref=apilist.fun")
//    .then((response) => response.json)
//    .then((data) => console.log(data))


