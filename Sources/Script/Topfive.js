
const indiaBtn = document.getElementById("ind-btn")
const WorldBtn = document.getElementById("world-btn")

const indiaimg = document.getElementsByClassName("india")[0]
const worldimg = document.getElementsByClassName("world")[0]

indiaBtn.addEventListener("click",()=>{
   
    indiaimg.style.display="block"
    worldimg.style.display="none"
})

WorldBtn.addEventListener("click",()=>{
     indiaimg.style.display="none"
    worldimg.style.display="block"
})
