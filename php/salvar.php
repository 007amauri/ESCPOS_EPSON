<?php
if(!isset($_POST['Nome'])){
$_POST['Nome'] = 0;
}
$Nome=$_POST['Nome'];

if(!isset($_POST['re'])){
$_POST['re'] = 0;
}
$re=$_POST['re'];

$link = mysqli_connect("127.0.0.1", "root", "0073007", "bancovip");

$sql=("INSERT INTO Matricula (Nome, Re) VALUES ('$Nome','$re')");

mysqli_query($link,$sql);
mysqli_close($link);
require_once("BANCO.php");
?>