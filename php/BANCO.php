<?php 
if(!isset($_POST['Nome'])){
$_POST['Nome'] = "";
}
$Nome=$_POST['Nome'];




?>
<!doctype html>
<script type='text/javascript'>



function send(action)
{
	
	switch(action) {
		
		
		case 'busca':
			var ss = document.form1;
			document.form1.action = "BANCO.php";
			document.form1.submit();
			break;
			
		case 'excluir':
			var ss = document.form1;
			document.form1.action = "excluir.php";
			document.form1.submit();
			break;
		case 'salvar':
			var ss = document.form1;
			document.form1.action = "salvar.php";
			document.form1.submit();
			break;
		case 'atualizar':
			var ss = document.form1;
			document.form1.action = "atualizar.php";
			document.form1.submit();
			break;
		case 'apagar':
			var ss = document.form1;
			document.form1.action = "apagar.php";
			document.form1.submit();
			break;
		case 'mostrar':
			var ss = document.form1;
			document.form1.action = "mostrar.php";
			document.form1.submit();
			break;
		case 'submit':
			url = '';
			break;
	}
}
</script>
<html>
<head>
<meta charset="utf-8">
<title>BANCO DE DADOS MYSQL</title>
<style type="text/css">
.direita {
	text-align: left;
}
</style>

<HTA:APPLICATION
      ID="oHTA"
      APPLICATIONNAME="BANCO"
      ID="oHTA"
      BORDER="thin"
      BORDERSTYLE="normal"
      CAPTION="yes"
      CONTEXTMENU="no"
      ICON="https://raw.githubusercontent.com/007amauri/ESCPOS_EPSON/master/icone.ico"
      INNERBORDER="no"
      MAXIMIZEBUTTON="no"
      MINIMIZEBUTTON="yes"
      NAVIGABLE="yes"
      SCROLL="no"
      SCROLLFLAT="yes"
      SELECTION="no"
      SHOWINTASKBAR="no"
      SINGLEINSTANCE="yes"
      SYSMENU="yes"
      VERSION="1.0"
    />
</head>

<body>
<form name="form1" method="post" action="">
  <label for="textarea"></label>
  <table width="200" border="5">
    <tr>
    <td><table width="425" height="210" border="1">
      <tr>
        <td height="65" colspan="5"><strong>BANCO DE DADOS MYSQL / PHP</strong></td>
      </tr>
      <tr>
        <td width="72" height="33" class="direita"><label for="Nome2">Nome:</label></td>
        <td width="144"><input name="Nome" type="text" id="Nome" value="<?php $Nome?>"></td>
        <td colspan="3"><span class="direita">
          <input type="submit" name="cagb4" id="cagb4" onClick="javascript:send('busca');
        return false" value="Busca">
        </span></td>
      </tr>
      <tr>
        <td height="30" class="direita">RE:</td>
        <td><label for="re2"></label>
          <input name="re" type="text" id="re" value="<?php $Re?>"></td>
        <td colspan="3"><span class="direita">
          <input type="submit" name="cagb5" id="cagb5" onClick="javascript:send('excluir');
        return false" value="Excluir">
        </span></td>
      </tr>
      <tr>
        <td colspan="5" class="direita">Controle:
          <input type="submit" name="cagb" id="cagb" onClick="javascript:send('salvar');
        return false" value="Salvar">
          <input type="submit" name="cagb2" id="cagb2" onClick="javascript:send('atualizar');
        return false" value="Atualizar">
          <input type="submit" name="cagb3" id="cagb3" onClick="javascript:send('apagar');
        return false" value="Apagar tudo"></td>
        </tr>
    </table></td>
    <td><textarea name="textarea" cols="50" rows="10" id="textarea">	
	
<?php
$link = mysqli_connect("127.0.0.1", "root", "0073007", "bancovip");

//$sql=("INSERT INTO Matricula (Nome, Re) VALUES ('Wendy','fggomes')");

//mysqli_query($link,$sql);

mysqli_set_charset($link, 'utf8');

$sql = mysqli_query($link, "SELECT * FROM Matricula where Nome LIKE '%$Nome%' ORDER BY '$Nome'") or die("Erro");
while($dados=mysqli_fetch_assoc($sql))
    { 

echo PHP_EOL .'Re: '.$dados['Re'].' '.'Nome: '.$dados['Nome'].PHP_EOL;

	}
mysqli_close($link);


?>
 </textarea>
</td>
  </tr>
</table>
</form>
</body>
</html>