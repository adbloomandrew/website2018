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

// $to = "andrew@adbloom.com";
$to = "gulkobox@gmail.com";

$subject = "New message from $name";
$content = "You have received a new message from http://www.adbloom.com learn more form.\n\n Name: $name \n\n Email: $email \n\n URL: $url \n\n Company: $company \n\n Message: \n\n $message";

if(mail($to, $subject, $content)){
    return true;
}
else{
    return false;
}
?>
