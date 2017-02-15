<?php
$client_id = '3c38d510e4ce43b08f4157fd0ee381fb';
$client_secret = '9e2ca782fc3d4d1492b5f325fbefe7cf';
$redirect_uri = 'https://fermoto5hd.com/';
$scope = 'basic+likes+comments+relationships';

$url = "https://api.instagram.com/oauth/authorize?client_id=$client_id&redirect_uri=$redirect_uri&scope=$scope&response_type=code";

if(!isset($_GET['code']))
{
    echo '<a href="'.$url.'">No estás logueado</a>';
}
else
{
    $code = $_GET['code'];

$apiData = array(
  'client_id'       => $client_id,
  'client_secret'   => $client_secret,
  'grant_type'      => 'authorization_code',
  'redirect_uri'    => $redirect_uri,
  'code'            => $code
);

$apiHost = 'https://api.instagram.com/oauth/access_token';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiHost);
curl_setopt($ch, CURLOPT_POST, count($apiData));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($apiData));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$jsonData = curl_exec($ch);
curl_close($ch);

var_dump($jsonData);
$user = @json_decode($jsonData); 

echo '<pre>';
print_r($user);
exit;
}
?>