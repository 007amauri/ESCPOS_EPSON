<%
Dim strComma

Dim Nome
Dim Re



'banco de dados acesso '
Set objConnection = CreateObject("ADODB.Connection")
objConnection.Open "PROVIDER=SQLOLEDB;DATA SOURCE=DESKTOP-OB7AG70\SQLEXPRESS;UID=myname;PWD=123456;DATABASE=bancovip"


 

Private Function Enviar()
 

aspSQL="INSERT INTO Matricula (Nome, Re) VALUES ('" + Nome +"','" + Re +"');"
Set rstemp = objConnection.Execute(aspSQL)
buscatd
End Function

Private Function atualizar() 

aspSQL="UPDATE Matricula set nome='" + Nome +"', Re='" + Re +"' where SID=" + Re
Set rstemp = objConnection.Execute(aspSQL)


buscatd
End Function



Private Function busca()

strComma = ""

aspSQL="SELECT * FROM Matricula where Nome LIKE '%" + Nome + "%' ORDER BY Nome" 

Set rstemp = objConnection.Execute(aspSQL)

 
 DO UNTIL rstemp.eof
'atribuindo os valores dos campos as variáveis'
  Codigo=rstemp("SID")
  Nome2=rstemp("Nome")
  Re2=rstemp("Re")
strComma = strComma + vbCrLf + "Re: "+ cstr(Codigo) + "  " + "Nome: "+ Nome2 + vbCrLf
rstemp.movenext 
LOOP

Re = cstr(Codigo)

End Function


Private Function apagar()

aspSQL="DELETE Matricula"
Set rstemp = objConnection.Execute(aspSQL)

document.getElementById("textarea").value = ""

End Function

Private Function excluir()
aspSQL = "DELETE FROM Matricula WHERE SID=" + Re
Set rstemp = objConnection.Execute(aspSQL)

buscatd
End Function

Private Function buscatd()


aspSQL="SELECT * FROM Matricula"


Set rstemp = objConnection.Execute(aspSQL)

 
 DO UNTIL rstemp.eof
'atribuindo os valores dos campos as variáveis'
  Codigo=rstemp("SID")
  Nome2=rstemp("Nome")
  Re2=rstemp("Re")
strComma = strComma + vbCrLf + "Re: "+ cstr(Codigo) + "  " + "Nome: "+ Nome2 + vbCrLf
rstemp.movenext 
LOOP

Re = cstr(Codigo) + 1

End Function
%>