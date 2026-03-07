const slides = document.querySelectorAll(".slide")
const dotsContainer = document.getElementById("dots")
const playBtn = document.getElementById("playBtn")

let current = 0
let auto = false
let timer


slides.forEach((s,i)=>{

const dot=document.createElement("div")
dot.className="dot"

dot.onclick=()=>showSlide(i)

dotsContainer.appendChild(dot)

})


const dots=document.querySelectorAll(".dot")


function showSlide(i){

slides[current].classList.remove("active")
dots[current].classList.remove("active")

current=i

slides[current].classList.add("active")
dots[current].classList.add("active")

}


function nextSlide(){

let i=(current+1)%slides.length
showSlide(i)

}


playBtn.onclick=()=>{

auto=!auto

if(auto){

timer=setInterval(nextSlide,3000)

}else{

clearInterval(timer)

}

}


showSlide(0)