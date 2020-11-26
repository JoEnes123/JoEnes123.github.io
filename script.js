//firework animation + snow canvas confetti
//send data to google sheets : How to send data to a google spread sheet, fetch url
//divs für Zeilenumbrüche
//inline block
//CSS Grid Layout Generator
//MDN 
//jQuery
let hiddenCross = document.getElementsByClassName("cross");
let hiddenDot = document.getElementsByClassName("dot");
let cover = document.getElementsByClassName("cover");
let score = 0;
let purScore = 0;
let arrowCount = 0;
let TestOhne = document.getElementById("TestOhne");
let TestZeit = document.getElementById("TestZeit");
let TestPunkte = document.getElementById("TestPunkte");
let TestFeedback = document.getElementById("TestFeedback");
let OhneVideo = document.getElementById("OhneVideo");
let PunkteVideo = document.getElementById("PunkteVideo");
let ZeitVideo = document.getElementById("ZeitVideo");
let FeedbackVideo = document.getElementById("FeedbackVideo");
let right = document.getElementById("right");
let TesteOhne = document.getElementById("TesteOhne");
let circles = document.getElementsByClassName("circles");
let HelpBar1 = document.getElementById("HelpBar1");
let HelpBar2 = document.getElementById("HelpBar2");
let recordBars = document.getElementsByClassName("RecordBars");
let bar = document.getElementById("bar");
let barGreen = document.getElementById("barGreen");
let greenValue = 5;
let vidPlus = document.getElementById("plusAnim");
let points = document.getElementsByClassName("points");
let buttons = document.getElementsByClassName("buttons");
let buttonsEnableDisable = document.getElementsByClassName("EnableDisableButtons");
let thePoints = document.getElementById("scores");
let theTime = document.getElementById("scores2");
let GameOn;
let anim = document.getElementById("MyDIV").addEventListener("trigger", goRecord);
let selectStuff = document.getElementsByClassName("Selektion");
let element = document.createElement('a');
let tutorialButtons = document.getElementsByClassName("introductionTutorial");
var startTime, interval, endTime, timi, zeit, punkte, feedback;


/*class xPictures {
    constructor() {
        this.hiddenPicture1 = document.getElementsByClassName("picture1");
    }
}
*/




function goRecord() {
   
    var pls = document.getElementById("Time1");
    pls.style.display = "block";
    pls.animate([
   {transform: 'opacity(1.0)'}
], 1300);
    
   setTimeout(hideSingle,1300,pls);
}

function fadeIn(x) {
   
    x.animate([{
        opacity: '0'
    }, {
        opacity: '1'
    }
    ], {
        duration: 500,
        
    });
    x.style.opacity=1;
}

function fadeInAll(x) {
 for(var i=0;i!=x.length;i++) {
   fadeIn(x[i]);
  }
}

function fadeOut(x) {
    x.animate([{
        opacity: '1'
    }, {
        opacity: '0'
    }
    ], {
        duration: 500,
        
    });
    x.style.opacity=0;
}

function fadeOutAll(x) {
    for(var i=0;i!=x.length;i++) {
      fadeOut(x[i]);
   }
}

    
function goBonusPoints(pointNumber) {
    
    var pls = document.getElementById(pointNumber);
    pls.style.display = "block";
    pls.animate([
   {transform: 'translateY(-70px)'}
], 1300);
    
   setTimeout(hideSingle,1300,pls);
}

function TenMove (boolean) {
    if (boolean) {
    var pls = document.getElementById("plus10");
    pls.style.display = "block";
    pls.animate([
   {transform: 'translateY(-70px)'}
], 1300);   
    setTimeout(hideSingle,1300,pls);
    }
    else {
    var pls = document.getElementById("minus10");
    pls.style.display = "block";
    pls.animate([
   {transform: 'translateY(70px)'}
], 1300);    
   setTimeout(hideSingle,1300,pls);
    }
}

function selectPictures () {
    /*const pic1 = new xPictures().hiddenPicture1;*/
    /* var randomElement = picArray[Math.floor(Math.random() * picArray.length)];*/
    let picArray = document.getElementsByClassName("picture1");
    return picArray;
}

function start(){
    startTime = Date.now();
    interval = setInterval(function(){
    timi = Date.now() - startTime;
    });
}

function stop () {
    
     clearInterval(interval);
     document.getElementById("Lasttime").innerHTML = timi/1000;
     showArrayInline(cover);
    
    
    if (document.getElementById("Fasttime").innerHTML > timi/1000) {
        if (GameOn || zeit) {
            goRecord();
        }

        document.getElementById("Fasttime").innerHTML = timi/1000;
        showArrayInline(cover);
       
        
    }
    
}


           
function showFirst(x,waitTime) {
     vidPlus.load();
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
        setTimeout(hideArray,milliseconds=waitTime,x);
        
        
    }
    setTimeout(showSecond,1500,selectPictures(),500);
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
           addScore(10);
           purScore += 10;
           hiddenDot[0].style.display = "none";
           if (GameOn || feedback) {vidPlus.style.display = "block";
           setTimeout(hideSingle,1500,vidPlus);
         }
           if (GameOn || punkte) {TenMove(true);}
           
           if (GameOn || points) {greenValue += 4;
            barGreen.style.width = greenValue;
            
             if (purScore == 300) {addScore(5); goBonusPoints("TimeBonus5");}
             if (purScore == 600) {addScore(10); goBonusPoints("TimeBonus10");}
             if (purScore == 900) {addScore(30); goBonusPoints("TimeBonus30");}
             if (purScore == 1200) {addScore(50); goBonusPoints("TimeBonus50");}
            }
                                  }
           
           
  else if (key.keyCode =="39") {  
           subtractScore();
           purScore -= 10;
           hiddenDot[0].style.display = "none";
           if (GameOn || punkte) {
           TenMove(false);}
           if (greenValue > 5 && (GameOn || points)) {
           greenValue -= 4;
           barGreen.style.width = greenValue;
           }
                     
  }
   window.removeEventListener("keydown",checkKeyPressForLeft,false);
   
   setTimeout(set,1000,GameOn);

}

function checkKeyPressForRight(key) {
    if (key.keyCode =="39") {
             stop();
             addScore(10);
             purScore += 10;
             hiddenDot[1].style.display = "none";
             if (GameOn || feedback) {
                vidPlus.style.display = "block";
                setTimeout(hideSingle,1500,vidPlus);
             }
             
             if (GameOn || punkte) { TenMove(true);}
             
             if (GameOn || points) {greenValue += 4;
                barGreen.style.width = greenValue;
             if (purScore == 300) {addScore(5); goBonusPoints("TimeBonus5");}
             if (purScore == 600) {addScore(10); goBonusPoints("TimeBonus10");}
             if (purScore == 900) {addScore(30); goBonusPoints("TimeBonus30");}
             if (purScore == 1200) {addScore(50); goBonusPoints("TimeBonus50");}
                       }
                                    }
             
     else if (key.keyCode =="37") {  
            subtractScore();
            purScore -= 10;
            hiddenDot[1].style.display = "none";
            if (GameOn || punkte) {
            TenMove(false);}
            if (greenValue > 5 && (GameOn || points)) {
           greenValue -= 4;
           barGreen.style.width = greenValue;
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

function showArrayInline(x) {
    
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "inline-block";
    }
}


function hideSingle(x) {
    x.style.display = "none";
}

function showSingle(x) {
    x.style.display = "block";
}


function addScore (x) {
    score += x;
    document.getElementById("point").innerHTML = score;
}

function subtractScore () {
    score -= 10;
    document.getElementById("point").innerHTML = score;
    
}


function NoGamification() {
  hideArray(buttons);
  set(false);
}

function AllGamification() {

  hideArray(buttons);
  bar.style.display = "block";
  barGreen.style.display = "block";
  showArray(points);
  thePoints.style.display = "block";
  theTime.style.display = "block";
 set(true);
    
}

function EnableDisableGamification() {
  hideArray(buttons);
  showArray(buttonsEnableDisable);
    
}

function SelectGamification() {
var selectStuff = document.getElementsByClassName("Selektion");
showArray(selectStuff);
hideArray(buttons);

}

function StartIt() {
var zeitbox = document.getElementById("ZeitBox");
var punktebox = document.getElementById("PunkteBox");
var effektbox = document.getElementById("feedbackBox");
var selectStuff = document.getElementsByClassName("Selektion");    
zeit = zeitbox.checked;
punkte = punktebox.checked;
feedback = effektbox.checked;
hideArray(selectStuff);
if (punkte) {bar.style.display = "block"; barGreen.style.display = "block"; showArray(points); thePoints.style.display = "block";}    
if (zeit) {theTime.style.display = "block";}    
set(false);
}

                     

function EnableGamification() {
    hideArray(buttonsEnableDisable);
    
    AllGamification();
}

function DisableGamification() {
    hideArray(buttonsEnableDisable);
    NoGamification();
}


function startTutorial() {
    let tutorialButtons = document.getElementsByClassName("introductionTutorial");
    hideArray(tutorialButtons);
    setTimeout(explainCross,1000);  
    setTimeout(showTutorialCross,2000);  
}

function explainCross() {
    showArray(hiddenCross);
    
}

function showTutorialCross () {
    let positionCross1 = document.getElementsByClassName("positionCross1");
    let afterCross1 = document.getElementById("afterCross1");
    showSingle(afterCross1);
    fadeInAll(positionCross1);
    fadeIn(afterCross1);
  }


function afterCross1() {
    hideArray(hiddenCross);
    let positionCross1 = document.getElementsByClassName("positionCross1");
    let afterCross1 = document.getElementById("afterCross1");
    fadeOutAll(positionCross1);
    fadeOut(afterCross1);
    hideSingle(afterCross1);
    setTimeout(explainPictures,1000);
    setTimeout(showTutorialPictures,2000);
}

function explainPictures() {
    showArray(selectPictures());
}

function showTutorialPictures() {
    let positionPicture1 = document.getElementsByClassName("positionPicture1");
    let afterPicture1 = document.getElementById("afterPicture1");
    showSingle(afterPicture1);
    fadeInAll(positionPicture1);
    fadeIn(afterPicture1);
}

function afterPicture1() {
   hideArray(selectPictures());
   let positionPicture1 = document.getElementsByClassName("positionPicture1");
   let afterPicture1 = document.getElementById("afterPicture1");
   fadeOutAll(positionPicture1);
   fadeOut(afterPicture1);
   hideSingle(afterPicture1);
   setTimeout(explainDots,1000);
   setTimeout(showTutorialDots,2000);
}

function explainDots () {
    showSingle(hiddenDot[1]);
}

function showTutorialDots() {
    let positionDot1 = document.getElementsByClassName("positionDot1");
    let afterDot1 = document.getElementById("afterDot1");
    
    fadeInAll(positionDot1);
    
}


function set (bool) {
  
       GameOn = bool;
       setTimeout(showFirst,1000,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
       
    }



