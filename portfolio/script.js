var i=0;

function next(){
  if(i==0){
    document.getElementById("cardwrapper").classList.add("next");
    i++;
  }else if(i==-1){
    document.getElementById("cardwrapper").classList.remove("prev");
    i++;
  }
    
}

function prev(){

if(i==0){
document.getElementById("cardwrapper").classList.add("prev");
i--;
}else if(i==1){
document.getElementById("cardwrapper").classList.remove("next");
i--;
}

     
}