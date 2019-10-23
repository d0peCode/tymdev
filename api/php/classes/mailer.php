<?php

require_once '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

class Mailer {
    public function sendMail($clientMail, $phone, $message) {
        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = 'html';
        $mail->Host = 'ncg.home.pl';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->CharSet = 'UTF-8';
        $mail->SMTPAuth = true;
        $mail->Subject = 'Nowa wiadomość ze strony tymdev.pl!';
        $mail->msgHTML(
            'email klienta: ' . $clientMail . '<br>' .
            'numer telefonu klienta:' . $phone . '<br>' .
            'wiadomość od klienta:' . $message
        );

        try {
            $mail->send();
            return true;
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
        return false;
    }
}