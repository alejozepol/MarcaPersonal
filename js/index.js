
const guella = document.getElementById("guella");
const box = document.getElementById("box-translado");
const traslado = document.getElementById("traslado");


function inicio() {

    setTimeout(function traslado(){
        guella.style.transform = "rotate("+ 90 +"deg)";
        box.style.color = "rgb(3, 20, 146)";
        box.style.transform = "translateY(-70px)";
         }
               , 1000);
    setTimeout(function traslado(){
        guella.style.transform = "rotate("+ 180 +"deg)";
        box.style.color="#1708fd";
        box.style.transform ="translateY(-75px)"}
               , 2000);
    setTimeout(function traslado(){
        guella.style.transform = "rotate("+ 360 +"deg)";
        box.style.color="rgb(251, 251, 251)";
        box.style.transform ="translateY(-70px)"}, 3000);
}

  

               
    
    


 
 


