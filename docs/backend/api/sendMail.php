<?php

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
	
    $request = json_decode($postdata);


    // Validate.
    if (trim($request->address->email) === '') {
        return http_response_code(400);
    }

    $mailFlo = "florian98.moser@bluewin.ch";
    $mailTo = "kontakt@matt-trotz-glanz.ch";
    $subject = "Bestellung Buch: Matt trotz Glanz";


    $name =  $request->address->name;
	$preName = $request->address->prename;
	$address = $request->address->address;
	$zip = $request->address->zip;
	$city = $request->address->city;
    $memberEmail = $request->address->email;
	$order = $request->order->numberOfBookOrders;

    $headers = "From: kontakt@matt-trotz-glanz.ch" . "\r\n". "Reply-To: $mailTo";

	$message1 = "Hallo! Vielen Dank für deine Bestellung! Du bekommst deine Bestellung und die Rechnung vom Verlag an folgende Addresse zugestellt: \n";
	$orderMessage = $order . "x Buch Matt trotz Glanz, " . $order*25 . " Fr."; 
	$message2 = "Dies ist eine automatisch versendete Mail, solltest du keine Bestellung vorgenommen haben, dann melde dich umgehend an kontakt@matt-trotz-glanz.ch";
	$anschrift = $preName . " " . $name . "\n" . $address . "\n" . $zip . " " . $city. "\n";
    $newName = "Name: " . $name;
    $newEmail = "Email: " . $memberEmail;
    $newMessage = $message1 . "\n" . $orderMessage . "\n" . $anschrift . "\n" . $message2;

	$mailStat="";
	
	$sender = 'florian98.moser@bluewin.ch';
	

	$headers = 'From:' . $sender;

	if (mail($memberEmail, $subject, $newMessage, $headers))
	{
		$data = ["message" => "Message accepted"];
		echo json_encode($data);
	}
	else
	{
		$data = ["message" => "Error: Message not accepted"];
		echo json_encode($data);
	}
	
    /**if(mail($memberEmail, $subject, $newMessage, $headers)){
		$mailStat="OK"
	} else{
		$mailStat="failed"
	}
	
	
    /**$data = [
	"message" => $newMessage,
	"mailStat" => $mailStat
	];
    echo json_encode($data);**/
}
else{
    $data = ["message" => "failed"];
    echo json_encode($data);
}


