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
let firstEntry = true;
let user_id;
let correctColumn = "Correct"; //Spaltenname Correct
let timeColum  = "Time"; //Spaltenname Time
let increaseColumnName = 1; //erhöhe Spaltenname

var gameEnDis = false;
var test = false;
var selectionTest = false;
var disableTest = false;
var enableTest = false;
var enableDisableEndTest = false;
var gameSelect = false;  //bestimmt ob ich in der 4.Condition bin
var punkte = false;
var practisePointsBool = false;
//var pointsExplained = false;
var practiseFeedbackBool = false;
//var feedbackExplained = false;
var practiseTimeBool = false;
//var timeExplained = false;
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

let EnableGamificationOn = false;


// Wird später ein integer von, sagen wir mal 0-11, der alle möglichen Bedingungen repräsentiert.
let GameCondition;

let Samples = [];
let Questionnaire = [];

let currentCorrect = null;
let currentTime = null;

let possibleFunctions = [1,2,3,4,5,6,7,8]; //Um Bedingugen im Tutorial zu shufflen

let basicsExplained = false; //trackt ob die Grundfunktionalitäten bereits textuel erklärt wurden
let pointsExplained = false; //trackt ob das Punkteelement bereits textuel erklärt wurde
let timeExplained = false; //trackt ob das Zeitelement bereits textuel erklärt wurde
let feedbackExplained = false; //trackt ob das Feedbackelement bereits textuel erklärt wurde

let noGameTutEnd = 0; //bestimmt wo es nach Beendigung des Tutorials ohne Game Elemente weitergeht (1-4 möglich entsprechend der 4.Conditions) -> erstmal nur 4 relevant
let noGameTutorialWithoutBasics = false; //false wenn NoGamificaiton zur einmaligen Demonstration vor dem Tutorial gezeigt wird, sonst true
let allGameState = false; //false wenn AllGamificaiton zur einmaligen Demonstration vor dem Tutorial gezeigt wird, sonst true

//let partOfCond4 = false; //wenn true, zeigt dass Tutorial Teil der 4. Condition ist und entsprechend zu dieser Auswahl zurückgekehrt werden muss



function theRequest (column,value) {
    
    $.ajax({
        type: "POST",
        url: "myTest.php",
        data: {
        col: column,
        val: value,
       
        },
        cache: false,
        success: function(data) {
        //alert(data);
        },
        error: function(xhr, status, error) {
        console.error(xhr);
        }
        });
       
        }


//lösche session variable mit user id

function clearSession () {
    
    $.ajax({
        type: "POST",
        url: "clearSession.php",
        data: { },
        cache: false,
        success: function(data) {
        },
        error: function(xhr, status, error) {
        console.error(xhr);
        }
        });
       
        }



function sendData (tupel) {

  
    
if (window.XMLHttpRequest)
        {
        // AJAX nutzen mit IE7+, Chrome, Firefox, Safari, Opera
        xmlhttp=new XMLHttpRequest();
        }
else
        {
        // AJAX mit IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
xmlhttp.onreadystatechange=function(){
         
    if (xmlhttp.readyState==4 && xmlhttp.status==200) { //wird zu true ausgewertet wenn der Kontakt zum Server erfolgreich hergestellt wurde
                
                user_id = (xmlhttp.responseText).toString(); //liefert die User_ID per php echo von der Datenbank (dem Server) zurück, muss eig nicht immer zurückgeliefert werden
                convertIt(user_id);
                alert(user_id);
                
                }
         }
xmlhttp.open("POST", "insertData.php", true);   //Aufruf des php script
xmlhttp.send(tupel); //sende Daten die in die Datenban eingetragen werden sollen 
    
}



// Conversion: Needs to be optimized
function convertIt (x) {
    for(var i=0;i!=1000;i++) {

        if (x == i) {user_id = i.toString();}
}

}



function resetTime () {
    document.getElementById("Lasttime").innerHTML = 0;
    document.getElementById("Fasttime").innerHTML = 0;
}

function resetScore () {
    score = 0;
    document.getElementById("point").innerHTML = score;
}

function checkTest () {
   
    if (countTest > 0) {return true;}
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

function playVideo(video) {

    video.style.display = "block";
    video.load();
    video.play();
   // setTimeout(hideSingle,2300,video);
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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
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
      //  writeData(currentCorrect,timi/1000); //Hier trage ich Ergebnisse in die Datenbank ein 
      theRequest("Correct"+increaseColumnName.toString(),currentCorrect); //trägt CorrectValue ein
      theRequest("Time"+increaseColumnName.toString(),(timi/1000).toString()); //trägt CorrectValue ein
      increaseColumnName++; //gibt Spaltennamen der nächsten Eingabe an
      
    


    
    } 
    
    if (document.getElementById("Fasttime").innerHTML > timi/1000 || document.getElementById("Fasttime").innerHTML == 0) {
        if (((GameOn || zeit)&& !practisePointsBool) || (zeit && punkte)) {
            goRecord();
        }

        document.getElementById("Fasttime").innerHTML = timi/1000;
        showArrayInline(cover);
       
        
    }
    

}



function showFirst(x,waitTime) {
    
    if (counterTaskEnds > 1) {
        let toQuestionnaire = document.getElementById("toQuestionnaire");
        clearSession(); 
        let theEnd = document.getElementById("theEnd");
        setTimeout(fadeIn,2000,theEnd);
        setTimeout(showSingle,2000,toQuestionnaire);
        setTimeout(fadeIn,2000,toQuestionnaire);
       // sendJson(); Daten werden nicht mehr am Ende auf diesem Weg an Server geschickt
    }
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
    
    if (enableTest || noGameTutorialWithoutBasics) { //leitet in Tutorial Press ohne Basics weiter
        showSingle(hiddenDot[1]);
        start();
        window.addEventListener("keydown",checkKeyPressForRightTutorial1,false); //Tutorial Press
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


function correctInput () { //richtige Eingabe 

                   
                        currentCorrect = "1";
                        stop();
                        addScore(10);
                        purScore += 10;
                        hideSingle(hiddenDot[0]);
                        hideSingle(hiddenDot[1]); //Unklar welcher Dot gezeigt wurde, daher werden einfach beide entfernt
                        if (GameOn || feedback) { //GameOn ist true wenn der Task mit Game Elementen ausgeführt wird
                        
                            playVideo(vidPlus);
                            setTimeout(hideSingle,2300,vidPlus);
                        
                        }

                        if (GameOn || punkte) { //Hier komme ich rein wenn die reinen Punkte geübt werden
                        
                        
                            TenMove(true);                  
                            addGreenBar();
                            
                            if (purScore == 250) {addScore(5); goBonusPoints("TimeBonus5");}
                            if (purScore == 500) {addScore(10); goBonusPoints("TimeBonus10");}
                            if (purScore == 750) {addScore(30); goBonusPoints("TimeBonus30");}
                            if (purScore == 1000) {addScore(50); goBonusPoints("TimeBonus50");}
                            } 
                }



function wrongInput () { //falsche Eingbae

            currentCorrect = "0";
                    currentTime = 0;
                    if (trackData) {
                        counterTaskEnds++;
                        sendData("Correct"+increaseColumnName.toString()+" "+currentCorrect+" "+user_id); //trägt CorrectValue ein
                        sendData("Time"+increaseColumnName.toString()+" NULL "+user_id); //trägt CorrectValue ein
                    increaseColumnName++; //gibt Spaltenname der nächsten Eingabe an
                    subtractScore();
                    subtractGreenBar();
                    purScore -= 10;
                    hideSingle(hiddenDot[0]);
                    hideSingle(hiddenDot[1]); //unklar welcher Dot gezeigt wurde, daher einfach beide verschwinden lassen
                    if (GameOn || punkte) {
                    playVideo(vidMinus);
                    setTimeout(hideSingle,2300,vidMinus);
                    TenMove(false);}
                    if (greenValue > 5 && (GameOn || punkte)) {
                
                    subtractGreenBar();

                }
}

}


function checkKeyPressForLeft(key) {
    
  
         if (key.keyCode =="37") {

                correctInput ();
            }
                
        else if (key.keyCode =="39") { 

                wrongInput();
                            
        }

    window.removeEventListener("keydown",checkKeyPressForLeft,false);
    countTest++;
    proceedInterpretation(); //entscheidet anhand der gesetzten Variabeln wie es nach diesem Input weitergeht

}


function checkKeyPressForRight(key) {
    
 
    if (key.keyCode =="39") {

        correctInput();
         }
             
     else if (key.keyCode =="37") {  

            wrongInput();
        }
    
    window.removeEventListener("keydown",checkKeyPressForRight,false);
    countTest++;
    proceedInterpretation(); //entscheidet anhand der gesetzten Variabeln wie es nach diesem Input weitergeht

}



function proceedInterpretation () {
    
            if (trackData) { //TODO geht aktuell nur mit NoGamification Bedingung
                
               
                set(false);
            }

            //Bedingung mit EnableDisable
            if (disableTest && checkTest() && noSelectives()) { //bedeutet dass in 3. Condition der Übungsteil des NoGame Tutorials vorbei ist, leitet Game Tutorial ein
                
                noGamePractiseOver();

            }

            else if (enableDisableEndTest && checkTest() && noSelectives()) { //bedeutet dass in 3.Condition der Übungsteil des Game Tutorials vorbei ist, 
                                                        //leitet Entscheidungsscreen ein (true setzten passiert in Funktion die auch in 4.Condition genutzt wird)
                                                        
                    allGamePractiseOver();
                   
             } 

            else if (test && checkTest() && !allGameState && (noGameTutEnd == 4) && noSelectives()) {   //No Game Tutorial in Select beendet, kehre zurück zu Select Screen um weitere durchzuführen    
               
                noGameEndBackToSelect();
                
            }

            else if (test && checkTest() && allGameState && noSelectives()) {  //GameTutorial beendet, entweder Task startet (mit Tracking) oder zurück zum Select Screen
                        
                
                allGameEndMaybeBackToSelect();

            }

            else if (checkTest() && (practisePointsBool || practiseTimeBool || practiseFeedbackBool)) { //Punkte/Zeit/Feedback Übungsphase beendet, entferne GameElemente und gehe zurück zum Select Screen
                practisePointsBool = false;
                allGameEndMaybeBackToSelect(); 
               
            }

           
            else if (checkTest() && !trackData) 
            {
                
                let startTask = document.getElementById("startTask"); //starte Task mit voller Gamification
                let startText = document.getElementById("startText");
                setTimeout(showSingle,2000,startTask);
                setTimeout(fadeIn,2000,startTask);
                setTimeout(fadeIn,2000,startText);

            }

            
           
            else if (!trackData) {  //Aufruf des Task  TODO: Hier muss ich noch was abfangen 

               setTimeout(set,1000,GameOn)}; //Heißt nicht dass Game Elemente an sind (nur Variablenbezeichnung) -> Für Übungsphase
                


}


function noGamePractiseOver() { 

                let goodJobEnableDisable = document.getElementById("goodJobEnableDisable");
                let nowWithGame = document.getElementById("nowWithGame");
                disableTest = false;
                fadeIn(goodJobEnableDisable);
                fadeIn(nowWithGame);
                showSingle(nowWithGame);
}

function allGamePractiseOver() {

                if (noGameTutEnd == 4) { //All Game Tutorial beendet, kehre zurück zu Select Game und weitere durchzuführen
                                    
                    possibleFunctions.shift(); //All Game kann aus Liste der 8 entfernt werde
                    removeGameStuff(); //enferne game elemente um dann selectWhichNext() aufzurufen wo das nächste Tutorial gestartet wird
                    return; //Funktion kann verlassen werden
                    }
                 EnableDisableGamification();//wird nur in Enable/Disbale aufgerufen
}

function noGameEndBackToSelect() {

    possibleFunctions.shift(); //No Game kann aus Liste der 8 entfernt werde
    selectWhichNext(); //nächstes Tutorial wird gestartet
    return; //Funktion kann verlassen werden
}


function allGameEndMaybeBackToSelect() {

                    if (noGameTutEnd == 4) {
                            possibleFunctions.shift(); //All Game kann aus Liste der 8 entfernt werde
                            
                            removeGameStuff(); //enferne game elemente um dann selectWhichNext() aufzurufen wo das nächste Tutorial gestartet wird
                            allGameState = false; //AllGame Tutorial ist beendet
                            return; //Funktion kann verlassen werden
                        }
                let startTask = document.getElementById("startTask"); //starte Task mit voller Gamification
                let startText = document.getElementById("startText");
                setTimeout(showSingle,2000,startTask);
                setTimeout(fadeIn,2000,startTask);
                setTimeout(fadeIn,2000,startText);
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
    // TODO 0 ist nur vorläufiger Dummy Wert, bedeutet: keine Gamification
    GameCondition = 0; // indicates the condition for later tracking -> Kann bereits in Datenbank eingetragen werden -> Neuer Eintrag wird generiert
    theRequest  ("ExperimentalCond",GameCondition.toString()); //Eintrag in Datenbak : letzte Variable 0, da die User_ID noch nicht bekannt ist (da der Eintrag jetzt erst generiert wird)
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
  
    // TODO 11 ist Dummy Wert für alles 
   if (!EnableGamificationOn)  {GameCondition = 11;} //indicates the condition for later tracking
  
    
    let okayGame = document.getElementById("okayGame");
    let taskExplainGame = document.getElementsByClassName("taskExplainGame");
    fadeInAll(taskExplainGame);
    showSingle(okayGame);
    hideArray(buttons);
    
}


/*function TestSimulation() {
    
    // Wir erzeugen hier erstmal Dummy Daten.
    GameCondition = 7;
   /* for (var i = 0; i < 140; i++) {
        writeData((i % 2) == 0, 0.400 + (i / 1000));
    }*/
  /*  Questionnaire = [
        "gender_option", "Female",
        "gender_value", null,
        "gaming_experience", "12"
    ];*/
    // Und jetzt senden wir die zum Server.
   // sendJson();
//}

/*function sendJson() {
    
    Questionnaire = [
        "gender_option", "Female",
        "gender_value", null,
        "gaming_experience", "12"
    ];

    // Sending and receiving data in JSON format using POST method
    let data_array = [];
    data_array.push("GameCondition");
    data_array.push(GameCondition);
    for (var i = 0; i < Samples.length; i++) {
        var sample = Samples[i];
        data_array.push("SampleCorrect" + i);
        data_array.push(sample[0]);
        data_array.push("SampleDuration" + i);
        var time_value = sample[1];
        // Rune auf 4 Stellen nach Komma.
        time_value  = Math.round(time_value * 10000) / 10000;
        data_array.push(time_value);
    }
    data_array = data_array.concat(Questionnaire);
    var data = JSON.stringify(data_array);

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
                alert("ging nicht, mail bitte das an jonas.wallach: " + data_array);
            }
        }
    };
    console.log("Sent");

    xhr.send(data);
}*/

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

function EnableDisableGamification() { //Entscheidung zwischen Version 1 und 2 wird eingeleitet
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

function removeGameStuff () {

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
    setTimeout(selectWhichNext,2000);
}

function SelectGamificationTut1 () { //Einleitung Select Tutorial

    let okaySelect = document.getElementById("okaySelect");      //Muss später wieder eingebunden werden, erklärt Task und Tutorial
    let taskExplainSelect = document.getElementsByClassName("taskExplainSelect");
    let GameButtons = document.getElementsByClassName("GameButtons");
    fadeOutAll(GameButtons);
    hideArray(GameButtons);
    fadeInAll(taskExplainSelect);
    showSingle(okaySelect);
}

function SelectGamificationTut2() { //startet 4. Condition mit Erklärung der Task 
    shuffle(possibleFunctions);
    hideArray(buttons);
    selectWhichNext();
  
   
}

function selectWhichNext () { //bestimmt welche select Funktion als nächstes aufgerufen wird //haha

let DecideScreen = document.getElementById("DecideScreen");
punkte = false;
zeit = false;
feedback = false;
practisePointsBool = false; //damit ich da nicht nochmal reinkomme
practiseTimeBool = false; //damit ich da nicht nochmal reinkomme
practiseFeedbackBool = false; //damit ich da nicht nochmal reinkomme
allGameState = false;


if (possibleFunctions.length == 0) {
    
    fadeIn(DecideScreen);
    partOfCond4 = false;


} 



else {partOfCond4 = true;} //solange true: gibt noch offene Tutorials für Bedingungen also muss in diese Auswahl zurückgekehrt werden

//setTimeout(selectFeedbackTimeIntro,800); //klappt
//setTimeout(selectFeedbackPointsIntro,800); //klappt
//setTimeout(selectTimePointsIntro,800); 
//setTimeout(selectFeedbackIntro(),800); //klappt
//setTimeout(selectTimeIntro(),800); //klappt
//setTimeout(selectPointsIntro(),800);// klappt
//setTimeout(selectNoIntro,800); //klappt
//setTimeout(selectAllIntro,800); //klappt
if (possibleFunctions[0] == 1) {selectNoIntro();}
if (possibleFunctions[0] == 2) {selectAllIntro();}
if (possibleFunctions[0] == 3) {selectPointsIntro();}
if (possibleFunctions[0] == 4) {selectTimeIntro();}
if (possibleFunctions[0] == 5) {selectFeedbackIntro();}
if (possibleFunctions[0] == 6) {selectTimePointsIntro();}
if (possibleFunctions[0] == 7) {selectFeedbackPointsIntro();}
if (possibleFunctions[0] == 8) {selectFeedbackTimeIntro();}



} 

function selectNoIntro () { //select ohne game elemente
    let introSelectNo = document.getElementById("selectNoIntro");
    let introSelectNoButton = document.getElementById("selectNoIntroButton");
   
    fadeIn(introSelectNo);
    fadeIn(introSelectNoButton);
    showSingle(introSelectNoButton);
   
}

function selectNoDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

    let introSelectNo = document.getElementById("selectNoIntro");
    let introSelectNoButton = document.getElementById("selectNoIntroButton");
    fadeOut(introSelectNo); //Text und Button der Intro verschwinden lassen
    fadeOut(introSelectNoButton);
    hideSingle(introSelectNoButton);
    setTimeout(selectNo,1000);
}

function selectNo () {

    
    noGameTutEnd = 4; //bestimmt, dass nach Beendigung des Tutorials ohne Game Elemente in die 4.Condition (Select) zurückgekehrt wird

    if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter
        noGameTutorialWithoutBasics = true; //Bewirkt dass NoGamification nach einmaligem Zeigen des noGame Task in die Übungsphase geht und dann wieder in die Select Auswahl
        NoGamification();
        
    }
        else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
            startTutorial();
          //  basicsExplained = true; //anzeigen dass Basics ab jetzt nicht mehr erklärt werden müssen
         }
    }


function selectAllIntro () { //select mit game elemente
    let introSelectAll = document.getElementById("selectAllIntro");
    let introSelectAllButton = document.getElementById("selectAllIntroButton");
   
    fadeIn(introSelectAll);
    fadeIn(introSelectAllButton);
    showSingle(introSelectAllButton);
   
}

function selectAllDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

    let introSelectAll = document.getElementById("selectAllIntro");
    let introSelectAllButton = document.getElementById("selectAllIntroButton");
    fadeOut(introSelectAll); //Text und Button der Intro verschwinden lassen
    fadeOut(introSelectAllButton);
    hideSingle(introSelectAllButton);
    setTimeout(selectAll,1000);
}


function selectAll () { //select mit allen drei game elementen 

            allGameState = true; //Damit ich bei checkTest nicht in die NoGame Condition komme
            noGameTutEnd = 4;
            enableTest = true;

            if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter
                nowWithGame(); 
                
            }
            else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
                startTutorialGame();
              

                }

   
    
}

function selectPointsIntro () { //select mit punkten

        let introSelectPoints = document.getElementById("selectPointsIntro");
        let introSelectPointsButton = document.getElementById("selectPointsIntroButton");
       
        fadeIn(introSelectPoints);
        fadeIn(introSelectPointsButton);
        showSingle(introSelectPointsButton);
}

function selectPointsDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

    let introSelectPoints = document.getElementById("selectPointsIntro");
    let introSelectPointsButton = document.getElementById("selectPointsIntroButton");
    fadeOut(introSelectPoints); //Text und Button der Intro verschwinden lassen
    fadeOut(introSelectPointsButton);
    hideSingle(introSelectPointsButton);
    setTimeout(selectPoints,1000);
}

function selectPoints () { 
    enableTest = true;
    practisePointsBool = true;
    noGameTutEnd = 4;
    

    if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

        nowWithGame();
       
        
    }
    else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
        
        startTutorialGame(); //hier werden alle game elemente gezeigt
      
     }

}

function selectTimeIntro () { //select mit punkten

    let introSelectTime = document.getElementById("selectTimeIntro");
    let introSelectTimeButton = document.getElementById("selectTimeIntroButton");
   
    fadeIn(introSelectTime);
    fadeIn(introSelectTimeButton);
    showSingle(introSelectTimeButton);
}

function selectTimeDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

let introSelectTime = document.getElementById("selectTimeIntro");
let introSelectTimeButton = document.getElementById("selectTimeIntroButton");
fadeOut(introSelectTime); //Text und Button der Intro verschwinden lassen
fadeOut(introSelectTimeButton);
hideSingle(introSelectTimeButton);
setTimeout(selectTime,1000);
}

function selectTime () { 

enableTest = true;
practiseTimeBool = true;
noGameTutEnd = 4;


if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

    nowWithGame();
   
    
}
else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
    
    startTutorialGame(); //hier werden alle game elemente gezeigt
  
 }

}


function selectFeedbackIntro () { //select mit punkten

    let introSelectFeedback = document.getElementById("selectFeedbackIntro");
    let introSelectFeedbackButton = document.getElementById("selectFeedbackIntroButton");
  
    fadeIn(introSelectFeedback);
    fadeIn(introSelectFeedbackButton);
    showSingle(introSelectFeedbackButton);
}

function selectFeedbackDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

        let introSelectFeedback = document.getElementById("selectFeedbackIntro");
        let introSelectFeedbackButton = document.getElementById("selectFeedbackIntroButton");
        fadeOut(introSelectFeedback); //Text und Button der Intro verschwinden lassen
        fadeOut(introSelectFeedbackButton);
        hideSingle(introSelectFeedbackButton);
        setTimeout(selectFeedback,1000);
        }

function selectFeedback () { 

        enableTest = true;
        practiseFeedbackBool = true;
        noGameTutEnd = 4;


        if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

            nowWithGame();
        
            
        }
        else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
            
            startTutorialGame(); //hier werden alle game elemente gezeigt
        
        }

}

function selectTimePointsIntro () { //select mit punkten 

    let introSelectTimePoints= document.getElementById("selectTimePointsIntro");
    let introSelectTimePointsButton = document.getElementById("selectTimePointsIntroButton");
   
    fadeIn(introSelectTimePoints);
    fadeIn(introSelectTimePointsButton);
    showSingle(introSelectTimePointsButton);
}

function selectTimePointsDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

        let introSelectTimePoints = document.getElementById("selectTimePointsIntro");
        let introSelectTimePointsButton = document.getElementById("selectTimePointsIntroButton");
        fadeOut(introSelectTimePoints); //Text und Button der Intro verschwinden lassen
        fadeOut(introSelectTimePointsButton);
        hideSingle(introSelectTimePointsButton);
        setTimeout(selectTimePoints,1000);
        }

function selectTimePoints () { 

        enableTest = true;
        practisePointsBool = true;
        practiseTimeBool = true;
        noGameTutEnd = 4;


        if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

            nowWithGame();
        
            
        }
        else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
            
            startTutorialGame(); //hier werden alle game elemente gezeigt
        
        }

}

function selectFeedbackPointsIntro () { //select mit punkten und feedback

    let introSelectFeedbackPoints= document.getElementById("selectFeedbackPointsIntro");
    let introSelectFeedbackPointsButton = document.getElementById("selectFeedbackPointsIntroButton");
    
    fadeIn(introSelectFeedbackPoints);
    fadeIn(introSelectFeedbackPointsButton);
    showSingle(introSelectFeedbackPointsButton);
}

function selectFeedbackPointsDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint

        let introSelectFeedbackPoints = document.getElementById("selectFeedbackPointsIntro");
        let introSelectFeedbackPointsButton = document.getElementById("selectFeedbackPointsIntroButton");
        fadeOut(introSelectFeedbackPoints); //Text und Button der Intro verschwinden lassen
        fadeOut(introSelectFeedbackPointsButton);
        hideSingle(introSelectFeedbackPointsButton);
        setTimeout(selectFeedbackPoints,1000);
        }

function selectFeedbackPoints () { 

        enableTest = true;
        practisePointsBool = true;
        practiseFeedbackBool = true;
        noGameTutEnd = 4;


        if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

            nowWithGame();
        
            
        }
        else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
            
            startTutorialGame(); //hier werden alle game elemente gezeigt
        
        }

}

function selectFeedbackTimeIntro () { //select mit punkten und feedback haha

    let introSelectFeedbackTime = document.getElementById("selectFeedbackTimeIntro");
    let introSelectFeedbackTimeButton = document.getElementById("selectFeedbackTimeIntroButton");
  
    fadeIn(introSelectFeedbackTime);
    fadeIn(introSelectFeedbackTimeButton);
    showSingle(introSelectFeedbackTimeButton);
}

function selectFeedbackTimeDelay () { //delay damit Kreuz nicht sofort nach Intro erscheint
        
        let introSelectFeedbackTime = document.getElementById("selectFeedbackTimeIntro");
        let introSelectFeedbackTimeButton = document.getElementById("selectFeedbackTimeIntroButton");
        fadeOut(introSelectFeedbackTime); //Text und Button der Intro verschwinden lassen
        fadeOut(introSelectFeedbackTimeButton);
        hideSingle(introSelectFeedbackTimeButton);
        setTimeout(selectFeedbackTime,1000);
        }

function selectFeedbackTime () { 

        enableTest = true;
        practiseTimeBool = true;
        practiseFeedbackBool = true;
        noGameTutEnd = 4;


        if (basicsExplained == true) { //wenn basics bereits erklärt : zeige Task einmal gefolgt von einem Übungsversuch, dann weiter

            nowWithGame();
        
            
        }
        else {  //wenn basics nicht erklärt : erkläre Basics gefolgt von einem Übungsversuch, dann weiter
            
            startTutorialGame(); //hier werden alle game elemente gezeigt
        
        }

}






function selectPointsTime () { //select mit Punkten und Zeit
    alert("pointstime");
    possibleFunctions.shift();
    selectWhichNext();
}



function selectTimeFeedback () { //select mit Zeit und Feedback
    alert("timefeedback");
    possibleFunctions.shift();
    selectWhichNext();
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
    // TODO 8 ist Dummy Wert
    GameCondition = 8; //indicates the condition for later tracking
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

function showTutorialCross () { //leitet Tutorial ohne Gamification mit Zeigen des Kreuzes ein
    let positionCross1 = document.getElementsByClassName("positionCross1");
    let afterCross1 = document.getElementById("afterCross1");
    showSingle(afterCross1); //Next Button um die Bilder anzuzeigen
    fadeInAll(positionCross1); //Text erklärt die Funktion des Kreuzes
    fadeIn(afterCross1);
  }


function afterCross1() { //erklärt Bilder im Tutorial ohne Gamificaiton 
    hideArray(hiddenCross);
    let positionCross1 = document.getElementsByClassName("positionCross1");
    let afterCross1 = document.getElementById("afterCross1");
    fadeOutAll(positionCross1);
    fadeOut(afterCross1);
    hideSingle(afterCross1);
    setTimeout(explainPictures,1000); //Zeigt Beispielbilder an
    setTimeout(showTutorialPictures,2000); //erklärt Bieispielbilder
}

function explainPictures() {
    showArray(selectPictures());
}

function showTutorialPictures() { //erklärt Beispielbilder
    let positionPicture1 = document.getElementsByClassName("positionPicture1");
    let afterPicture1 = document.getElementById("afterPicture1");
    showSingle(afterPicture1);
    fadeInAll(positionPicture1);//Text erklärt die Funktion der Beispielbilder
    fadeIn(afterPicture1); //Next Button um den Dot anzuzeigen
}

function afterPicture1() {//erklärt den Dot im Tutorial ohne Gamification
   hideArray(selectPictures());
   let positionPicture1 = document.getElementsByClassName("positionPicture1");
   let afterPicture1 = document.getElementById("afterPicture1");
   fadeOutAll(positionPicture1);
   fadeOut(afterPicture1);
   hideSingle(afterPicture1);
   setTimeout(explainDots,1000); //zeigt rechten Dot an 
   setTimeout(showTutorialDots,2000); //erklärt Dot
}

function explainDots () {
    showSingle(hiddenDot[1]);
}

function showTutorialDots() {//erklärt Dot
    
    let positionDot1 = document.getElementsByClassName("positionDot1");
    let arrowRightPic = document.getElementById("arrowRightPic");
    showArray(positionDot1); //Text erklärt Funktion des Dots
    showSingle(arrowRightPic); //Animation fordert zum Tastendruck auf
    fadeInAll(positionDot1); 
    fadeIn(arrowRightPic);
    scaleIt(arrowRightPic); //bewirkt Animation
    window.addEventListener("keydown",checkKeyPressForRightTutorial1,false); //warte auf Druck der rechten Pfeiltaste, hier gehts danach weiter
    start(); //starte Zeitmessung
}





function checkKeyPressForRightTutorial1(key) { //Hier komme ich IMMER rein wenn der Tastendruck für das Tutorial erfolgt (marker)

    

  
            if (key.keyCode == '39' && enableTest) {   
               
                stop();
                if (enableTest) {enableTest = false;}
                window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
                let positionDot1 = document.getElementsByClassName("positionDot1");
                let arrowRightPic = document.getElementById("arrowRightPic");
                let newTimeRecord = document.getElementById("TimeTutorial");
                let plusZehn = document.getElementById("plus10Tutorial");
                let afterExplainConfetti = document.getElementById("afterExplainConfetti");
                let afterGetPoints = document.getElementById("realAfterGetPoints");
                let afterExplainBar = document.getElementById("afterExplainBar");
                let dotStand = document.getElementById("DotsStand");
                let vidPlusShort = document.getElementById("plusAnimShort");
                let positionConfetti = document.getElementsByClassName("positionConfetti");
                let TimeTutorial = document.getElementById("TimeTutorial");
                let positionRecord1 = document.getElementsByClassName("positionRecord1");
                 
                
                if (basicsExplained == false) { //Pfeiltasten Animation wird nur abgespielt wenn die Basics noch nicht erklärt wurden
                    fadeOutAll(positionDot1);
                    fadeOut(arrowRightPic)
                    basicsExplained = true;
                    }; 

                hideSingle(hiddenDot[1]);

                 if (noSelectives()) { //Für den Fall dass es kein selektives Tutorial ist (weder Punkte noch Zeit noch Feedback)
                        addScore(10);
                        setTimeout(showSingle,1300,plusZehn);
                        TenMove(true);
                        addGreenBar();
                        goRecord();
                        playVideo(vidPlusShort);
                        setTimeout(showSingle,1950,dotStand);
                        setTimeout(hideSingle,2000,vidPlusShort);
                        setTimeout(showSingle,1300,newTimeRecord);
                        setTimeout(fadeInAll,2000,positionConfetti);
                        dotStand.style.borderStyle = "solid";
                        setTimeout(fadeIn,2000,afterExplainConfetti);
                        showSingle(afterExplainConfetti);
                        return;
                    } //lässt Konfetti Erklärung verschwinden und geht Tutorial weiter durch

               
               if (practisePointsBool == true && practiseTimeBool == true) {

                    let positionPlusZehn1 = document.getElementsByClassName("positionPlusZehn1");
                    let plus10Tutorial = document.getElementById("plus10Tutorial");
                    addScore(10);
                    setTimeout(showSingle,1300,plusZehn);
                    TenMove(true);
                    addGreenBar();
                    goRecord();
                    setTimeout(showSingle,1300,newTimeRecord);
                    setTimeout(fadeInAll,2000,positionPlusZehn1);
                    plus10Tutorial.style.borderStyle = "solid";
                    setTimeout(fadeIn,2000,afterGetPoints);
                    showSingle(afterGetPoints); //lässt Punkte Erklärung verschwinden und geht Tutorial weiter durch


                
                return;
               } 


               if (practisePointsBool == true && practiseFeedbackBool == true) {

                addScore(10);
                setTimeout(showSingle,1300,plusZehn);
                TenMove(true);
                addGreenBar();
                playVideo(vidPlusShort);
                setTimeout(showSingle,1950,dotStand);
                setTimeout(hideSingle,2000,vidPlusShort);
                setTimeout(fadeInAll,2000,positionConfetti);
                dotStand.style.borderStyle = "solid";
                setTimeout(fadeIn,2000,afterExplainConfetti);
                showSingle(afterExplainConfetti);
                
                return;
               }

               if (practiseTimeBool == true && practiseFeedbackBool == true) {
                
                goRecord();
                setTimeout(showSingle,1300,newTimeRecord);
                playVideo(vidPlusShort);
                setTimeout(showSingle,1950,dotStand);
                setTimeout(hideSingle,2000,vidPlusShort);
                setTimeout(fadeInAll,2000,positionConfetti);
                dotStand.style.borderStyle = "solid";
                setTimeout(fadeIn,2000,afterExplainConfetti);
                showSingle(afterExplainConfetti);
                return;

               }


               if (practisePointsBool == true) { //selektives Punkte Tutorial : überspringt Konfetti Erklärung und startet sofort mit Punkte Erklärung

                    addScore(10);
                    setTimeout(showSingle,1300,plusZehn);
                    TenMove(true);
                    addGreenBar();
                    let positionPlusZehn1 = document.getElementsByClassName("positionPlusZehn1");
                    let plus10Tutorial = document.getElementById("plus10Tutorial");
                    setTimeout(fadeInAll,2000,positionPlusZehn1);
                    plus10Tutorial.style.borderStyle = "solid";
                    setTimeout(fadeIn,2000,afterGetPoints);
                    showSingle(afterGetPoints); //lässt Punkte Erklärung verschwinden und geht Tutorial weiter durch
                    return;
                    
                 }

               if (practiseTimeBool == true) {

                    goRecord();
                    setTimeout(showSingle,1300,newTimeRecord);
                    setTimeout(fadeInAll,2000,positionRecord1);
                    TimeTutorial.style.borderStyle = "solid";
                    setTimeout(fadeIn,2000,afterExplainBar);
                    showSingle(afterExplainBar); //lässt Punkte Erklärung verschwinden und geht Tutorial weiter durch
                    return;
                    

               }

               if (practiseFeedbackBool == true) {

                

                    playVideo(vidPlusShort);
                    setTimeout(showSingle,1950,dotStand);
                    setTimeout(hideSingle,2000,vidPlusShort);
                    setTimeout(fadeInAll,2000,positionConfetti);
                    dotStand.style.borderStyle = "solid";
                    setTimeout(fadeIn,2000,afterExplainConfetti);
                    showSingle(afterExplainConfetti);
                    return;

                }
                
            }

            else if (key.keyCode =="39" && (enableTest == false)) {
                
                stop();
                window.removeEventListener("keydown",checkKeyPressForRightTutorial1,false);
                let positionDot1 = document.getElementsByClassName("positionDot1");
                let arrowRightPic = document.getElementById("arrowRightPic");
                let practise1 = document.getElementById("practise1");
                let goodJob = document.getElementById ("goodJob");
                
                addScore(10);
                addGreenBar();
                if (basicsExplained == false) {
                    fadeOutAll(positionDot1);
                    fadeOut(arrowRightPic);
                    basicsExplained = true; //Basics wurden erklärt
                    

                }
                noGameTutorialWithoutBasics = false; //noGame Tutorial ohne Baiscs wurde gezeigt, durch false setzen lande ich in der Testphase nicht wieder hier
                hideSingle(hiddenDot[1]);

                showSingle(practise1);
                fadeIn(practise1); //Button um Übungsphase ohne Gamification zu starten
                fadeIn(goodJob); 

                    
                }

}






function practise1 () { //Übungsphase ohne Gamification
    
    let practise1 = document.getElementById("practise1");
    let goodJob = document.getElementById ("goodJob");
   
    hideSingle(practise1);
    fadeOut(practise1);
    fadeOut(goodJob);
    test = true; //zeigt dass die Übungsphase läuft
    NoGamification(); //startet Test (basierend auf Anzeige der Übungsphase um rechtzeitig zu stoppen)
}

//TUTORIAL MIT GAMIFICATION

function okayGame() {
    enableTest = true;
    let introductionTutorialGame = document.getElementsByClassName("introductionTutorialGame"); 
    let taskExplainGame = document.getElementsByClassName("taskExplainGame");
    let okayGame = document.getElementById("okayGame");
    let startTutorialGame = document.getElementById("startTutorialGame");
    hideSingle(okayGame);
    showSingle(startTutorialGame); //Button um Tutorial zu starten
    fadeInAll(introductionTutorialGame); //erklärt Tutorial mit Game Elementen
    fadeOutAll(taskExplainGame); //lässt Beschreibung des Task verschwinden
}

function noSelectives () {
    if ((practiseFeedbackBool==false) && (practisePointsBool==false) && (practiseTimeBool==false)) {return true;}
    else {return false;}
}

function startTutorialGame () {
    
    let goodJobSelect = document.getElementById ("goodJobSelect");
    let tutorialButtonsGame = document.getElementsByClassName("introductionTutorialGame");
    resetScore();
    resetTime();

    if (noGameTutEnd != 4) { //Nicht Teil der 4.Condition also muss der vorherige Erklärungstext ausgeblendet werden
        hideSingle(goodJobSelect);
        fadeOut(goodJobSelect);
    }
    
    hideArray(tutorialButtonsGame);
    setTimeout(explainCross,1000);  
    setTimeout(showTutorialCross,2000);

    if (practisePointsBool == true || noSelectives()) { //Punkteelemente nur anzeigen wenn Punkte geübt werden oder generell Game
            showSingle(bar);
            showSingle(barGreen);
            showArray(barIndicate);
            showArray(points);
            showSingle(thePoints);
    }
    if (practiseTimeBool == true || noSelectives()) {showSingle(theTime)}; //Zeitelemente nicht anzeigen wenn in der 4.Condition Punkte demonstriert werden

}

function afterExplainConfetti () { //erklärt das Konfetti

     let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
     let positionConfetti = document.getElementsByClassName("positionConfetti");
     let dotStand = document.getElementById("DotsStand");
     let plus10Tutorial = document.getElementById("plus10Tutorial");
     let afterExplainConfetti = document.getElementById("afterExplainConfetti");
     let realAfterGetPoints = document.getElementById("realAfterGetPoints");
     let practiseFeedbackPhase = document.getElementById("practiseFeedbackPhase");
     let nowPractisePoints = document.getElementById("nowPractisePoints");
     let positionRecord1 = document.getElementsByClassName("positionRecord1");
     let afterExplainBar = document.getElementById("afterExplainBar");
     let TimeTutorial = document.getElementById("TimeTutorial");

     if (practiseFeedbackBool && !practisePointsBool && !practiseTimeBool) { //wenn wir in der Punkte Erklärung der 4.Condition sind, endet das Tutorial hier
    
        
        dotStand.style.borderStyle = "none";
        hideSingle(dotStand);
        fadeOutAll(positionConfetti);
        fadeOut(afterExplainConfetti);
        hideSingle(afterExplainConfetti);
        fadeIn(nowPractisePoints);
        fadeIn(practiseFeedbackPhase);
        showSingle(practiseFeedbackPhase); //Übungsphase für Punkte
        return;
       
    }

    if (practiseFeedbackBool && practiseTimeBool) {

        fadeOutAll(positionConfetti);
        fadeOut(afterExplainConfetti);
        hideSingle(afterExplainConfetti);
        dotStand.style.borderStyle = "none";
        TimeTutorial.style.borderStyle = "solid";
        fadeInAll(positionRecord1);
        fadeIn(afterExplainBar);
        showSingle(afterExplainBar);
        return;
    }

 
        fadeOutAll(positionConfetti);
        fadeOut(afterExplainConfetti);
        hideSingle(afterExplainConfetti);
        dotStand.style.borderStyle = "none";
        plus10Tutorial.style.borderStyle = "solid";
        fadeInAll(plusZehnPosition);
        fadeIn(realAfterGetPoints);
        showSingle(realAfterGetPoints);
  
    
}

function afterGetPoints () { //erklärt die plus 10 

    let plusZehnPosition = document.getElementsByClassName("positionPlusZehn1");
    let realAfterGetPoints = document.getElementById("realAfterGetPoints");
    let positionScore1 = document.getElementsByClassName ("positionScore1");
    let scoreWidth = document.getElementById("scores");
    let afterExplainPoints = document.getElementById ("afterExplainPoints")
    let scores = document.getElementById("scores");
    let plus10Tutorial = document.getElementById("plus10Tutorial");
    
    fadeOutAll(plusZehnPosition);
    fadeOut(realAfterGetPoints);
    hideSingle(realAfterGetPoints);
    plus10Tutorial.style.borderStyle = "none";
    scores.style.borderStyle = "solid";
    fadeInAll(positionScore1);
    scoreWidth.style.borderWidth = 3;
    fadeIn(afterExplainPoints);
    showSingle(afterExplainPoints);
    

}

function afterExplainPoints () {
    
    let afterExplainPoints = document.getElementById("afterExplainPoints");
    let afterExplainScore = document.getElementById("afterExplainScore");
    let positionScore1 = document.getElementsByClassName ("positionScore1");
    let positionBar1 = document.getElementsByClassName ("positionBar1");
    let barBox = document.getElementById("barBox");
    let scores = document.getElementById("scores");
   
    scores.style.borderStyle = "none";
    fadeOutAll(positionScore1);
    fadeOut(afterExplainPoints);
    hideSingle(afterExplainPoints);
    barBox.style.borderStyle = "solid";
    fadeInAll(positionBar1);
    showSingle(barBox);
    fadeIn(afterExplainScore);
    showSingle(afterExplainScore);

}

function afterExplainScore () {
    
    if (practisePointsBool && !practiseTimeBool && !practiseFeedbackBool) { //wenn wir in der Punkte Erklärung der 4.Condition sind, endet das Tutorial hier
        let plusZehn = document.getElementById("plus10Tutorial");
        let positionBar1 = document.getElementsByClassName("positionBar1");
        let afterExplainScore = document.getElementById("afterExplainScore");
        let nowPractisePoints = document.getElementById("nowPractisePoints");
        let practisePointsPhase = document.getElementById("practisePointsPhase");
        let dotStand = document.getElementById("DotsStand");
        let barBox = document.getElementById("barBox");
        barBox.style.borderStyle = "none";
        hideSingle(dotStand);
        hideSingle(plusZehn);
        fadeOutAll(positionBar1);
        fadeOut(afterExplainScore);
        hideSingle(afterExplainScore);
        fadeIn(nowPractisePoints);
        fadeIn(practisePointsPhase);
        showSingle(practisePointsPhase); //Übungsphase für Punkte maybe
       
    }
    else if (practiseTimeBool && !practisePointsBool && !practiseFeedbackBool) { 
        let positionRecord1 = document.getElementsByClassName("positionRecord1");
        let afterExplainScore = document.getElementById("afterExplainScore");
        fadeOutAll(positionRecord1);
        fadeOut(afterExplainScore);
        hideSingle(afterExplainScore);
        setTimeout(afterExplainBar,500);
       
        
    }

    else if (practisePointsBool && practiseFeedbackBool) { //Tutorial für Punkte und Feedback 
 
        let afterExplainScore = document.getElementById("afterExplainScore");
        let practiseFeedbackPointsPhase = document.getElementById("practiseFeedbackPointsPhase");
        let nowPractisePoints = document.getElementById ("nowPractisePoints");
        let plusZehn = document.getElementById("plus10Tutorial");
        let positionBar1 = document.getElementsByClassName ("positionBar1");
        let scores2 = document.getElementById("scores2");
        let barBox = document.getElementById("barBox");
        barBox.style.borderStyle = "none";
        let dotStand = document.getElementById("DotsStand");
    
        
    
        scores2.style.borderStyle = "none";
        fadeIn(nowPractisePoints);
        fadeIn(practiseFeedbackPointsPhase);
        showSingle(practiseFeedbackPointsPhase);
        hideSingle(plusZehn);
        fadeOutAll(positionBar1);
        fadeOut(afterExplainScore);
        hideSingle(afterExplainScore);
        hideSingle(dotStand);

    }
    
    else
    {
    
    let afterExplainBar = document.getElementById("afterExplainBar");
    let afterExplainScore = document.getElementById("afterExplainScore");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let positionBar1 = document.getElementsByClassName ("positionBar1");
    let barBox = document.getElementById("barBox");
    let timeTutorial = document.getElementById("TimeTutorial");
    barBox.style.borderStyle = "none";
    timeTutorial.style.borderStyle = "solid";
    hideSingle(barBox);
    fadeOutAll(positionBar1);
    fadeOut(afterExplainScore);
   
    hideSingle(afterExplainScore);
    fadeInAll(positionRecord1);
    fadeIn(afterExplainBar);
    showSingle(afterExplainBar);
    }
}

function afterExplainBar () {

if (practiseTimeBool && !practisePointsBool && !practiseFeedbackBool) {
    let afterExplainBar = document.getElementById ("afterExplainBar");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let TimeTutorial = document.getElementById("TimeTutorial");
    let scores2 = document.getElementById("scores2");
    
    fadeOut(afterExplainBar);
    hideSingle(afterExplainBar);
    TimeTutorial.style.borderStyle = "none";
    scores2.style.borderStyle = "solid";
    fadeOutAll(positionRecord1); 
    fadeInAll(positionTime1);
    fadeIn(afterExplainRecord);
    showSingle(afterExplainRecord);

    
}
else {
    let afterExplainBar = document.getElementById("afterExplainBar");
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let positionRecord1 = document.getElementsByClassName ("positionRecord1");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    let scores2 = document.getElementById("scores2");
    let timeTutorial = document.getElementById("TimeTutorial");
    
    fadeOutAll(positionRecord1);
    timeTutorial.style.borderStyle = "none";
    scores2.style.borderStyle = "solid";
    fadeOut(afterExplainBar);
    hideSingle(afterExplainBar);
    fadeInAll(positionTime1);
    fadeIn(afterExplainRecord);
    showSingle(afterExplainRecord);
    }
}

function afterExplainRecord () {

    if (practiseTimeBool && !practisePointsBool && !practiseFeedbackBool) { //Abfangen wenn es das exklusive Zeit Tutorial ist

        let newTimeRecord = document.getElementById("TimeTutorial");
        let positionTime1 = document.getElementsByClassName("positionTime1");
        let afterExplainRecord = document.getElementById("afterExplainRecord");
        let nowPractisePoints = document.getElementById("nowPractisePoints");
        let practiseTimePhase = document.getElementById("practiseTimePhase");
        let scores2 = document.getElementById("scores2");

        scores2.style.borderStyle = "none";
        fadeOutAll(positionTime1);
        hideSingle(newTimeRecord);
        fadeOut(afterExplainRecord);
        hideSingle(afterExplainRecord);
        fadeIn(nowPractisePoints);
        fadeIn(practiseTimePhase);
        showSingle(practiseTimePhase);


    }
else if (practiseTimeBool && practisePointsBool) { //hier

    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let practiseTimePointsPhase = document.getElementById("practiseTimePointsPhase");
    let nowPractisePoints = document.getElementById ("nowPractisePoints");
    let newTimeRecord = document.getElementById("TimeTutorial");
    let plusZehn = document.getElementById("plus10Tutorial");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    let scores2 = document.getElementById("scores2");
    
    

    scores2.style.borderStyle = "none";
    
    
    fadeIn(nowPractisePoints);
    fadeIn(practiseTimePointsPhase);
    showSingle(practiseTimePointsPhase);
    hideSingle(newTimeRecord);
    hideSingle(plusZehn);
    fadeOutAll(positionTime1);
    fadeOut(afterExplainRecord);
    hideSingle(afterExplainRecord);
}

else if (practiseTimeBool && practiseFeedbackBool) { //oho
    
    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let practiseFeedbackTimePhase = document.getElementById("practiseFeedbackTimePhase");
    let newTimeRecord = document.getElementById("TimeTutorial");
    let scores2 = document.getElementById("scores2");
    let dotStand = document.getElementById("DotsStand");
    scores2.style.borderStyle = "none";
    let positionTime1 = document.getElementsByClassName("positionTime1");
    let nowPractisePoints = document.getElementById("nowPractisePoints");

    hideSingle(dotStand);
    hideSingle(newTimeRecord);
    fadeIn(practiseFeedbackTimePhase);
    showSingle(practiseFeedbackTimePhase);
    fadeOut(afterExplainRecord);
    hideSingle(afterExplainRecord);
    fadeOutAll(positionTime1);
    fadeIn(nowPractisePoints);


}


else {

    let afterExplainRecord = document.getElementById("afterExplainRecord");
    let positionTime1 = document.getElementsByClassName ("positionTime1");
    
    let nowPractise = document.getElementById ("nowPractise");
    let practise2 = document.getElementById ("practise2");
    let newTimeRecord = document.getElementById("TimeTutorial");
    let plusZehn = document.getElementById("plus10Tutorial");
    let dotStand = document.getElementById("DotsStand");
    let scores2 = document.getElementById("scores2");
    
    

    scores2.style.borderStyle = "none";
    
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

function nowWithGame() { //leitet zum Gamification Tutorial ohne Basics hin (oder Punkte/Zeit/Feedback Tutorial ohne Basics)
   
                resetScore();
                purScore = 0;
                resetTime();
                resetGreenBar();
                let goodJobEnableDisable = document.getElementById("goodJobEnableDisable");
                let nowWithGame = document.getElementById("nowWithGame");
                if (!allGameState && noSelectives()) { //Muss nicht verschwinden wenn ich aus Cond. 4 komme, da es da nicht auf diese Weise eingeleitet wurde
        
                        fadeOut(goodJobEnableDisable);
                        fadeOut(nowWithGame);
                        hideSingle(nowWithGame);
                }
                enableTest = true; //würde nach Tutorial zum EnableDisable Entscheidungsscreen weiterleiten, kann aber durch 4.Condition zuvor abgefangen werden
                enableDisableEndTest = true;
                countTest = 0;

                if (noSelectives()) { // Wenn es kein selektives Tutorial ist zeige ich alles

                    showSingle(theTime); 
                    showSingle(bar);
                    showSingle(barGreen);
                    showArray(barIndicate);
                    showArray(points);
                    showSingle(thePoints);
                    
                    
                }

                if (practisePointsBool == true) { //Wenn die Funktion als Punktetutorial ohne Basics genutzt wird, bleibt die Zeitanzeige weg
                    showSingle(bar);
                    showSingle(barGreen);
                    showArray(barIndicate);
                    showArray(points);
                    showSingle(thePoints);
                }

                if (practiseTimeBool == true) { //Wenn die Funktion als Zeittutorial genutzt wird, erscheint nur die Zeitanzeige
                    showSingle(theTime); 
                }

                
                
                setTimeout(showFirst,1300,hiddenCross,1500);
}


//START TUTORIAL MIT SELEKTION

function okaySelect () {//Erklärt Tutorial für 4.Condition
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



function startTutorialSelect() {//Startet Tutorial in 4.Condition für Variante ohne Game Elemente

    let tutorialButtonsSelect = document.getElementsByClassName("introductionTutorialSelect");
    hideArray(tutorialButtonsSelect);
    SelectGamificationTut2();
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
    //practisePointsBool = false; Das mach ich später
    set(false);
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
    selectionTest = true;
    set(false);
}

function practiseFeedbackPhase () {
    
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practiseFeedbackPhase = document.getElementById("practiseFeedbackPhase");
    fadeOut(nowPractisePoints);
    fadeOut(practiseFeedbackPhase);
    hideSingle(practiseFeedbackPhase);
   
    zeit = false;
    punkte = false;
    feedback = true;
    feedbackExplained = true;
    selectionTest = true;
    set(false);
}

function practiseTimePointsPhase () {
    
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practiseTimePointsPhase = document.getElementById("practiseTimePointsPhase");
    fadeOut(nowPractisePoints);
    fadeOut(practiseTimePointsPhase);
    hideSingle(practiseTimePointsPhase);
    
    zeit = true;
    punkte = true;
    feedback = false;
    pointsExplained = true;
    timeExplained = true;
    selectionTest = true;
    set(false);
}

function practiseFeedbackPointsPhase () { 
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practiseFeedbackPointsPhase = document.getElementById("practiseFeedbackPointsPhase");
    fadeOut(nowPractisePoints);
    fadeOut(practiseFeedbackPointsPhase);
    hideSingle(practiseFeedbackPointsPhase);
    
    zeit = false;
    punkte = true;
    feedback = true;
    pointsExplained = true;
    feedbackExplained = true;
    selectionTest = true;
    set(false);
}

function practiseFeedbackTimePhase () { 
    
    let nowPractisePoints = document.getElementById("nowPractisePoints");
    let practiseFeedbackTimePhase = document.getElementById("practiseFeedbackTimePhase");
    fadeOut(nowPractisePoints);
    fadeOut(practiseFeedbackTimePhase);
    hideSingle(practiseFeedbackTimePhase);
   
    zeit = true;
    punkte = false;
    feedback = true;
    timeExplained = true;
    feedbackExplained = true;
    selectionTest = true;
    set(false);
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






//////// LEGAL INFORMATION ///////////


var modalLegal = document.getElementById("myModal");

// Get the button that opens the modal
var btnLegal = document.getElementById("legalInformation");

// Get the <span> element that closes the modal
var spanLegal = document.getElementsByClassName("closeLegal")[0];


// When the user clicks on the button, open the modal
btnLegal.onclick = function() {
  modalLegal.style.display = "block";

  
}

// When the user clicks on <span> (x), close the modal
spanLegal.onclick = function() {
  modalLegal.style.display = "none";
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLegal) {
    modalLegal.style.display = "none";
    
   
  }

  else if (event.target == modalProtect) {
    modalProtect.style.display = "none";
 }
}

///////////// DATA PROTECTION ////////////

var modalProtect = document.getElementById("yourModal");

// Get the button that opens the modal
var btnProtect = document.getElementById("dataInformation");

// Get the <span> element that closes the modal
var spanProtect = document.getElementsByClassName("closeProtect")[0];


// When the user clicks on the button, open the modal
btnProtect.onclick = function() {
  modalProtect.style.display = "block";

  
}

// When the user clicks on <span> (x), close the modal
spanProtect.onclick = function() {
  modalProtect.style.display = "none";
  
}

function toQuestionnaire() {
    window.location ="http://mydotprobetask.de/questionnaire.html";
}


function set (bool) {
    
       GameOn = bool; //bestimmt ob Task mit oder ohne Game Elemente durchgefürt wird
       setTimeout(showFirst,1300,hiddenCross,1500); //erste Zahl: wielang warten bis start zweite Zahl: wielang anzeigen
       
    }



//718043062047-ffg37pio0fcrpcpjukg7artrf4vj9ass.apps.googleusercontent.com :CLIENT ID

//AIzaSyBfz67Qoq8tPbNnuOKNs2Fm90c8bCh0ndY :API KEY

//1J-uhJHFRqqYK5Z8uMD4JBm9YJE881eEcTgUsoh9iDvw :SPREADSHEET ID 


