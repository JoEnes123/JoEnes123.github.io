

<?php
session_start();



include_once 'connect.php';
$data = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') 
{

    $data = file_get_contents("php://input");  //receive data in HTTP request from javascript command
    $teile = explode(" ", $data); 
  
    $theCondition = array_shift($teile);
    $theValue = array_shift($teile);
   

    $updateOrNew = array_shift($teile);
    $user_ID = array_shift($teile);


   if ($updateOrNew == 0) {
      $sql = "INSERT INTO DotDatabase ($theCondition) VALUES ($theValue)";
      mysqli_query($link,$sql);
      $last_id = $link->insert_id;
      //$_SESSION['user_ID'] = $last_id;  //Sichert die Id des Users im Session Speicher -> am besten nach Studie alle Session Variablen löschen
    //  $user_ID_Session = $_SESSION['user_ID'];
     
     // $newLast_id = str_replace('"', "'", $last_id);   
      echo $last_id;
     //echo $user_ID_Session;
      
   }
      
    else {
     // echo $user_ID_Session;
      $newUser_ID = str_replace("'", "", $user_ID);
      $newCondition = str_replace("'", "", $theCondition);
      $sql = "UPDATE DotDatabase SET  $newCondition = $theValue  WHERE User_ID = $newUser_ID";
      mysqli_query($link,$sql);
      
    }

  }




   

?>