const screenOperation = document.getElementById("screen-top");
const screenResult = document.getElementById("screen-result"); 
const form = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
let complete = false;

const lastValue= () => screenOperation.textContent.substring(screenOperation.textContent.length-1)


const writeOperation =(text) =>{
      if (screenOperation.textContent == 0  && text != "." )  {
        screenOperation.textContent = " ";
      }
      if(complete == true && isNaN(text)){
        screenOperation.textContent =screenResult.textContent;
        complete = false;
      }
      if (complete == true && !isNaN(text)) {
        screenOperation.textContent = " ";
        screenResult.textContent = "0";
        complete=false;
      }
       screenOperation.textContent += text;
       
}

const  writeResult=( )=>{
    if (isNaN(lastValue())) {
      screenOperation.textContent  =  screenOperation.textContent.substring(0,screenOperation.textContent.length-1);
    }

      screenResult.textContent =eval(screenOperation.textContent); 
      complete = true;
}
const porcent=()=>{
  if(complete == true){
    screenOperation.textContent =screenResult.textContent;
    complete = false;
  }
  screenResult.textContent =eval(screenOperation.textContent)/100; 
}

const resetScreen =()=>{
    screenOperation.textContent = " 0";
    screenResult.textContent ="0";
}

form.addEventListener('click', (e)=>{
  if(e.target.value !== " "){
    switch (e.target.value) {
      case  "=":  writeResult()  ;             break;
      case "C" :    resetScreen() ;            break;
      case "%":  porcent();                   break;

      default:  writeOperation(e.target.value);       break;
  
    }
  }
})

