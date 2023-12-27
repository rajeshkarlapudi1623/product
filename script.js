let minusBtn = document.getElementById("minus")     
let plusBtn = document.getElementById("plus")

let counter = 0

let count = document.querySelector(".count")

minusBtn.onclick = function(){
    if(counter){
        counter--
        count.innerText = counter
    }        
}

plusBtn.onclick = function(){
    counter++                                       
    count.innerText = counter              
}

let smallimages = document.querySelectorAll(".smallimage")
let mainImage = document.getElementById("mainimage")
smallimages.forEach((smallimage)=>{ 
    smallimage.addEventListener("click",function(event){
        mainImage.src = event.target.src
    })
})

smallimages.forEach((smallimage)=>{
    smallimage.addEventListener("click",function(){
        smallimages.forEach((smallimage)=>{
            smallimage.classList.remove("current")
        })
        smallimage.classList.add("current")
    })
})

window.onload = function(){
    document.getElementById("refers").classList.add("current")
}

let imgCart = document.getElementById("cart")
imgCart.onclick = function(e){
    e.target.classList.add("clicked")
}

let cartCount = document.getElementsByClassName("cart-count")
let cart = document.getElementsByClassName("save")
cart[0].onclick = function(){
    cartCount[0].style.display = "flex"
    cartCount[0].innerText = count.innerText
}