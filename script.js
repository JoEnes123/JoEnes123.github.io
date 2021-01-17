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
var countTest = 0;
var gameTut = false;
var gameSelect = false;
var gameEnDis = false;
var test = false;
var selectionTest = false;
var disableTest = false;
var enableTest = false;
var enableDisableEndTest = false;
var beforeSelektionAppears = false;
var punkte = false;
var practisePointsBool = false;
var pointsExplained = false;
var practiseFeedbackBool = false;
var feedbackExplained = false;
var practiseTimeBool = false;
var timeExplained = false;
let FeedbackVideo = document.getElementById("FeedbackVideo");
let right = document.getElementById("right");
let TesteOhne = document.getElementById("TesteOhne");
let circles = document.getElementsByClassName("circles");
let HelpBar1 = document.getElementById("HelpBar1");
let HelpBar2 = document.getElementById("HelpBar2");
let recordBars = document.getElementsByClassName("RecordBars");
let bar = document.getElementById("bar");
let barGreen = document.getElementById("barGreen");
let barIndicate = document.getElementsByClassName("barIndicate");
let greenValue = 5;
let greenPosition = -271;
let vidPlus = document.getElementById("plusAnim");
let vidMinus = document.getElementById("minusAnim");
let points = document.getElementsByClassName("points");
let buttons = document.getElementsByClassName("buttons");
let buttonsEnableDisable = document.getElementsByClassName("DecideScreen");
let thePoints = document.getElementById("scores");
let theTime = document.getElementById("scores2");
let GameOn;
//let anim = document.getElementById("MyDIV").addEventListener("trigger", goRecord);
let selectStuff = document.getElementsByClassName("Selektion");
let element = document.createElement('a');
let tutorialButtons = document.getElementsByClassName("introductionTutorial");
var startTime, interval, endTime, timi, zeit, feedback;
let counterTaskEnds = 0;

let trackData = false;
let NoGamificationOn = false;
let AllGamificationOn = false;
let EnableGamificationOn = false;
let DisableGamificationOn = false;
let SelectGameFeature1On = false;
let SelectGameFeature2On = false;
let SelectGameFeature3On = false;

let Samples = [];
let currentCorrect = null;
let currentTime = null;


/*class xPictures {
    constructor() {
        this.hiddenPicture1 = document.getElementsByClassName("picture1");
    }
}
*/



function resetTime () {
    document.getElementById("Lasttime").innerHTML = 0;
    document.getElementById("Fasttime").innerHTML = 0;
}

function resetScore () {
    score = 0;
    document.getElementById("point").innerHTML = score;
}

function checkTest () {
   
    if (countTest >1) {return true;}
    else {return false;}
}

function fadeOutIfVisible (x) {
    if (x.style.opacity == 0) {}
    else {fadeOut(x);}
}

function fadeOutAllIfVisible (x) {
    for(var i=0;i!=x.length;i++) {
        if (x[i].style.opacity == 0) {}
        else {fadeOut(x[i]);}
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

function scaleIt(x) {
   
    x.animate([{
        width: '100'
        
        
    }, {
        width: '80'
    }
    ], {
        duration: 800,
        direction: 'alternate',
        iterations: Infinity
        
    });
    
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
     if (trackData) {
        counterTaskEnds++;
        writeData(currentCorrect,timi/1000);}
    
    if (document.getElementById("Fasttime").innerHTML > timi/1000 || document.getElementById("Fasttime").innerHTML == 0) {
        if (GameOn || zeit) {
            goRecord();
        }

        document.getElementById("Fasttime").innerHTML = timi/1000;
        showArrayInline(cover);
       
        
    }
    

}

           
function showFirst(x,waitTime) {
    if (counterTaskEnds > 4) {
        let theEnd = document.getElementById("theEnd");
        setTimeout(fadeIn,2000,theEnd);
        sendJson();}
    else {
     vidPlus.load();
     vidMinus.load();
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
        setTimeout(hideArray,milliseconds=waitTime,x);
        
        
    }
    setTimeout(showSecond,1500,selectPictures(),500);
    }
}

function showSecond(x,waitTime) {
    
    for(var i=0;i!=x.length;i++) {
        x[i].style.display = "block";
        setTimeout(hideArray,milliseconds=waitTime,x);
        
        
    }

   
    setTimeout(showDot,500,hiddenDot);
}

function showDot (x) {
     
    if (practisePointsBool || practiseTimeBool || practiseFeedbackBool || enableTest) {
        showSingle(hiddenDot[1]);
        start();
        window.addEventListener("keydown",checkKeyPressForRightTutorial1,false);
    }
    else {
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
    
        }



function checkKeyPressForLeft(key) {
    let vidPlus = document.getElementById("plusAnim");
  
    if (key.keyCode =="37") {
           currentCorrect = "Yes";
           stop();
           addScore(10);
           purScore += 10;
           hiddenDot[0].style.display = "none";
           if (GameOn || feedback) {
          
           vidPlus.style.display = "block";
           setTimeout(hideSingle,2300,vidPlus);
           
         }
        
           if (GameOn || punkte) {TenMove(true);}
           
           if (GameOn || punkte) {
                                  
            addGreenBar();
            
             if (purScore == 250) {addScore(5); goBonusPoints("TimeBonus5");}
             if (purScore == 500) {addScore(10); goBonusPoints("TimeBonus10");}
             if (purScore == 750) {addScore(30); goBonusPoints("TimeBonus30");}
             if (purScore == 1000) {addScore(50); goBonusPoints("TimeBonus50");}
            }
                                  }
           
           
  else if (key.keyCode =="39") {  
           currentCorrect = "No";
           currentTime = 0;
           if (trackData) {
               counterTaskEnds++;
               writeData(currentCorrect,currentTime);}
           subtractScore();
           subtractGreenBar();
           purScore -= 10;
           hiddenDot[0].style.display = "none";
           if (GameOn || punkte) {
           vidMinus.style.display = "block";
           setTimeout(hideSingle,2300,vidMinus); 
           TenMove(false);}
           if (greenValue > 5 && (GameOn || punkte)) {
            
            subtractGreenBar();

           }
                     
  }
   window.removeEventListener("keydown",checkKeyPressForLeft,false);
   
countTest++;

 //Bedingung bei Selektion

  if (beforeSelektionAppears && checkTest()) {
   
    let practiseSelect = document.getElementById("practiseSelect");
    let goodJobSelect = document.getElementById ("goodJobSelect");
    setTimeout(showSingle,2000,practiseSelect);
    setTimeout(fadeIn,2000,practiseSelect);
    setTimeout(fadeIn,2000,goodJobSelect);
    beforeSelektionAppears = false;
  }
//Bedingung mit EnableDisable
  else if (disableTest && checkTest()) {
     
      let goodJobEnableDisable = document.getElementById("goodJobEnableDisable");
      let nowWithGame = document.getElementById("nowWithGame");
      disableTest = false;
      fadeIn(goodJobEnableDisable);
      fadeIn(nowWithGame);
      showSingle(nowWithGame);
  }

  else if (enableDisableEndTest && checkTest()) {
    
    EnableDisableGamification();}
  else if (test && checkTest()) {      
         //Bedingung ohne Game
    let startTask = document.getElementById("startTask");
    let startText = document.getElementById("startText");
    
    setTimeout(showSingle,2000,startTask);
    setTimeout(fadeIn,2000,startTask);
    setTimeout(fadeIn,2000,startText);
   }
   else if (selectionTest && checkTest()) {  
          //Bedingung mit Selektion
        setTimeout(backToSelection,2000);
    }
    else {{setTimeout(set,1000,GameOn)};

}

}

function checkKeyPressForRight(key) {
    
 
    if (key.keyCode =="39") {
            currentCorrect = "Yes";
             stop();
             addScore(10);
             purScore += 10;
             hiddenDot[1].style.display = "none";
             if (GameOn || feedback) {
                
                vidPlus.style.display = "block";
                setTimeout(hideSingle,2300,vidPlus);
             }
             
             if (GameOn || punkte) { TenMove(true);}
             
             if (GameOn || punkte) {
                 
               addGreenBar();


             if (purScore == 250) {addScore(5); goBonusPoints("TimeBonus5");}
             if (purScore == 500) {addScore(10); goBonusPoints("TimeBonus10");}
             if (purScore == 750) {addScore(30); goBonusPoints("TimeBonus30");}
             if (purScore == 1000) {addScore(50); goBonusPoints("TimeBonus50");}
                       }
                                    }
             
     else if (key.keyCode =="37") {  
            currentCorrect = "No";
            currentTime = 0;
            if (trackData) {
                counterTaskEnds++;
                writeData(currentCorrect,currentTime);}
            subtractScore();
            subtractGreenBar();
            purScore -= 10;
            hiddenDot[1].style.display = "none";
            if (GameOn || punkte) {
            vidMinus.style.display = "block";
            setTimeout(hideSingle,2300,vidMinus);
            TenMove(false);}
            if (greenValue > 5 && (GameOn || punkte)) {
          
            subtractGreenBar();

           }
                      }
    
    window.removeEventListener("keydown",checkKeyPressForRight,false);
   
    countTest++;

    if (beforeSelektionAppears && checkTest()) {
        
        let practiseSelect = document.getElementById("practiseSelect");
        let goodJobSelect = document.getElementById ("goodJobSelect");
        setTimeout(showSingle,2000,practiseSelect);
        setTimeout(fadeIn,2000,practiseSelect);
        setTimeout(fadeIn,2000,goodJobSelect);
        beforeSelektionAppears = false;
      }

    else if (disableTest && checkTest()) { 
   
    let goodJobEnableDisable = document.getElementById("goodJobEnableDisable");
    let nowWithGame = document.getElementById("nowWithGame");
    disableTest = false;
    fadeIn(goodJobEnableDisable);
    fadeIn(nowWithGame);
    showSingle(nowWithGame);}

    else if (enableDisableEndTest && checkTest()) {EnableDisableGamification();}

    else if (test && checkTest()) {
   
    let startTask = document.getElementById("startTask");
    let startText = document.getElementById("startText");
   
    setTimeout(showSingle,2000,startTask);
    setTimeout(fadeIn,2000,startTask);
    setTimeout(fadeIn,2000,startText);
    }
    else if (selectionTest && checkTest()) {
        
         setTimeout(backToSelection,2000);
     }
     else {{setTimeout(set,1000,GameOn)};};
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

function addGreenBar () {
            greenValue += 4.4;
            greenPosition += 2.2;
            let valueString = String(greenValue).concat("px");
            let positionString = String(greenPosition).concat("px");
            barGreen.style.width = valueString;
            barGreen.style.left = positionString;
}

function subtractGreenBar () {
    greenValue -= 4.4;
    greenPosition -= 2.2;
    let valueString = String(greenValue).concat("px");
    let positionString = String(greenPosition).concat("px");
    barGreen.style.width = valueString;
    barGreen.style.left = positionString;
}

function resetGreenBar () {
            greenValue = 5;
            greenPosition = -271;
            let valueString = String(greenValue).concat("px");
            let positionString = String(greenPosition).concat("px");
            barGreen.style.width = valueString;
            barGreen.style.left = positionString;
}

function NoGamificationTut() {
    NoGamificationOn = true; //indicates the condition for later tracking
    let okay = document.getElementById("okay");
    let taskExplain = document.getElementsByClassName("taskExplain");
    fadeInAll(taskExplain);
    showSingle(okay);
    hideArray(buttons);
}

function startTask () {
    trackData = true; //start tracking the data
    resetScore();
    purScore = 0;
    resetTime();  
    resetGreenBar();
    let startTask = document.getElementById("startTask");
    let startText = document.getElementById("startText");
    hideSingle(startTask);
    fadeOut(startTask);
    fadeOut(startText);
    test = false;
    if (GameOn) {AllGamification();}
    if (!GameOn) {NoGamification();}

}

function NoGamification() {  
  set(false);
}

function AllGamificationTut() {
  
   if (!EnableGamificationOn)  {AllGamificationOn = true;} //indicates the condition for later tracking
  
    
    let okayGame = document.getElementById("okayGame");
    let taskExplainGame = document.getElementsByClassName("taskExplainGame");
    fadeInAll(taskExplainGame);
    showSingle(okayGame);
    hideArray(buttons);
    
}

function sendJson () {
  
   // Sending and receiving data in JSON format using POST method
    var data = JSON.stringify({
        WithoutGamification: NoGamificationOn,
        WithGamificaion: AllGamificationOn,
        EnableGamification: EnableGamificationOn,
        DisableGamification: DisableGamificationOn,
        GamificationFeature1: SelectGameFeature1On,
        GamificationFeature2: SelectGameFeature2On,
        GamificationFeature3: SelectGameFeature3On,
        Samples: Samples
    });

    var xhr = new XMLHttpRequest();
    var url = "http://dotprobetask.de/receiver.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log("Server Antwort: ", xhr.response, "\n");
            if (xhr.status === 200) {
                alert("geht");
            } else {
                alert("ging nicht");
            }
        }
    };
    console.log("Sent");

    xhr.send(data);
}

function writeData(x,y) {
    Samples.push([x,y]);
}

function AllGamification() {
  bar.style.display = "block";
  barGreen.style.display = "block";
  showArray(barIndicate);
  showArray(points);
  thePoints.style.display = "block";
  theTime.style.display = "block";
 set(true);
    
}

function EnableDisableGamificationTut() {
    hideArray(buttons);
    let okayEnableDisable = document.getElementById("okayEnableDisable");
    let taskExplainEnableDisable = document.getElementsByClassName("taskExplainEnableDisable");
    disableTest = true;
    fadeInAll(taskExplainEnableDisable);
    showSingle(okayEnableDisable);
    
      
  }

function EnableDisableGamification() {
    test = false;
    enableDisableEndTest = false;
    setTimeout(hideSingle,1000,bar);
    setTimeout(hideSingle,1000,barGreen);
    setTimeout(hideArray,1000,barIndicate);
    setTimeout(hideArray,1000,points);
    setTimeout(hideSingle,1000,thePoints);
    setTimeout(hideSingle,1000,theTime);
    setTimeout(resetTime,1000);
    setTimeout(resetScore,1000);
    setTimeout(resetGreenBar,1000);
    purScore = 0;
  setTimeout(showArray,2000,buttonsEnableDisable);
  setTimeout(fadeInAll,2000,buttonsEnableDisable);
    
}

function SelectGamificationTut() {
    let okaySelect = document.getElementById("okaySelect");
    let taskExplainSelect = document.getElementsByClassName("taskExplainSelect");
    fadeInAll(taskExplainSelect);
    showSingle(okaySelect);
    hideArray(buttons);
}

function SelectGamification() {
var selectStuff = document.getElementsByClassName("Selektion");
showArray(selectStuff);


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
if (punkte) {bar.style.display = "block"; barGreen.style.display = "block"; showArray(points); thePoints.style.display = "block"; showArray(barIndicate);}    
if (zeit) {theTime.style.display = "block";}    
set(false);
}

                     

function EnableGamification() {
    trackData = true;
    EnableGamificationOn = true; //indicates the condition for later tracking
    hideArray(buttonsEnableDisable);
    fadeOutAll(buttonsEnableDisable);
    
    AllGamification();
}

function DisableGamification() {
    trackData = true;
    DisableGamificationOn = true; //indicates the condition for later tracking
    hideArray(buttonsEnableDisable);
    fadeOutAll(buttonsEnableDisable);
    NoGamification();
}

//TUTORIAL OHNE GAMIFICATION 

function okay() {
    let introductionTutorial = document.getElementsByClassName("introductionTutorial");
    let taskExplain = document.getElementsByClassName("taskExplain");
    let okay = document.getElementById("okay");
    let startTutorial = document.getElementById("startTutorial");
    hideSingle(okay);
    showSingle(startTutorial);
    fadeInAll(introductionTutorial);
    fadeOutAll(taskExplain);
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
    let arrowRightPic = document.getElementById("arrowRightPic");
    showArray(positionDot1);
    showSingle(arrowRightPic);
    fadeInAll(positionDot1);
    fadeIn(arrowRightPic);
    scaleIt(arrowRightPic);
    window.addEventListener("keydown",checkKeyPressForRightTutorial1,false);
    start();
}





function checkKeyPressForRightTutorial1(key) {
   
    if (key.keyCode == '39' && enableTest) {       
         stop();
         enableTest = false;
        window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
        let newTimeRecord = document.getElementById("TimeTutorial");
        let plusZehn = document.getElementById("plus10Tutorial");
        let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
        let afterGetPoints = document.getElementById("afterGetPoints");
        
        addScore(10);
        addGreenBar();
        hideSingle(hiddenDot[1]);
        goRecord();
        TenMove(true);
        vidPlus.style.display = "block";
        setTimeout(hideSingle,2300,vidPlus);
        setTimeout(showSingle,1300,newTimeRecord);
        setTimeout(showSingle,1300,plusZehn);
        setTimeout(fadeInAll,2000,plusZehnPosition);
        setTimeout(fadeIn,2000,afterGetPoints);
        showSingle(afterGetPoints);}

else if (key.keyCode== "39" && (practisePointsBool)) {activatePoints();}
else if (key.keyCode== "39" && (practiseTimeBool)) {activateTime();}
else if (key.keyCode== "39" && (practiseFeedbackBool)) {activateFeedback();}


    else if (key.keyCode =="39" && (gameTut == false)) {
        stop();
        window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
        let positionDot1 = document.getElementsByClassName("positionDot1");
        let arrowRightPic = document.getElementById("arrowRightPic");
        let practise1 = document.getElementById("practise1");
        let goodJob = document.getElementById ("goodJob");
        let practiseSelect0 = document.getElementById("practiseSelect0");
        let goodJobSelect0 = document.getElementById ("goodJobSelect0");
        addScore(10);
        addGreenBar();
        fadeOutAll(positionDot1);
        fadeOut(arrowRightPic);
        hideSingle(hiddenDot[1]);

        if (gameSelect) {
 
            showSingle(practiseSelect0);
            fadeIn(practiseSelect0);
            fadeIn(goodJobSelect0);
             }
        else { showSingle(practise1);
               fadeIn(practise1);
               fadeIn(goodJob);
            }
        }
    else if (key.keyCode =="39" && gameTut) {
        
        stop();
        window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
        let positionDot1 = document.getElementsByClassName("positionDot1");
        let arrowRightPic = document.getElementById("arrowRightPic");
        let newTimeRecord = document.getElementById("TimeTutorial");
        let plusZehn = document.getElementById("plus10Tutorial");
        let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
        let afterGetPoints = document.getElementById("afterGetPoints");
        let dotStand = document.getElementById("DotsStand");
        let vidPlusShort = document.getElementById("plusAnimShort");
        
        fadeOutAll(positionDot1);
        fadeOut(arrowRightPic);
        hideSingle(hiddenDot[1]);
        addScore(10);
        addGreenBar();
        goRecord();
        vidPlusShort.style.display = "block";
        setTimeout(showSingle,1950,dotStand);
        setTimeout(hideSingle,2000,vidPlusShort);
        TenMove(true);
        setTimeout(showSingle,1300,newTimeRecord);
        setTimeout(showSingle,1300,plusZehn);
        setTimeout(fadeInAll,2000,plusZehnPosition);
        setTimeout(fadeIn,2000,afterGetPoints);
        showSingle(afterGetPoints);

        //greenBar Animation
        
    }
}

function activatePoints() {
    stop();
    addScore(10);
    addGreenBar();
    window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
    let plusZehn = document.getElementById("plus10Tutorial");
    let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
    let afterGetPoints = document.getElementById("afterGetPoints");
    
    hideSingle(hiddenDot[1]);
    TenMove(true);
    setTimeout(showSingle,1300,plusZehn);
    setTimeout(fadeInAll,2000,plusZehnPosition);
    setTimeout(fadeIn,2000,afterGetPoints);
    showSingle(afterGetPoints);
  
}

function activateTime() {
    stop();
    window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
    let newTimeRecord = document.getElementById("TimeTutorial");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let afterExplainScore = document.getElementById("afterExplainScore");
    hideSingle(hiddenDot[1]);
    goRecord();
    setTimeout(showSingle,1300,newTimeRecord);
    setTimeout(fadeInAll,2000,positionRecord1);
    setTimeout(fadeIn,2000,afterExplainScore);
    showSingle(afterExplainScore);
    
}

function activateFeedback() {
    stop();
    addScore(10);
    addGreenBar();
    window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
    let plusZehn = document.getElementById("plus10Tutorial");
    let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
    let afterGetPoints = document.getElementById("afterGetPoints");
    hideSingle(hiddenDot[1]);
    TenMove(true);
    setTimeout(showSingle,1300,plusZehn);
    setTimeout(fadeInAll,2000,plusZehnPosition);
    setTimeout(fadeIn,2000,afterGetPoints);
    showSingle(afterGetPoints);
  
}

function practise1 () {
    let practise1 = document.getElementById("practise1");
    let goodJob = document.getElementById ("goodJob");
    hideSingle(practise1);
    fadeOut(practise1);
    fadeOut(goodJob);
    test = true;    
    NoGamification();
}

//TUTORIAL MIT GAMIFICATION

function okayGame() {
    gameTut = true;
    let introductionTutorialGame = document.getElementsByClassName("introductionTutorialGame");
    let taskExplainGame = document.getElementsByClassName("taskExplainGame");
    let okayGame = document.getElementById("okayGame");
    let startTutorialGame = document.getElementById("startTutorialGame");
    hideSingle(okayGame);
    showSingle(startTutorialGame);
    fadeInAll(introductionTutorialGame);
    fadeOutAll(taskExplainGame);
}

function startTutorialGame () {
    let tutorialButtonsGame = document.getElementsByClassName("introductionTutorialGame");
    hideArray(tutorialButtonsGame);
    setTimeout(explainCross,1000);  
    setTimeout(showTutorialCross,2000);
    showSingle(bar);
    showSingle(barGreen);
    showArray(barIndicate);
    showArray(points);
    showSingle(thePoints);
    showSingle(theTime);

}

function afterGetPoints () {

    let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
    let afterGetPoints = document.getElementById("afterGetPoints");
    let positionScore1 = document.getElementsByClassName ("positionScore1");
    let afterExplainPoints = document.getElementById ("afterExplainPoints")
    fadeOutAll(plusZehnPosition);
    fadeOut(afterGetPoints);
    hideSingle(afterGetPoints);
    fadeInAll(positionScore1);
    fadeIn(afterExplainPoints);
    showSingle(afterExplainPoints);
    

}

function afterExplainPoints () {
    
    let afterExplainPoints = document.getElementById("afterExplainPoints");
    let afterExplainScore = document.getElementById("afterExplainScore");
    let positionScore1 = document.getElementsByClassName ("positionScore1");
    let positionBar1 = document.getElementsByClassName ("positionBar1");
    fadeOutAll(positionScore1);
    fadeOut(afterExplainPoints);
    hideSingle(afterExplainPoints);
    fadeInAll(positionBar1);
    fadeIn(afterExplainScore);
    showSingle(afterExplainScore);

}

function afterExplainScore () {
    if (practisePointsBool) {
        let plusZehn = document.getElementById("plus10Tutorial");
        let positionBar1 = document.getElementsByClassName("positionBar1");
        let afterExplainScore = document.getElementById("afterExplainScore");
        let nowPractisePoints = document.getElementById("nowPractisePoints");
        let practisePointsPhase = document.getElementById("practisePointsPhase");
        let dotStand = document.getElementById("DotsStand");
        hideSingle(dotStand);
        fadeOut(plusZehn);
        fadeOutAll(positionBar1);
        fadeOut(afterExplainScore);
        hideSingle(afterExplainScore);
        fadeIn(nowPractisePoints);
        fadeIn(practisePointsPhase);
        showSingle(practisePointsPhase);
       
    }
    else if (practiseTimeBool) {
        let positionRecord1 = document.getElementsByClassName("positionRecord1");
        let afterExplainScore = document.getElementById("afterExplainScore");
        fadeOutAll(positionRecord1);
        fadeOut(afterExplainScore);
        hideSingle(afterExplainScore);
        setTimeout(afterExplainBar,500);
       
        
    }
    
     else{
    let afterExplainBar = document.getElementById("afterExplainBar");
    let afterExplainScore = document.getElementById("afterExplainScore");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let positionBar1 = document.getElementsByClassName ("positionBar1");
    fadeOutAll(positionBar1);
    fadeOut(afterExplainScore);
    hideSingle(afterExplainScore);
    fadeInAll(positionRecord1);
    fadeIn(afterExplainBar);
    showSingle(afterExplainBar);
    }
}

function afterExplainBar () {

if (practiseTimeBool) {
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    
    
    fadeInAll(positionTime1);
    fadeIn(afterExplainRecord);
    showSingle(afterExplainRecord);

    
}
else {
    let afterExplainBar = document.getElementById("afterExplainBar");
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    fadeOutAll(positionRecord1);
    fadeOut(afterExplainBar);
    hideSingle(afterExplainBar);
    fadeInAll(positionTime1);
    fadeIn(afterExplainRecord);
    showSingle(afterExplainRecord);
    }
}

function afterExplainRecord () {

    if (practiseTimeBool) {
        let newTimeRecord = document.getElementById("TimeTutorial");
        let positionTime1 = document.getElementsByClassName("positionTime1");
        let afterExplainRecord = document.getElementById("afterExplainRecord");
        let nowPractisePoints = document.getElementById("nowPractisePoints");
        let practiseTimePhase = document.getElementById("practiseTimePhase");

        fadeOutAll(positionTime1);
        fadeOut(newTimeRecord);
        fadeOut(afterExplainRecord);
        hideSingle(afterExplainRecord);
        fadeIn(nowPractisePoints);
        fadeIn(practiseTimePhase);
        showSingle(practiseTimePhase);


    }
else {
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    let nowPractise = document.getElementById ("nowPractise");
    let practise2 = document.getElementById ("practise2");
    let newTimeRecord = document.getElementById("TimeTutorial");
    let plusZehn = document.getElementById("plus10Tutorial");
    let dotStand = document.getElementById("DotsStand");
    hideSingle(dotStand);

    hideSingle(bar);
    hideSingle(barGreen);
    hideArray(barIndicate);
    hideArray(points);
    hideSingle(thePoints);
    hideSingle(theTime);
    hideSingle(newTimeRecord);
    hideSingle(plusZehn);

    fadeOutAll(positionTime1);
    fadeOut(afterExplainRecord);
    hideSingle(afterExplainRecord);
    fadeIn(nowPractise);
    fadeIn(practise2);
    showSingle(practise2);
}
}

function practise2 () {
    let practise2 = document.getElementById("practise2");
    let nowPractise = document.getElementById ("nowPractise");
    fadeOut(practise2);
    hideSingle(practise2);
    fadeOut(nowPractise);
    test = true;
    AllGamification();
}

//START TUTORIAL MIT ENABLE DISABLE

function okayEnableDisable() {
    gameEnDis = true;
    let introductionTutorialEnableDisable = document.getElementsByClassName("introductionTutorialEnableDisable");
    let taskExplainEnableDisable = document.getElementsByClassName("taskExplainEnableDisable");
    let okayEnableDisable = document.getElementById("okayEnableDisable");
    let startTutorialEnableDisable = document.getElementById("startTutorialEnableDisable");
    hideSingle(okayEnableDisable);
    showSingle(startTutorialEnableDisable);
    fadeInAll(introductionTutorialEnableDisable);
    fadeOutAll(taskExplainEnableDisable);
}

function startTutorialEnableDisable() {

    let tutorialButtonsEnableDisable = document.getElementsByClassName("introductionTutorialEnableDisable");
    hideArray(tutorialButtonsEnableDisable);
    setTimeout(explainCross,1000);  
    setTimeout(showTutorialCross,2000);
}

function nowWithGame() {
    resetScore();
    purScore = 0;
    resetTime();
    resetGreenBar();
    let goodJobEnableDisable = document.getElementById("goodJobEnableDisable");
    let nowWithGame = document.getElementById("nowWithGame");
    fadeOut(goodJobEnableDisable);
    fadeOut(nowWithGame);
    hideSingle(nowWithGame);
    enableTest = true;
    enableDisableEndTest = true;
    countTest = 0;
    showSingle(theTime);
    showSingle(bar);
    showSingle(barGreen);
    showArray(barIndicate);
    showArray(points);
    showSingle(thePoints);
    setTimeout(showFirst,1300,hiddenCross,1500);
}


//START TUTORIAL MIT SELEKTION

function okaySelect () {
        gameSelect = true;
        let introductionTutorialSelect = document.getElementsByClassName("introductionTutorialSelect");
        let taskExplainSelect = document.getElementsByClassName("taskExplainSelect");
        let okaySelect = document.getElementById("okaySelect");
        let startTutorialSelect = document.getElementById("startTutorialSelect");
        hideSingle(okaySelect);
        fadeInAll(introductionTutorialSelect);
        showSingle(startTutorialSelect);
        fadeOutAll(taskExplainSelect);
}

function practiseSelect () {
   
}

function startTutorialSelect() {

    let tutorialButtonsSelect = document.getElementsByClassName("introductionTutorialSelect");
    hideArray(tutorialButtonsSelect);
    setTimeout(explainCross,1000);  
    setTimeout(showTutorialCross,2000);
}

function practisePoints () {

   let haken = document.getElementsByClassName("haken");
   let selectOptions = document.getElementsByClassName("selectOptions");
   let selectButton = document.getElementsByClassName("selectButton");
   fadeOutAllIfVisible(haken);
   fadeOutAll(selectOptions);
   hideArray(selectButton);
   practisePointsBool = true;
   showSingle(bar);
   showSingle(barGreen);
   showArray(barIndicate);
   showArray(points);
   showSingle(thePoints);
   setTimeout(showFirst,1300,hiddenCross,1500);
}

function practisePointsPhase () {
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practisePointsPhase = document.getElementById("practisePointsPhase");
    fadeOut(nowPractisePoints);
    fadeOut(practisePointsPhase);
    hideSingle(practisePointsPhase);
    
    punkte = true;
    zeit = false;
    feedback = false;
    pointsExplained = true;
    practisePointsBool = false;
    selectionTest = true;
    set(false);
}

function practiseTime () {
    let haken = document.getElementsByClassName("haken");
    let selectOptions = document.getElementsByClassName("selectOptions");
    let selectButton = document.getElementsByClassName("selectButton");
   
    fadeOutAllIfVisible(haken);
    fadeOutAll(selectOptions);
    hideArray(selectButton);
    practiseTimeBool = true;
    showSingle(theTime);
    setTimeout(showFirst,1300,hiddenCross,1500);
 }

 function practiseTimePhase () {
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practiseTimePhase = document.getElementById("practiseTimePhase");
    fadeOut(nowPractisePoints);
    fadeOut(practiseTimePhase);
    hideSingle(practiseTimePhase);
   
    zeit = true;
    punkte = false;
    feedback = false;
    timeExplained = true;
    practiseTimeBool = false;
    selectionTest = true;
    set(false);
}

function beforeSelektionAppears0() {
    beforeSelektionAppears = true;
    let practiseSelect0 = document.getElementById("practiseSelect0");
    let goodJobSelect0 = document.getElementById ("goodJobSelect0");
    hideSingle(practiseSelect0);
    fadeOut(practiseSelect0);
    fadeOut(goodJobSelect0);
    test = true;
    NoGamification();
}

function beforeSelektionAppears1() {  
    resetScore();
    purScore = 0;
    resetTime();
    resetGreenBar();
    let practiseSelect = document.getElementById("practiseSelect");
    let goodJobSelect = document.getElementById("goodJobSelect");
    fadeOut(goodJobSelect);
    fadeOut(practiseSelect);
    hideSingle(practiseSelect);
    test= false;
    backToSelection();

   

    

}

function backToSelection () {
    setTimeout(resetScore,1000);
    setTimeout(resetTime,1000);
    setTimeout(resetGreenBar,1000);
    purScore = 0;
    countTest = 0;
    let selectOptions = document.getElementsByClassName("selectOptions");
    let practisePointButton = document.getElementById("practisePointButton");
    let practiseTimeButton = document.getElementById("practiseTimeButton");
    let practiseFeedbackButton = document.getElementById("practiseFeedbackButton");
    let pointHaken = document.getElementById("pointHaken");
    let timeHaken = document.getElementById("timeHaken");
    let feedbackHaken = document.getElementById("feedbackHaken");

    
    
    hideSingle(bar);
    hideSingle(barGreen);
    hideArray(barIndicate);
    hideArray(points);
    hideSingle(thePoints);
    hideSingle(theTime);
   

    fadeInAll(selectOptions);
    if (pointsExplained) {fadeIn(pointHaken);}
    else {fadeIn(practisePointButton);
          showSingle(practisePointButton);}

     if (timeExplained) {fadeIn(timeHaken);}
    else {fadeIn(practiseTimeButton);
         showSingle(practiseTimeButton);}

    if (feedbackExplained) {fadeIn(feedbackHaken);}
    else {fadeIn(practiseFeedbackButton);
         showSingle(practiseFeedbackButton);}
     }
      

function showGreen () {

  bar.style.display = "block";
  barGreen.style.display = "block";
  showArray(barIndicate);
  showArray(points);
}


function addGreen () {
let ha = 9.4;
let haString = String(ha).concat("px");
barGreen.style.width = haString;
barGreen.style.left = "-268.8px";
 
    
}


function set (bool) {
    
       GameOn = bool;
       setTimeout(showFirst,1300,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
       
    }



//718043062047-ffg37pio0fcrpcpjukg7artrf4vj9ass.apps.googleusercontent.com :CLIENT ID

//AIzaSyBfz67Qoq8tPbNnuOKNs2Fm90c8bCh0ndY :API KEY

//1J-uhJHFRqqYK5Z8uMD4JBm9YJE881eEcTgUsoh9iDvw :SPREADSHEET ID 

