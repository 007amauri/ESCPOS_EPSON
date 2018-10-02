<!doctype html>

<!-- #include file="functions/function.asp" -->
<% 



If Request("cagb4") <> "" then
Nome = Request("Nome")
Re = Request("Re")
busca
End If

If Request("cagb5") <> "" then
Re = Request("Re")
excluir
End If

If Request("cagb3") <> "" then
apagar
End If

If Request("cagb2") <> "" then
Nome = Request("Nome")
Re = Request("Re")
atualizar
End If 

If Request("cagb") <> "" then
Nome = Request("Nome")
Re = Request("Re")
Enviar
End If 

If Request("cagb1") <> "" then
buscatd
End If 


%>
<html>
<head>
<meta charset="utf-8">
<title>BANCO DE DADOS SQL</title>
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
<form name="Form" method="post" action="">
  <label for="textarea"></label>
  <table width="200" border="5">
    <tr>
    <td><table width="425" height="210" border="1">
      <tr>
        <td height="65" colspan="5"><strong>BANCO DE DADOS SQL</strong></td>
      </tr>
      <tr>
        <td width="72" height="33" class="direita"><label for="Nome2">Nome:</label></td>
        <td width="144"><input name="Nome" type="text" id="Nome" value="<%=Nome%>"></td>
        <td colspan="3"><span class="direita">
          <input type="submit" name="cagb4" id="cagb4" onClick="busca" value="Busca">
        </span></td>
      </tr>
      <tr>
        <td height="30" class="direita">RE:</td>
        <td><label for="re2"></label>
          <input name="re" type="text" id="re" value="<%=Re%>"></td>
        <td colspan="3"><span class="direita">
          <input type="submit" name="cagb5" id="cagb5" onClick="excluir" value="Excluir">
        </span></td>
      </tr>
      <tr>
        <td colspan="5" class="direita">Controle:
          <input type="submit" name="cagb" id="cagb" onClick="Enviar" value="Salvar">
          <input type="submit" name="cagb2" id="cagb2" onClick="atualizar" value="Atualizar">
          <input type="submit" name="cagb3" id="cagb3" onClick="apagar" value="Apagar tudo"></td>
        </tr>
    </table></td>
    <td>
<span class="direita">
<input name=cagb1 type=Submit id="cagb1" value=Mostrar tudo />
</span>
<textarea name="textarea" cols="50" rows="10" id="textarea">	
	
<%=strComma%>
 </textarea>
</td>
  </tr>
</table>
</form>
</body>
</html>
