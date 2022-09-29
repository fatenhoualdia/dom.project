
//hearts color 
var hearts= document.querySelectorAll(".fa-heart")
console.log(hearts)
for (const heart of hearts) {
    heart.addEventListener("click", function(){
   console.log(heart.classList.toggle("isActif"))
    })   
}


//remove cards
var btnRemoves= document.querySelectorAll(".btn-primary")
console.log (btnRemoves)
for (let i=0; i<btnRemoves.length; i++){
    btnRemoves[i].addEventListener("click", function (){
        console.log (btnRemoves[i].parentNode.parentNode.remove())

    })
}
/*
// Increments
var plusBtns = document.querySelectorAll(".plus")
for (const plusBtn of plusBtns){

    plusBtn.addEventListener("click", function (){
        console.log(plusBtn.perviousElementsibling.innerHT
    } )
}
(method) parentNode.querySelectorAll<Element>(selectors:String) NodeListOf<Element> (.? overloads)

// encrements 
var plusBtn = document.querySelectorAll(".minus")
for (const minusBtn of minusBtns){

    plusBtn.addEventListener("click", function (){
        console.log(plusBtn.perviousElementsibling.innerHT)
    } )
}

*/
