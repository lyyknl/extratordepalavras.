
const botaoMostraPalalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
    campoResultado.style.display = 'block';
    campoResultado.style.backgroundColor = 'fffefeff'; 
    campoResultado.style.color= '#000';
}

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalvarasRuins(palavras);

    palavras = palavras.filter(str => str!== "" && str.length > 3);
    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(function(a, b) {
        return frequencias[b] - frequencias[a];
    });

    function ordenasPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);

}

function contaFrequencias(palavras) { 
    let frequencias = {};
    for (let palavra of palavras) {
        if(frequencias[palavra]){
            frequencias[palavra]++;
        } else {
            frequencias[palavra] = 1;
        }
    }

    console.log(frequencias);
  return frequencias;
}


function tiraPalvarasRuins(palavras) {
    const palavrasRuins = new Set ([
        "que",
        "para",
        "com",
        "não",
        "uma",
        "por",
        "mais",
        "dos",
        "como",
        "mas",
        "foi",
        "ele",
        "das",
        "tem",
        "seu",
    ]);


return palavras.filter(palavra => !palavrasRuins.has(palavra))

}
