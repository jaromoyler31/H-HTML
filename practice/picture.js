let pics =["./IMG2/ie_5284.webp", "./IMG2/images (1).jpeg", "./IMG2/images.jpeg", "./IMG2/Mater8.jpeg"]
let img = document.querySelector(".picture")
let a = 0

img.src = pics[a]
function left(){
    console.log('a', a)
    console.log('pics.length', pics.length)
    if(a==0){
        console.log('hit')
        a = pics.length-1
        img.src = pics[a]

    }else{
        a--
        img.src = pics[a]
    }
}

function right(){
    if(a>pics.length - 2){
        a = 0
        img.src = pics[a]

        
    }else{
        a++
        img.src = pics[a]
    }
}



function clicked(){
    let x = 1
    let o = 0
    let bob = document.querySelector(".text").value
    
}

function Bob(){
    let x = document.querySelector(".dad").value
    let y = document.querySelector(".dad").value
    x=x/2
    if (x == Math.floor(x)) {
        alert("not Prime")
     } else {
        document.querySelector(".result").textContent = y +" is a Prime Number"
     }
    
    document.querySelector(".dad").value = ''
}