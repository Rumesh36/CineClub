let category={ 
    horror :document.getElementsByClassName("horror"),
    action :document.getElementsByClassName("action"),
    scifi : document.getElementsByClassName("scifi"),
    romance : document.getElementsByClassName("romance"),

}

const select =document.getElementById("category-select")

select.addEventListener("change",()=>{

    const selected = select.value
    console.log(selected);
    
    for(let key in category) //here key returns the property like horror ,action
        {
        for(let item of category[key])// and cat[key] return value like document.getemlebyid
         {  
            console.log(item);
            item.style.display="none"
                
         }
        }

      for(let item of category[selected]){
        console.log(item);
        
        item.style.display="flex"
      }  


})