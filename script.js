const dicas = [
"Alice",
"Afrodite",
"Agatha",
"Alice", 
"Amanda",
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
"Laura",
"Maria Alice",
"Valentina",
"Heloísa",
"Maria Clara",
"Maria Cecília",
"Maria Julia",
"Sophia	",

"Bia",	
  ];
  
  function gerarDica() {
	const indiceAleatorio = Math.floor(Math.random() * dicas.length);
	const dica = dicas[indiceAleatorio];
	document.getElementById("dica").innerHTML = dica;
  }
  
  document.getElementById("botao").addEventListener("click", gerarDica);
  