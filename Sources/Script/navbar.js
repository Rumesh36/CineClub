
const navbar =document.getElementById("navbar")

const hambar =document.getElementById("hambar-button")

const close =document.getElementById("close-button")

hambar.addEventListener("click",()=>{
  navbar.classList.add("show")
})

close.addEventListener("click",()=>{
  navbar.classList.remove("show")
})