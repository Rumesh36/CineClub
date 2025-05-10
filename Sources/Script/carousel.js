const Interstellar={

    img: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    quote: "Cinema is a matter of what's in the frame and what's out.",

}

const Inception ={
    img:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    quote: "Movies touch our hearts and awaken our vision." + "by  Martin Scorsese" + " by Martin Scorsese",
};
const Infinitywar={
    img:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    quote: "The length of a film should be directly related to the endurance of the human bladder." + " by Alfred Hitchcock",
}

let Movies=[Interstellar,Inception,Infinitywar]

let curindex=0

function updateCaruselpage(index){

    let movies = Movies[index]
    
    const img=document.getElementsByTagName("img")[0]
    img.src=movies.img
    img.alt="movie"
    img.height=300
    img.width=300
    
    const quote=document.getElementById("quote-container")
    quote.innerHTML=movies.quote
}

document.getElementById("prev").addEventListener("click",()=>{
    if(curindex>0){
        curindex--
    }
    else{
        curindex=Movies.length-1;
    }
    updateCaruselpage(curindex)
})

document.getElementById("next").addEventListener("click",()=>{
    if(curindex<Movies.length-1){
        curindex++;
    }
    else{
        curindex=0;
    }
    updateCaruselpage(curindex)
})
// continously moving causel
setInterval(()=>{

    curindex=(curindex+1)%Movies.length;
    updateCaruselpage(curindex)

},4000)
updateCaruselpage(curindex)
