<?php

$name = $_POST['name'];
$email = $_POST['email'];
$url = $_POST['url'];
$company = $_POST['company'];
$message = $_POST['message'];

// Create the email and send the message

$to = "andrew@adbloom.com";

$subject = "New message from $name";
$content = "You have received a new message from http://www.adbloom.com learn more form.\n\n Name: $name \n\n Email: $email \n\n URL: $url \n\n Company: $company \n\n Message: \n\n $message";

if(mail($to, $subject, $content)){
    return true;
}
else{
    return false;
}
?>
