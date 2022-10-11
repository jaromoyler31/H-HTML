function result(){
    var input =document.querySelector(".input").value;
    var r_input = input.split("").reverse("").join("");
    var great = document.querySelector(".grate");

    if(r_input == input){
        great.textContent =" Congratulations, "+input+ " is a plaindrome";
        input.textContent ="";
    }else{
        great.textContent ="sorry try again";        
        input.textContent ="";

    }
} 