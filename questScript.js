let questAnswers = [];
let questTitle = ["Gender","Age","Ethnicity","Enjoyed","Fun","Boring","Attention","Interesting","MissedChoice"];
let currentAnswer;
let theCurrentAnswer;
let userId = localStorage.getItem("User_ID");


function testPhpReal2 (tupel) {

    
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

  xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) //wird zu true ausgewertet wenn der Kontakt zum Server erfolgreich hergestellt wurde
  {
  
      
  }
  }

  
  xmlhttp.open("POST", "insertData.php", true);   //Aufruf des php script
  xmlhttp.send(tupel); //sende Daten die in die Datenban eingetragen werden sollen 
  
 // testPhpReal("Correct01 1 1"+initalCondition);
  
}


function proceedRadio (name,spaltenbezeichung) {
  
    
   /////RADIO BUTTONS AUSWERTEN//////
   var radios = document.getElementsByName(name);

  
   for (var i = 0, length = radios.length; i < length; i++) {
   if (radios[i].checked) {
     // do whatever you want with the checked radio
    // questAnswers.push(radios[i].value);
    currentAnswer = radios[i].value;
    
   
     // only one radio can be logically checked, don't check the rest
     break;
   }

   
 

}

testPhpReal2(spaltenbezeichung+" '"+currentAnswer+"'"+" 1 "+userId); //trägt CorrectValue ein
  

}


function afterDemo () {
   
    let demoStuff = document.getElementsByClassName("demoStuff");
    let imiStuff = document.getElementsByClassName("imiStuff");

    proceedRadio('gender',"Gender");
    proceedRadio('age',"Age");
    proceedRadio('ethA',"Ethnicity");
   
   
  
    hideArray(demoStuff);
    showArray(imiStuff);
    window.scrollTo(0, 0);
}


function afterImi () {
    
    let imiStuff = document.getElementsByClassName("imiStuff");
    let openStuff = document.getElementsByClassName("openStuff");


  //  proceedRadio('enjoyed');
  //  proceedRadio('fun');
 //  proceedRadio('boring')
 //   proceedRadio('attention');
 //   proceedRadio('interesting');
   
   
    hideArray(imiStuff);
    showArray(openStuff);
    window.scrollTo(0, 0);
}


function afterOpen () {
    
    let openStuff = document.getElementsByClassName("openStuff");
    let end = document.getElementsByClassName("end");

    var textarea = document.getElementById('text1');
    questAnswers.push(textarea.value);
    

    showArray(end);
    hideArray(openStuff);
    window.scrollTo(0, 0);


  }

   ///ALLE DATEN ZUM SERVER SCHICKEN///




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

function showSingle(x) {
    x.style.display = "block";
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






