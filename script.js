

var hiddenCross = document.getElementsByClassName("cross");
var hiddenPictures = document.getElementsByClassName("picture");
var hiddenDot = document.getElementsByClassName("dot");
var score = 0;

var vidPlus = document.getElementById("plusAnim");
var vidMinus = document.getElementById("minusAnim");

           
function showFirst(x,waitTime) {
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
        setTimeout(hideArray,milliseconds=waitTime,x);
        
        
    }
    setTimeout(showSecond,1500,hiddenPictures,500);
}

function showSecond(x,waitTime) {
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
        setTimeout(hideArray,milliseconds=waitTime,x);
        
        
    }
     setTimeout(showDot,500,hiddenDot);
}

function showDot (x) {
    if (Math.random() > 0.5)  {
    x[0].style.display = "block";
    window.addEventListener("keydown",checkKeyPressForLeft,false);
   
    }
    else {x[1].style.display = "block";
    window.addEventListener("keydown",checkKeyPressForRight,false);
        
    
         }
    
}

function checkKeyPressForLeft(key) {
    if (key.keyCode =="37") {
           addScore();
           hiddenDot[0].style.display = "none";
           vidPlus.style.display = "block";
           setTimeout(hideSingle,1700,vidPlus);
           
 } else if (key.keyCode =="39") {  
           subtractScore();
           hiddenDot[0].style.display = "none";
           vidMinus.style.display = "block";
           setTimeout(hideSingle,1700,vidMinus);
           
    }
   window.removeEventListener("keydown",checkKeyPressForLeft,false);
}

function checkKeyPressForRight(key) {
    if (key.keyCode =="39") {
             addScore();
             hiddenDot[1].style.display = "none";
             vidPlus.style.display = "block";
             setTimeout(hideSingle,1700,vidPlus);
             
    } else if (key.keyCode =="37") {  
            subtractScore();
            hiddenDot[1].style.display = "none";
            vidMinus.style.display = "block";
            setTimeout(hideSingle,1700,vidMinus);
            
    }
    window.removeEventListener("keydown",checkKeyPressForRight,false);
}

function hideArray(x) {
    
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "none";
    }
}

function hideSingle(x) {
    x.style.display = "none";
}


function addScore () {
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
    document.getElementById("point").innerHTML ++;
}

function subtractScore () {
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    document.getElementById("point").innerHTML --;
    
    
}



function set () {

       setTimeout(showFirst,500,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
      
    }

set();









