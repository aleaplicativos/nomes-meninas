const dicas = [
"Alice",
"Afrodite",
"Agatha",
"Alice", 
"Amanda",
"Ana",
"Aline",
"Alessandra",
"Andrea",
"Andressa",
"Andrezza",
"Ariana",
"Ariane",
"Anelise",
"Aurora",
"Augustina",
"Amanda",
"Adriana",
"Ayla",
"Alana",
"Amélia",
"Amelie",
"Amy", 
"Anabelle",
"Anitta",
"Annie",
"Anny",
"Austen",
"Helena",
"Aline",

"Cristine",

"Dáfni",
"Daíni",
"Danúbia",

"Edilaine",
"Edilene",
"Elisiane",
"Elmha",
"Eralcilene",
"Emanuelli",

"Fabiana",
"Francielly",

"Gilcélia",
"Grazielle",
"Joceli",
"Jacinalva",
"Janine",
"Laura",
"Maria Alice",
"Valentina",
"Heloísa",
"Maria Clara",
"Maria Cecília",
"Maria Julia",
"Lígia",
"Sophia	",
"Viviana",
"Vivian",

"Bia",	
  ];
  
  function gerarDica() {
	const indiceAleatorio = Math.floor(Math.random() * dicas.length);
	const dica = dicas[indiceAleatorio];
	document.getElementById("dica").innerHTML = dica;
  }
  
  document.getElementById("botao").addEventListener("click", gerarDica);
  
