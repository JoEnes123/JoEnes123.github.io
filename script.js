
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
let vidPlus = document.getElementById("plusAnim");
let recordBars = document.getElementsByClassName("RecordBars");
let bar = document.getElementById("bar");
let barGreen = document.getElementById("barGreen");
let greenValue = 5;
let points = document.getElementsByClassName("points");
let buttons = document.getElementsByClassName("buttons");
let buttonsEnableDisable = document.getElementsByClassName("buttonsEnableDisable");
let thePoints = document.getElementById("scores");
let theTime = document.getElementById("scores2");
let GameOn;
let anim = document.getElementById("MyDIV").addEventListener("trigger", goRecord);
let selectStuff = document.getElementsByClassName("Selektion");
let element = document.createElement('a');
let startTime, interval, endTime, timi, zeit, punkte, feedback;

class xPictures {
    constructor() {
        this.hiddenPicture1 = document.getElementsByClassName("picture1");
        this.hiddenPicture2 = document.getElementsByClassName("picture2");
        this.hiddenPicture3 = document.getElementsByClassName("picture3");
        this.hiddenPicture4 = document.getElementsByClassName("picture4");
        this.hiddenPicture5 = document.getElementsByClassName("picture5");
    }
}





function goRecord() {
   
    var pls = document.getElementById("Time1");
    pls.style.display = "block";
    pls.animate([
   {transform: 'scale(1.0)'}
], 1300);
    
   setTimeout(hideSingle,1300,pls);
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
    const pic1 = new xPictures().hiddenPicture1;
    const pic2 = new xPictures().hiddenPicture2;
    const pic3 = new xPictures().hiddenPicture3;
    const pic4 = new xPictures().hiddenPicture4;
    const pic5 = new xPictures().hiddenPicture5;
    var picArray = [pic1,pic2,pic3,pic4,pic5];
    var randomElement = picArray[Math.floor(Math.random() * picArray.length)];
    return randomElement;
}

function start(){
    startTime = Date.now();
    interval = setInterval(function(){
    timi = Date.now() - startTime;
    });
}

function stop () {
    
    endTime = timi;
    clearInterval(interval);
    document.getElementById("Lasttime").innerHTML = endTime/1000;
    showArrayInline(cover);
    
    
    if (document.getElementById("Fasttime").innerHTML > endTime/1000) {
        if (GameOn || zeit) {
            goRecord();
        }

        document.getElementById("Fasttime").innerHTML = endTime/1000;
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
           setTimeout(hideSingle,1700,vidPlus);}
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
             if (GameOn || feedback) {vidPlus.style.display = "block";
             setTimeout(hideSingle,1700,vidPlus);}
            
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


function TestModus () {

    TestOhne.style.display = "block";
    OhneVideo.style.display = "block";
    TesteOhne.style.display = "block";
    hideArray(buttons);
    showArray(circles);
    
}


function Left() {
    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");
    var circle3 = document.getElementById("circle3");
    var circle4 = document.getElementById("circle4");
    if (arrowCount>0) {arrowCount--;}
    if (arrowCount == 0) {TestOhne.style.display = "block"; TestPunkte.style.display = "none";
                          OhneVideo.style.display = "block";PunkteVideo.style.display ="none";HelpBar1.style.display ="none";HelpBar2.style.display ="none";circle1.style.background = "black"; circle2.style.background = "white";}
    if (arrowCount == 1) {TestPunkte.style.display = "block"; TestZeit.style.display = "none";
                          ZeitVideo.style.display ="none";PunkteVideo.style.display ="block";circle2.style.background = "black"; circle3.style.background = "white";}
    if (arrowCount == 2) {TestZeit.style.display = "block"; TestFeedback.style.display = "none";
                          FeedbackVideo.style.display="none";ZeitVideo.style.display="block";circle3.style.background = "black"; circle4.style.background = "white";}
    
    
}

function Right() {
    var circle1 = document.getElementById("circle1");
    var circle2 = document.getElementById("circle2");
    var circle3 = document.getElementById("circle3");
    var circle4 = document.getElementById("circle4");
    if (arrowCount<3) {arrowCount++;}
    if (arrowCount == 1) {TestOhne.style.display = "none"; TestPunkte.style.display = "block";
                          OhneVideo.style.display="none";PunkteVideo.style.display="block";HelpBar1.style.display ="block";HelpBar2.style.display ="block";circle1.style.background = "white"; circle2.style.background = "black";}
    if (arrowCount == 2) {TestZeit.style.display ="block";TestPunkte.style.display ="none";
                          PunkteVideo.style.display="none";ZeitVideo.style.display="block";circle2.style.background = "white"; circle3.style.background = "black";}
    if (arrowCount == 3) {TestZeit.style.display ="none";TestFeedback.style.display ="block";
                          ZeitVideo.style.display="none";FeedbackVideo.style.display ="block";circle3.style.background = "white"; circle4.style.background = "black";}
    
}


function set (bool) {
       GameOn = bool;
       setTimeout(showFirst,1000,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
       
    }



