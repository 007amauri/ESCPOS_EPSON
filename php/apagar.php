<?php
$link = mysqli_connect("127.0.0.1", "root", "0073007", "bancovip");

$sql=("DELETE FROM Matricula");

mysqli_query($link,$sql);
mysqli_close($link);
require_once("BANCO.php");
?>