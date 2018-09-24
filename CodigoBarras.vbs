'Impressao de codigo de barras Bar 128 12 digitos
Private Function print(ByVal Barcode)
Dim objFSO
Set objFSO = CreateObject("Scripting.FileSystemObject")' cria um arquivo manipulado pelo seu script



	Set objPrinter = objFSO.CreateTextFile("LPT5", true)'joga um testo na porta Lpt1, lpt2 etc... defina no seu script

	objPrinter.WriteLine(Chr(27)+"a1")
	objPrinter.WriteLine(Chr(27)+"@")
	objPrinter.WriteLine(Chr(27)+"2")
	objPrinter.WriteLine(Chr(27)+"t")
	objPrinter.WriteLine(Chr(2))
	objPrinter.WriteLine(Chr(27)+"a1")
	objPrinter.WriteLine(Chr(27)+"w")' largura
	objPrinter.WriteLine(Chr(2))'STX
	objPrinter.WriteLine(Chr(29)+"h")'comprimento
	objPrinter.WriteLine(Chr(50))
	objPrinter.WriteLine(Chr(29)+"H")
	objPrinter.WriteLine(Chr(0))'FF
	objPrinter.WriteLine(Chr(29)+"kI")
	objPrinter.WriteLine(Chr(14)+"{B"+Barcode)' OBS chr 14 pois 2({B) + 12(Barcode) caracteres é igual a 14 digitos 
	objPrinter.WriteLine("CM MAC: "+ Barcode)
	objPrinter.WriteLine(Chr(27)+"@"+Chr(1)+Chr(27)+"2"+Chr(27)+"t"+Chr(2))'reseta a impressora ao padrão
	objPrinter.WriteLine(Chr(27)+"@"+Chr(0))' fonte esquerda defalt
	objPrinter.WriteBlankLines 1'pula linha
	result = MsgBox ("Deseja corta papel ?", vbYesNo, "Corte de papel")
    Select Case result
	Case vbYes
    objPrinter.WriteLine(Chr(29)+"V1")'corte folha
	Case vbNo
    objPrinter.WriteBlankLines 1'pula linha
	End Select
	

	objPrinter.Close

	alert = msgbox ("CM MAC: "+ Barcode + " Gerada com Sucesso! ",vbInformation," Impressao de codigo de barras ")



Set objFSO = Nothing
End Function






'chama a função coloque a quantidade de senha que o pc deve gerar no dia exemplo 10 25 etc... 
Do 

rs = Inputbox("Digite o codigo ", "Impressao de codigo de barras BAR 128", "Exemplo12345" ) 


If IsEmpty(rs) Then
    'cancelled
    WScript.Quit
Else
    'something has entered even zero-length
	If Len(rs) = 12 Then
    print(rs)
	Else
	MsgBox "CM MAC deve conter 12 digitos !", vbCritical, "Erro de quantidade de digitos" 
	End If
End If

Loop 



