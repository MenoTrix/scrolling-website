let stars=document.querySelector(".stars")
let moon=document.querySelector(".moon")
let mountain3=document.querySelector(".mountain3")
let mountain4=document.querySelector(".mountain4")
let river5=document.querySelector(".river")
let boat6=document.querySelector(".boat")
let trix=document.querySelector(".trix")
let main=document.querySelector(".main")
 
window.onscroll=function(){
   let value=scrollY
   stars.style.left=value + "px"
   moon.style.top=value * 3 + "px"
   mountain3.style.top=value * 2 + "px"
   mountain4.style.top=value * 1.5 + "px"
   river5.style.top=value   + "px"
   boat6.style.top=value   + "px"
   boat6.style.left=value * 5 + "px"
   trix.style.fontSize=value + "px"
    if (scrollY >=110){
        trix.style.fontSize=110+"px"
        trix.style.position="fixed"
    }
    if(scrollY > 412){
        trix.style.display="none"
        
    }else{
        trix.style.display="block"

    }
    if(scrollY > 156){
        main.style.background='linear-gradient(#376281,#10001f)'
    }
    else{
        main.style.background='linear-gradient(#200016,#10001f)'

    }
}
