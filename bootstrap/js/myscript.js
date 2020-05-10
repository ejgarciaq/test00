function resultado() {
	var p1, p2, p3, p4, p5, p6, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p12').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	valor = document.getElementById("p21").value.toUpperCase();
	if( valor == "BIOLOGICOS FISICOS QUIMICOS" || valor == "BIOLOGICOS QUIMICOS FISICOS"
	 || valor == "FISICOS BIOLOGICOS QUIMICOS" || valor == "FISICOS QUIMICOS BIOLOGICOS"
	 || valor == "QUIMICOS FISICOS BIOLOGICOS" || valor == "QUIMICOS BIOLOGICOS FISICOS"
	 || valor == "BIOLÓGICOS FÍSICOS QUÍMICOS" || valor == "BIOLÓGICOS QUÍMICOS FÍSICOS"
	 || valor == "FÍSICOS BIOLÓGICOS QUÍMICOS" || valor == "FÍSICOS QUÍMICOS BIOLÓGICOS"
	 || valor == "QUÍMICOS FÍSICOS BIOLÓGICOS" || valor == "QUÍMICOS BIOLÓGICOS FÍSICOS"
	 ) {
	   p2=1;
	} else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p31').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p44').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	valor = document.getElementById("p51").value.toUpperCase();
	if( valor == "ESTERILIZACIÓN PASTEURIZACIÓN" || valor == "ESTERILIZACION PASTEURIZACION" || valor == "PASTEURIZACIÓN ESTERILIZACIÓN" || valor == "PASTEURIZACION ESTERILIZACION") {
	   p5=1;
	} else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p63').checked==true) {p6=1}
	else {p6=0}
	 
	nota=p1+p2+p3+p4+p5+p6;
	alert(" Aciertos: " + nota);
	location.reload();
}

//Animate
window.onload = function () {
   $(document).ready(function() {
	$("#someElement").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);								
});
}

function rphpb() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13,
	p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25,
	 p26, p27, p28, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p024').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p033').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p044').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p061').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p071').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p083').checked==true) {p8=1}
	else {p8=0}
	<!-- 9ª pregunta -->
	if (document.getElementById('p092').checked==true) {p9=1}
	else {p9=0}
	<!-- 10ª pregunta -->
	if (document.getElementById('p101').checked==true) {p10=1}
	else {p10=0}
	<!-- 11ª pregunta -->
	if (document.getElementById('p111').checked==true) {p11=1}
	else {p11=0}
	<!-- 12ª pregunta -->
	if (document.getElementById('p124').checked==true) {p12=1}
	else {p12=0}
	<!-- 13ª pregunta -->
	if (document.getElementById('p132').checked==true) {p13=1}
	else {p13=0}
	<!-- 14ª pregunta -->
	if (document.getElementById('p141').checked==true) {p14=1}
	else {p14=0}
	<!-- 15ª pregunta -->
	if (document.getElementById('p151').checked==true) {p15=1}
	else {p15=0}
	<!-- 16ª pregunta -->
	if (document.getElementById('p162').checked==true) {p16=1}
	else {p16=0}
	<!-- 17ª pregunta -->
	if (document.getElementById('p172').checked==true) {p17=1}
	else {p17=0}
	<!-- 18ª pregunta -->
	if (document.getElementById('p183').checked==true) {p18=1}
	else {p18=0}
	<!-- 19ª pregunta -->
	if (document.getElementById('p194').checked==true) {p19=1}
	else {p19=0}
	<!-- 20ª pregunta -->
	if (document.getElementById('p204').checked==true) {p20=1}
	else {p20=0}
	<!-- 21ª pregunta -->
	if (document.getElementById('p213').checked==true) {p21=1}
	else {p21=0}
	<!-- 22ª pregunta -->
	if (document.getElementById('p222').checked==true) {p22=1}
	else {p22=0}
	<!-- 23ª pregunta -->
	if (document.getElementById('p231').checked==true) {p23=1}
	else {p23=0}
	<!-- 24ª pregunta -->
	if (document.getElementById('p244').checked==true) {p24=1}
	else {p24=0}
	<!-- 25ª pregunta -->
	if (document.getElementById('p254').checked==true) {p25=1}
	else {p25=0}
	<!-- 26ª pregunta -->
	if (document.getElementById('p261').checked==true) {p26=1}
	else {p26=0}
	<!-- 27ª pregunta -->
	if (document.getElementById('p272').checked==true) {p27=1}
	else {p27=0}
	<!-- 28ª pregunta -->
	if (document.getElementById('p282').checked==true) {p28=1}
	else {p28=0}
	
	nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10+p11+p12+p13+p14+p15+p16+p17+p18
	+p19+p20+p21+p22+p23+p24+p25+p26+p27+p28;
	alert(" Aciertos: " + nota);
	location.reload();
}

function ptesting() {
	var p1, p2, p3, p4, p5, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p012').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p034').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p042').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p051').checked==true) {p5=1}
	else {p5=0}
	
	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}

function pnodejs() {
	var p1, p2, p3, p4, p5, nota;

	<!-- 1ª pregunta -->
	valor = document.getElementById("p011").value.toUpperCase();
	if( valor == "SERVIDOR") {
	   p1=1
	} else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p022').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p032').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p041').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}
	
	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}

function pphpmysql() {
	var p1, p2, p3, p4, p5, p6, p7, p8 ,p9 , p10, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p032').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p043').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p053').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p062').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p074').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p083').checked==true) {p8=1}
	else {p8=0}
	<!-- 9ª pregunta -->
	if (document.getElementById('p091').checked==true) {p9=1}
	else {p9=0}
	<!-- 10ª pregunta -->
	if (document.getElementById('p102').checked==true) {p10=1}
	else {p10=0}
	
	nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
	alert(" Aciertos: " + nota);
	location.reload();
}

function paec() {
	var p1, p2, p3, p4, p5, p6, p7, p8, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p024').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p031').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p044').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p053').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p061').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p071').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p084').checked==true) {p8=1}
	else {p8=0}
	
	nota=p1+p2+p3+p4+p5+p6+p7+p8;
	alert(" Aciertos: " + nota);
	location.reload();
}

function papi() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p031').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p041').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p062').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p071').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p081').checked==true) {p8=1}
	else {p8=0}
	<!-- 9ª pregunta -->
	if (document.getElementById('p091').checked==true) {p9=1}
	else {p9=0}
	<!-- 10ª pregunta -->
	if (document.getElementById('p102').checked==true) {p10=1}
	else {p10=0}
	
	nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
	alert(" Aciertos: " + nota);
	location.reload();
}

function ppi() {
	var p1, p2, p3, p4, p5, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p033').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p044').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p051').checked==true) {p5=1}
	else {p5=0}

	
	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}

function ppii() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p012').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p031').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p041').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	valor = document.getElementById("p061").value.toUpperCase();
	if( valor == "TRES") {
	   p6=1
	} else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p072').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p081').checked==true) {p8=1}
	else {p8=0}
	<!-- 9ª pregunta -->
	if (document.getElementById('p092').checked==true) {p9=1}
	else {p9=0}
	<!-- 10ª pregunta -->
	if (document.getElementById('p104').checked==true) {p10=1}
	else {p10=0}
	
	nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
	alert(" Aciertos: " + nota);
	location.reload();
}

function pp3() {
	var p1, p2, p3, p4, p5, nota;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p033').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p044').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p051').checked==true) {p5=1}
	else {p5=0}	
	
	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}

function parrays() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9;

	<!-- 1ª pregunta -->
	if (document.getElementById('p012').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p021').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p032').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p043').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p054').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p061').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p073').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p084').checked==true) {p8=1}
	else {p8=0}

	nota=p1+p2+p3+p4+p5+p6+p7+p8;
	alert(" Aciertos: " + nota);
	location.reload();
}

function pai() {
	var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p022').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p032').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p042').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}
	<!-- 6ª pregunta -->
	if (document.getElementById('p064').checked==true) {p6=1}
	else {p6=0}
	<!-- 7ª pregunta -->
	if (document.getElementById('p072').checked==true) {p7=1}
	else {p7=0}
	<!-- 8ª pregunta -->
	if (document.getElementById('p083').checked==true) {p8=1}
	else {p8=0}
	<!-- 9ª pregunta -->
	if (document.getElementById('p091').checked==true) {p9=1}
	else {p9=0}
	<!-- 10ª pregunta -->
	if (document.getElementById('p103').checked==true) {p10=1}
	else {p10=0}

	nota=p1+p2+p3+p4+p5+p6+p7+p8+p9+p10;
	alert(" Aciertos: " + nota);
	location.reload();
}

function pnpm() {
	var p1, p2, p3, p4, p5;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p022').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p032').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p043').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p052').checked==true) {p5=1}
	else {p5=0}

	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}

function ppweb() {
	var p1, p2, p3, p4, p5;

	<!-- 1ª pregunta -->
	if (document.getElementById('p011').checked==true) {p1=1}
	else {p1=0}
	<!-- 2ª pregunta -->
	if (document.getElementById('p023').checked==true) {p2=1}
	else {p2=0}
	<!-- 3ª pregunta -->
	if (document.getElementById('p033').checked==true) {p3=1}
	else {p3=0}
	<!-- 4ª pregunta -->
	if (document.getElementById('p044').checked==true) {p4=1}
	else {p4=0}
	<!-- 5ª pregunta -->
	if (document.getElementById('p051').checked==true) {p5=1}
	else {p5=0}

	nota=p1+p2+p3+p4+p5;
	alert(" Aciertos: " + nota);
	location.reload();
}