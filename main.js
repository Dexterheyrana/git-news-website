













const heart = document.querySelectorAll('.fa-heart');



const heartClicked = heart.forEach( hearts =>{
   hearts.addEventListener('click' , function (){
      hearts.classList.toggle("fa-solid");
      hearts.classList.toggle("heartActive");
   } )

})





const check= document.querySelectorAll('.check');
const checkIcon = check.forEach(checks => {
   checks.addEventListener('click' , function() {
      checks.classList.toggle("checkActive");
      
   })
  
  
})





const xmark = document.querySelectorAll('.xmark');
const closeIcon = xmark.forEach( close => {
   close.addEventListener('click' , function() {
      close.closest(".cardHover").remove();
     
   })

})



const cardTilte= document.querySelector('.card-title');


const changeHeight = cardTilte.forEach(cards => {
 
   
  
})
