<?php

 //Check for empty fields
if(empty($_POST['name'])     ||
   empty($_POST['email'])    ||
   empty($_POST['url'])      ||
   empty($_POST['company'])  ||
   empty($_POST['message'])  ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
    return false;
   }

$name = $_POST['name'];
$email = $_POST['email'];
$url = $_POST['url'];
$company = $_POST['company'];
$message = $_POST['message'];

// Create the email and send the message

//change this mail address
$to = "serj.hulko@gmail.com";

$email_subject = "Learn more form:  $name";
$email_body = "You have received a new message from http://www.adbloom.com learn more form.\n\n Name: $name \n\n Email: $email \n\n URL: $url \n\n Company: $company \n\n Message: \n\n $message";
$headers = "From: $email\n";

debug_to_console($email_body);

if(mail($to, $email_subject, $email_body, $headers)){
    return true;
}
else{
    return false;
}
?>
