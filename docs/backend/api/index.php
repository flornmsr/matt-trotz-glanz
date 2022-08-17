<?PHP
$sender = 'kontakt@matt-trotz-glanz.ch';
$recipient = 'florian98.moser@bluewin.ch';

$subject = "php mail test";
$message = "php test message";
$headers = 'From:' . $sender;

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>