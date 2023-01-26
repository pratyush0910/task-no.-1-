var b1=document.getElementById('btn1');
var b2=document.getElementById('btn2');
var b3=document.getElementById('btn3');
var h=document.getElementById('h');
var c=0;
var c1=0;
b1.onclick=function(){
    showpromt();
}
function showpromt(){
    alert("WELCOME");
}
b2.onclick =function(){
    if((c1==0))
    {
        changebg('yellow','black');
    c1=1;
    }
    else
    {
        changebg('white','rgba(65, 105, 225, 0.747)');
        c1=0;
    }
    
}
function changebg(color1,color2){
    document.body.style.animationDelay = "10s";
    h.style.animationDelay="1s"
   
    document.body.style.background = color1;
    h.style.color=color2;
   
    

}
b3.onclick=function (){if((c==0)){changeh('welcome');c=1;}
    else{changeh('Demo');c=0;}
}
function changeh(val){
    h.innerHTML=val;

}