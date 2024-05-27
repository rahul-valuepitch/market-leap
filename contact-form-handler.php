<?php
require_once('mailer/class.phpmailer.php');
include('mailer/class.smtp.php');

$mail1 = new PHPMailer(true);
$mail1->IsSMTP();

try {
    $mail1->SMTPDebug = 0;
    $mail1->Host = 'smtp.gmail.com';
    $mail1->SMTPAuth = true;
    $mail1->Username = 'rahul.yadav@valuepitch.com';
    $mail1->Password = "Admin123";
    $mail1->SMTPSecure = 'ssl';
    $mail1->Port = 465;

    $mail1->setFrom('rahul.yadav@valuepitch.com', 'Enquiry from Market Leap');
    $mail1->addAddress('rahul.yadav@valuepitch.com', 'Enquiry from Market Leap');

    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $service = trim($_POST['service']);
    $message = trim($_POST['message']);

    $mail1->isHTML(true);

    $mail1->AddBCC("");


    $mail1->Subject = 'Market Leap Contact Form';
    $message_data   = "Enquiry By: " . $name .
        "<br> <html>
  	<head>
  	<style>
  	table,td{
  		border:1px solid #ccc;
  		border-collapse: collapse;
     color:#222;
  	}
  	td{
  		padding:8px;
  		font-size:15px;
  	}
  	</style>
  	</head>
  	<body>
  	<table>
  	<tr>
        <td>Name:</td>
        <td>" . $name . "</td>
    </tr>
    <tr>
        <td>Phone Number:</td>
        <td>" . $phone . "</td>
    </tr>
  	<tr>
        <td>Email Id. :</td>
        <td>" . $email . "</td>
    </tr>
  	<tr>
        <td>Service:</td>
        <td>" . $service . "</td>
    </tr>
    <tr>
        <td>Message:</td>
        <td>" . $message . "</td>
    </tr>

  	</table>
  	</body></html>";
    $mail1->Body = $message_data;

    $mail1->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail1->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    if (isset($_POST['recaptcha_response'])) {
        $captcha = $_POST['recaptcha_response'];
    } else {
        $captcha = false;
    }

    if (!$captcha) {
        echo 'Invalid Captcha';
        print "<script>window.location = \"index.html?error=invalid-captcha\"</script>";
    } else {
        $site = '6Lfp9-gpAAAAAGSdEHldKtbj1wz1jxP827cKOEwg';
        $secret = '6Lfp9-gpAAAAABZizWHJbJ5KFX5F9Q-wm_IeeCmh';
        $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&response=" . $captcha . "&remoteip=" . $_SERVER['REMOTE_ADDR']);
        $response = json_decode($response);

        if ($response->success == false) {
            echo 'Invalid Captcha';
            var_dump($captcha);

        } else {
            if (isset($_POST['firstName']) && $firstName != "") {
                $mail1->send();
                print "<script>window.location = \"success.html\"</script>";
                exit();
            } else {
                echo 'Sorry you have not filled all fields';
            }
        }
    }

    exit();
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail1->ErrorInfo;
}
