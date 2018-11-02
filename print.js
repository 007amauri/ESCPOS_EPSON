<!--
/**
 * Script que cria comandos ESCPOS LPT5 impressão TM-T20 Seiko Epson Corporation .
 * contato: contato: amauri_long@yahoo.com.br
 * Requer Emulador de porta COM/LPT5 para USB/Ethernet
 * Disponivel  https://download.epson-biz.com/modules/pos/index.php?page=single_soft&cid=5485&pcat=5&pid=41
 * Suporte Epson https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=270
 * @author Amauri Bueno dos santos
 * @created 11/04/2011
 * @version 3.0, 08/07/2018
 */
window.resizeTo(600,900);
noStringAtAll = "$-=+ABC123abc";
ModeloNet = "CM MAC: ";
RE = "85187";
LinkSite = "https://www.homologacao.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaQRCode.aspx?chNFe=35150805481336000137650220000000711000001960&nVersao=100&tpAmb=2&dhEmi=323031352D30382D31395432323A33333A32352D30333A3030&vNF=3.00&vICMS=0.12&digVal=776967396F2B665861706673396878776E64594C396F61654C35493D&cIdToken=000001&cHashQRCode=9BD312D558823E1EC68CEDB338A39B6150B0480E";
function ImprImprimir(Linha,Coluna,Texto){
var DifeL = Linha - this.Linha ; 
 
this.Texto = this.Texto + Texto ; 
this.Coluna = this.Texto.length ; 
} 
function ImprFechar(){ 
if (this.Texto!=''){ 
this.objTextFile.WriteLine(this.Texto); 
} 
this.Linha = 0 ; 
this.Coluna = 0 ; 
this.Texto = "" ; 
this.objTextFile.Close(); 
} 
function ImprAbrir(){ 
var ForReading = 1, ForWriting = 2, ForAppending = 8; 
this.Arquivo = "c:\\"+this.Porta ; 
this.objTextFile = this.objFSO.CreateTextFile(this.Arquivo, true); 
} 
function ImprAbrirLeitura(){ 
var ForReading = 1, ForWriting = 2, ForAppending = 8; 
this.Arquivo = "c:\\"+this.Porta ; 
this.objTextFile = this.objFSO.OpenTextFile(this.Arquivo, ForReading); 
} 
function ImprAjustarLC(Linha,Coluna){ 
this.Linha = Linha ; 
this.Coluna = Coluna ; 
} 
function ImprEject(){ 
this.Linha = 0 ; 
this.Coluna = 0 ; 
this.Texto = this.Texto+String.fromCharCode(12) ; 
} 
function ImprGRAL(){ 
this.Texto = this.Texto+String.fromCharCode(27)+"V2"; 
} 
function ImprGRALN(){ 
this.Texto = this.Texto+String.fromCharCode(27)+"V0";
}

function ImprNCOMP(){ 
this.Texto = this.Texto+String.fromCharCode(12);
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(0);
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(1);
// Select justification: Centering 
this.Texto = this.Texto+String.fromCharCode(27)+"M1";
this.Texto = this.Texto+String.fromCharCode(29)+"!7"; 
} 
function ImprCOMPN(){//LIGA EXPANDIDA
//[ESC]a[SOH] centralizador desativado
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(2);
this.Texto = this.Texto+String.fromCharCode(27)+"!"+String.fromCharCode(169)+String.fromCharCode(27)+"4";
this.Texto = this.Texto+String.fromCharCode(27)+"!"+String.fromCharCode(169)+String.fromCharCode(27)+"4";
this.Texto = this.Texto+String.fromCharCode(10);//LF	
}
function ff(){ 

this.Texto = this.Texto+String.fromCharCode(12);
}

function mundonet(){
//[ESC]@[ESC]2[ESC]t[STX] Reseta impressao
this.Texto = this.Texto+String.fromCharCode(27)+"@";
this.Texto = this.Texto+String.fromCharCode(27)+"2";
this.Texto = this.Texto+String.fromCharCode(27)+"t";
this.Texto = this.Texto+String.fromCharCode(2);//[STX]

//[ESC]a[SOH] centralizador
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(1);

//[GS](L[ACK][NUL]0E  [SOH][SOH] Logo 1 Net
this.Texto = this.Texto+String.fromCharCode(29)+"(L";
this.Texto = this.Texto+String.fromCharCode(6);//[ACK]
this.Texto = this.Texto+String.fromCharCode(0)+"0E  ";//[NUL]0E  
this.Texto = this.Texto+String.fromCharCode(1);//[SOH]
this.Texto = this.Texto+String.fromCharCode(1);//[SOH]
//[ESC]a[SOH] centralizador desativado
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(0);

}


function Centering(){//reset impressao defalt 
//[ESC]@[ESC]2[ESC]t[STX] Reseta impressao
this.Texto = this.Texto+String.fromCharCode(27)+"@";
this.Texto = this.Texto+String.fromCharCode(27)+"2";
this.Texto = this.Texto+String.fromCharCode(27)+"t";
this.Texto = this.Texto+String.fromCharCode(2);//[STX]

//[ESC]a[NUL] centralizador desativado
this.Texto = this.Texto+String.fromCharCode(27)+"a"+String.fromCharCode(0);
}

function FonteinvertidaON(){//Fonte Invertida
//[GS]B[SOH]
//[GS]B[NUL]
//[GS]B[SOH]FONTE INVERTIDA

this.Texto = this.Texto+String.fromCharCode(29)+"B"+String.fromCharCode(1);//[GS]B[SOH] ativa
this.Texto = this.Texto+String.fromCharCode(29)+"B"+String.fromCharCode(0);//[GS]B[NUL] desativa
this.Texto = this.Texto+String.fromCharCode(29)+"B"+String.fromCharCode(1);


} 

function FonteinvertidaOFF(){//Fonte Invertida desligada
//FONTE INVERTIDA[GS]B[NUL][LF]
this.Texto = this.Texto+String.fromCharCode(29)+"B"+String.fromCharCode(0)+String.fromCharCode(10);//[GS]B[NUL][LF] desativa

}





// --- Print barcode 128 ---<<<
function Bar_Codexc(){
this.Texto = this.Texto+String.fromCharCode(27)+"a1";
this.Texto = this.Texto+String.fromCharCode(27)+"@";
this.Texto = this.Texto+String.fromCharCode(27)+"2";
this.Texto = this.Texto+String.fromCharCode(27)+"t";
this.Texto = this.Texto+String.fromCharCode(2);//[STX]
this.Texto = this.Texto+String.fromCharCode(27)+"a1";
this.Texto = this.Texto+String.fromCharCode(29)+"w";// largura
this.Texto = this.Texto+String.fromCharCode(2);//STX
this.Texto = this.Texto+String.fromCharCode(29)+"h";// comprimento
this.Texto = this.Texto+String.fromCharCode(50);
this.Texto = this.Texto+String.fromCharCode(29)+"H";
this.Texto = this.Texto+String.fromCharCode(0);//ff
this.Texto = this.Texto+String.fromCharCode(29)+"kI";// letras em baixo
this.Texto = this.Texto+String.fromCharCode(14)+"{B"+noStringAtAll;//14 caracteres porque {B & noStringAtAll conta 2+12=14 
this.Texto = this.Texto+ModeloNet+noStringAtAll;
}

// --- Print QR CODE---<<<
function QR_Cod(){
this.Texto = this.Texto+String.fromCharCode(27)+"a1";
this.Texto = this.Texto+String.fromCharCode(27)+"@";
this.Texto = this.Texto+String.fromCharCode(27)+"2";
this.Texto = this.Texto+String.fromCharCode(27)+"t";
this.Texto = this.Texto+String.fromCharCode(2);//[STX]
this.Texto = this.Texto+String.fromCharCode(27)+"a1";

this.Texto = this.Texto+String.fromCharCode(10);
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(4);
this.Texto = this.Texto+String.fromCharCode(0)+"1A2";
this.Texto = this.Texto+String.fromCharCode(0);
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1C";
this.Texto = this.Texto+String.fromCharCode(4);
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1E0";
this.Texto = this.Texto+String.fromCharCode(29)+"(kz";
this.Texto = this.Texto+String.fromCharCode(1)+"1P0";
this.Texto = this.Texto+LinkSite;
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1Q0";
this.Texto = this.Texto+String.fromCharCode(10);
this.Texto = this.Texto+String.fromCharCode(10);
this.Texto = this.Texto+String.fromCharCode(10)+")";
}

// --- Print barcode 128 ---<<<
function QR_RE(){
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(4);
this.Texto = this.Texto+String.fromCharCode(0)+"1A2";
this.Texto = this.Texto+String.fromCharCode(0);
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1C";// largura
this.Texto = this.Texto+String.fromCharCode(4);
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1E0";
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(20);
this.Texto = this.Texto+String.fromCharCode(0);
this.Texto = this.Texto+"1P0Procisa RE: "+RE;
this.Texto = this.Texto+String.fromCharCode(29)+"(k";
this.Texto = this.Texto+String.fromCharCode(3);
this.Texto = this.Texto+String.fromCharCode(0)+"1Q0";

}





function impressao_boa(){ 
this.Texto = this.Texto+String.fromCharCode(27)+"GS"; 
}
function tamanho_grande(){ 
this.Texto = this.Texto+String.fromCharCode(27)+"G0";
}
function tamanho_normal(){ 
this.Texto = this.Texto+String.fromCharCode(27)+"W"+"0";
this.Texto = this.Texto+String.fromCharCode(27)+"@";// Initialize printer
this.Texto = this.Texto+String.fromCharCode(12);  
}
function CORTAR(){ 
this.Texto = this.Texto+String.fromCharCode(29)+"V1"; 
} 
function ImprLerTudo(){ 
return this.objTextFile.ReadAll() ; 
} 
function Impr(){ 
this.Linha = 0 ; 
this.Coluna = 0 ; 
this.Texto = "" ; 
this.Porta = "LPT5" ; 
this.Arquivo = "c:\\"+this.Porta ; 

this.ImprimirCentering = Centering;
 

this.Imprimir = ImprImprimir; 
this.Fechar = ImprFechar; 
this.Abrir = ImprAbrir; 
this.AjustarLC = ImprAjustarLC; 
this.Eject = ImprEject;
this.impressao_b = impressao_boa;
this.LerTudo = ImprLerTudo; 
this.AbrirLeitura = ImprAbrirLeitura; 
this.cortapapel = CORTAR;
this.ffs = ff;
this.QR_REs = QR_RE;
this.QR_Cods = QR_Cod;
this.invertidaON = FonteinvertidaON;
this.invertidaOFF = FonteinvertidaOFF;
this.mundonets = mundonet;
this.tamanhoG = tamanho_grande;
this.tamanhoP = tamanho_normal;
this.NCOMP = ImprNCOMP; 
this.COMPN = ImprCOMPN;
this.Code = Bar_Codexc;
this.GRAL = ImprGRAL;
this.GRALN = ImprGRALN;

this.objFSO = new ActiveXObject("Scripting.FileSystemObject"); 

}
//-->

 
