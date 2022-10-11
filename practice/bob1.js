
export function addthem(){
    var number1 = document.querySelector(".addition1").value
    var number2 = document.querySelector(".addition2").value
    var total  = Number(number1)+Number(number2)
    document.querySelector("add_result").textContent = total
}


export function minusthen(){
    var number3 = document.querySelector(".minus1").value
    var number4 = document.querySelector(".minus2").value
    var total  = Number(number3)-Number(number4)
    document.querySelector("minus_result").textContent = total
}

function testInfo(){
    input = document.getElementById("phone")

}