<?php  //Start the Session
session_start();
include_once("connect.php"); // call 'connect.php' for one time
if (isset($_POST['username']) and isset($_POST['password'])){ //isset = for check 'null'
//3.1.1 Assigning posted values to variables.
$username = $_POST['username'];
$password = $_POST['password'];
//3.1.2 Checking the values are existing in the database or not
$query = "SELECT * FROM `member` WHERE username='".$username."' and password='".$password."'";
 
$result = mysqli_query($conn,$query) or die(mysqli_error($conn));
$count = mysqli_num_rows($result);
//3.1.2 If the posted values are equal to the database values, then session will be created for the user.
if ($count == 1){
$_SESSION['username'] = $username;
}else{
//3.1.3 If the login credentials doesn't match, he will be shown with an error message.
echo "Invalid Login Credentials.";
}
}
//3.1.4 if the user is logged in Greets the user with message
if (isset($_SESSION['username'])){
	header('Location: read.php');
}else{

}
?>