'Data atual 
Function Fun_Data()
    dia = day(now)
    mes = month(now)
    ano = year(now)
	
	if len(mes) = 1 or mes < 10 or mes = 0 then mes = "0" + CStr(mes) end if 'trasnforma a variavel com o 01 a 09 se for menor que 10
	
    Fun_Data = CStr(dia) + "/" + CStr(mes) + "/" + CStr(ano)
End Function

'Hora atual
Function Fun_Hora()
    hora = hour(now)
    minutos = minute(now)
    segundos =second(now)
	
	'trasnforma a variavel com o 01 a 09 se for menor que 10
    if len(hora) = 1 or hora < 10 or hora = 0 then hora = "0" + CStr(hora) end if
    if len(minutos) = 1 or minutos < 10 then minutos = "0" + CStr(minutos) end if
    if len(segundos) = 1 or segundos < 10 then segundos = "0" + CStr(segundos) end if
    
	Fun_Hora = CStr(hora) + ":" + CStr(minutos) + ":" + CStr(segundos)
End Function

'Impressao de senha 
Private Function Senha(ByVal valorLOOP)
Dim objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")' cria um arquivo manipulado pelo seu script

For i = 0 To CInt (valorLOOP)

	Set objPrinter = objFSO.CreateTextFile("LPT3", true)'joga um testo na porta Lpt1, lpt2 etc... defina no seu script

	objPrinter.WriteLine(Chr(27)+"a"+Chr(1))'fonte Centralizar 
	objPrinter.WriteLine(Chr(27)+"M1"+Chr(29)+"!7")'fonte Grande
	objPrinter.WriteLine("SENHA")

	objPrinter.WriteBlankLines 1'pula linha
	objPrinter.WriteLine(cstr(i))'numero da senha atual

	objPrinter.WriteBlankLines 1'pula linha
	
	objPrinter.WriteLine(Chr(27)+"@"+Chr(1)+Chr(27)+"2"+Chr(27)+"t"+Chr(2))'reseta a impressora ao padrão
	objPrinter.WriteLine(Chr(27)+"a"+Chr(2))'justifica a fonte a esquerda 
	objPrinter.WriteLine(Chr(27)+"!"+Chr(169)+Chr(27)+"4")
	objPrinter.WriteLine(Chr(27)+"!"+Chr(169)+Chr(27)+"4"+Chr(10))'subrinhar fonte 
	objPrinter.WriteLine(Fun_Data & " " & Fun_Hora )'Data e Hora atual
	objPrinter.WriteLine(Chr(27)+"@"+Chr(1)+Chr(27)+"2"+Chr(27)+"t"+Chr(2))'reseta a impressora ao padrão
	objPrinter.WriteLine(Chr(27)+"@"+Chr(0))' fonte esquerda defalt
	objPrinter.WriteBlankLines 1'pula linha
	objPrinter.WriteLine(Chr(29)+"V1")'corte folha
	

	objPrinter.Close

	alert = msgbox ("Senha: "+ cstr(i) + " Gerada com Sucesso! ",vbInformation," Gerando a senha de " & valorLOOP )

Next

Set objFSO = Nothing
End Function





'chama a função coloque a quantidade de senha que o pc deve gerar no dia exemplo 10 25 etc... 
Senha("3")