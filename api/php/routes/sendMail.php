<?php

header("Access-Control-Allow-Headers: Origin,Content-Type,Accept,Authorization");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    die();
}

if(
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['message']) && !empty($_POST['message'])
) {
    include_once('../classes/mailer.php');

    if(!isset($_POST['phone']) || empty($_POST['phone'])) {
        $phone = 'Nie podano.';
    } else {
        $phone = $_POST['phone'];
    }

    $mailer = new Mailer();
    $mailer->sendMail($_POST['email'], $phone, $_POST['message']);
}