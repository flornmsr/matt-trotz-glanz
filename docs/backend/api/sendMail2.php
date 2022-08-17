<?php

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);


    // Validate.
    if (trim($request->address->email) === '') {
        return http_response_code(400);
    }

    $mailFlo = "florian98.moser@bluewin.ch";
    $mailTo = "florian98.moser@outlook.de";
    $subject = "Bestellung Buch: Matt trotz Glanz";


    $name =  $request->address->name;
	$preName = $request->address->prename;
	$address = $request->address->address;
	$zip = $request->address->zip;
	$city = $request->address->city;
    $memberEmail = $request->address->email;
	$order = $request->order->numberOfBookOrders;

	$orderMessage = $order . "x Buch Matt trotz Glanz, " . $order*25 . " Fr."; 
	$anschrift = $preName . " " . $name . "\n" . $address . "\n" . $zip . " " . $city. "\n";
    $newMessage = $message1 . "\n" . $orderMessage . "\n" . $anschrift . "\n" . $message2;

	
	//Mail Verlag
	$vMessage = "Hallo, folgende Vorbestellung ist getätigt worden: \n \n";
	$vnMessage = $vMessage . "\n" . $orderMessage . "\n \n" . $anschrift . $memberEmail . "\n \n Bei Fragen: " . $mailFlo;
	
	$vHeaders = "From: order@matt-trotz-glanz.ch" . "\r\n". "Reply-To: $memberEmail";
	mail($mailTo, $subject, $vnMessage, $vHeaders);
	
    $data = ["message" => $newMessage];
    echo json_encode($data);
}
else{
    $data = ["message" => "failed"];
    echo json_encode($data);
}

