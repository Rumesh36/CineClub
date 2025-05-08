function Navbar(){
const menu = document.getElementById("menu-bar");
const sidebar = document.getElementById("side-bar");
const xmark = document.getElementById("x-mark");
const lists = document.getElementsByTagName("ul")[0];

menu.addEventListener("click", ()=>{
  sidebar.style.display = "block";
})

xmark.addEventListener("click", ()=>{
  sidebar.style.display = "none";
})
}

document.addEventListener("DOMContentLoaded", Navbar);

export default Navbar