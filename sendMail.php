<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Content-Type, origin");
$getData = file_get_contents('php://input');
$data = explode(',', $getData);
$data = str_replace('"','', $data);
$data = str_replace('{','', $data);
$data = str_replace('}','', $data);

for($i = 0; $i < sizeof($data); $i++){
  $data[$i] = substr($data[$i], strpos($data[$i], ":") + 1);
}

  $name = $data[0];
  $email = $data[1];
  $msg = $data[2];

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $subject = $name . " entrou em contato!";
    $message = "Olá".$msg;
    $headers = "From: Leonardo <lcds90@gmail.com>\r\n" ;
    $headers .= 'MIME-Version: 1.0\r\n';
    //$headers .= 'Content-type: text/html; charset=iso-8859-1\r\n';
    
    // print_r($data);

     if(mail($email,$subject,$message, $headers)) {
    // echo "Email enviado";
    echo error_get_last()['message'];
    } else {
      echo error_get_last()['message'];
    }
