<?php
 session_start();

 
include_once 'connect.php';


$data['col'] = $_POST['col'];
$column = str_replace('"', "", json_encode($data['col']));





if (!isset($_SESSION['user_id'])) { 


if ($link->connect_error) { echo "error";}


    //prepare and bind
    $stmt = $link->prepare("INSERT INTO DotDatabase ($column) VALUES (?)");
    $stmt->bind_param("s", $value);
    //set parameters and execute
    $data['val'] = $_POST['val'];
    $value = ($data['val']); 
    echo $value;
    $stmt->execute();
    $last_id = $link->insert_id;
    $_SESSION['user_id'] = $last_id; 
    $stmt->close();
    $link->close();

}

else {
   
  if ($link->connect_error) { echo "error";}
  //  $newColumn = str_replace("'", "", $column);
    //prepare and bind
    $stmt = $link->prepare("UPDATE DotDatabase SET  $column = ?  WHERE User_ID = ?");
    $stmt->bind_param('si', $value, $newUser_ID);
    //set parameters and execute
    $theUserId = $_SESSION['user_id'];
    $newUser_ID = str_replace("'", "", $theUserId);
    $data['val'] = $_POST['val'];
    $value = ($data['val']); 
    $stmt->execute();
    
   
   
}
?>

