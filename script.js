

var hiddenCross = document.getElementsByClassName("cross");
var hiddenPictures = document.getElementsByClassName("picture");
var hiddenDot = document.getElementsByClassName("dot");
var cover = document.getElementById("coverIt");
var cover2 = document.getElementById("coverIt2");
var score = 0;
var vidPlus = document.getElementById("plusAnim");
var vidMinus = document.getElementById("minusAnim");
var vidRecord = document.getElementById("recordAnim");
var recordBars = document.getElementsByClassName("RecordBars");
var bar = document.getElementById("bar");
var points = document.getElementById("Points");
var stuff = document.getElementById("stuff");
var buttons = document.getElementsByClassName("buttons");
var buttonsEnableDisable = document.getElementsByClassName("buttonsEnableDisable");
var GameOn;
var startTime, interval, endTime, timi;


function start(){
    startTime = Date.now();
    interval = setInterval(function(){
    timi = Date.now() - startTime;
    });
}

function stop () {
    endTime = timi;
    clearInterval(interval);
    document.getElementById("Lasttime").innerHTML = timi/1000;
    cover2.style.display = "none";
    if (document.getElementById("Fasttime").innerHTML > timi/1000) {
        if (GameOn) {
            vidRecord.style.display = "block";
            setTimeout(hideSingle,1750,vidRecord);
            showArray(recordBars);
            setTimeout(hideArray,1750,recordBars);
            showArray(recordBars);
            setTimeout(hideArray,1750,recordBars);
            
            
        }
        document.getElementById("Fasttime").innerHTML = timi/1000;
        cover.style.display = "none";
        
    }
    
}


           
function showFirst(x,waitTime) {
    vidPlus.load();
    vidMinus.load();
    vidRecord.load();
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
    start();
   
    }
    else {x[1].style.display = "block";
    window.addEventListener("keydown",checkKeyPressForRight,false);
    start();    
    
         }
    
}

function checkKeyPressForLeft(key) {
    if (key.keyCode =="37") {
           stop();
           
           addScore();
           hiddenDot[0].style.display = "none";
           if (GameOn) {vidPlus.style.display = "block";
           setTimeout(hideSingle,1700,vidPlus);
            }
           
           
           
 } else if (key.keyCode =="39") {  
           subtractScore();
           hiddenDot[0].style.display = "none";
           if (GameOn) {vidMinus.style.display = "block";
           setTimeout(hideSingle,1700,vidMinus);
                     }
    }
   window.removeEventListener("keydown",checkKeyPressForLeft,false);
   setTimeout(set,1000,GameOn);
}

function checkKeyPressForRight(key) {
    if (key.keyCode =="39") {
             stop();
             addScore();
             hiddenDot[1].style.display = "none";
             if (GameOn) {vidPlus.style.display = "block";
             setTimeout(hideSingle,1700,vidPlus);
                       }
             
    } else if (key.keyCode =="37") {  
            subtractScore();
            hiddenDot[1].style.display = "none";
            if (GameOn) {vidMinus.style.display = "block";
            setTimeout(hideSingle,1700,vidMinus);
                      }
    }
    window.removeEventListener("keydown",checkKeyPressForRight,false);
    setTimeout(set,1000,GameOn);
}

function hideArray(x) {
    
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "none";
    }
}

function showArray(x) {
    
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
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


function NoGamification() {
  hideArray(buttons);
  set(false);
}

function AllGamification() {
  hideArray(buttons);
  bar.style.display = "block";
  points.style.display = "block";
  stuff.style.display = "block";
  set(true);
}

function EnableDisableGamification() {
  hideArray(buttons);
  showArray(buttonsEnableDisable);
    
}

function SelectGamification() {
  alert ("Select");
  
}

function EnableGamification() {
    hideArray(buttonsEnableDisable);
    AllGamification();
}

function DisableGamification() {
    hideArray(buttonsEnableDisable);
    NoGamification();
}


function set (bool) {
       GameOn = bool;
       setTimeout(showFirst,1000,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
      
    }







