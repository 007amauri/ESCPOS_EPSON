<?php
if(!isset($_POST['re'])){
$_POST['re'] = 0;
}
$re=$_POST['re'];

$link = mysqli_connect("127.0.0.1", "root", "0073007", "bancovip");

$sql=("DELETE FROM Matricula WHERE SID='$re'");

mysqli_query($link,$sql);
mysqli_close($link);
require_once("BANCO.php");
?>