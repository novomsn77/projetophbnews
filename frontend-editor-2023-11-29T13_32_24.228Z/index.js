function mudarCorDeFundo(){
  var elemenoAlvo = document.getElementById('elemento-alvo');
  var cores = ['#A0522D','#00BFFF', '#1C1C1C', '#00008B', '#7CFC00', '#32CD32', '#D2691E',	'#FF00FF'];
  var corAtual  = elemenoAlvo.style.backgroundColor; 
    var novaCor  = {cores}; 
    var novaCor = cores[Math.floor(Math.random()* cores.length)];
    while ( novaCor == corAtual){
      novaCor = cores[Math.floor(Math.random() * cores.lenght)];
    }
  elemenoAlvo.style.backgroundColor = novaCor;
  var texto = document.getElementById('texto');
  var coresTxt = ['#008B8B','#1C1C1C', '#32CD32', '#ffffff', '#A0522D'];
  var novaCorTexto = texto.style.color;

  var novaCorTexto = {coresTxt}; 
  var novaCorTexto = coresTxt[Math.floor(Math.random()* coresTxt.length)];
   while ( novaCorTexto == coresTxt){
      novaCorTexto = coresTxt[Math.floor(Math.random() * coresTxt.lenght)];
    }
    texto.style.color = novaCorTexto;
    document.body.style.backgroundColor = novaCorTexto;
    };

