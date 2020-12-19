<?php

/* https://api.telegram.org/bot1155125352:AAGqmNRnDMzTGyt74lp-9tnTHjtutFP4K2c/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "1155125352:AAGqmNRnDMzTGyt74lp-9tnTHjtutFP4K2c";
$chat_id = "-420716824";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Процедура' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>