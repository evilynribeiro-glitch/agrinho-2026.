// Banco de dados expandido com curiosidades sobre o Agronegócio
const curiosidades = [
    "O Brasil é o maior produtor e exportador de café, açúcar e suco de laranja do mundo.",
    "A tecnologia no campo permite que drones identifiquem focos de pragas antes mesmo que eles se espalhem, reduzindo o uso de defensivos.",
    "O agronegócio é responsável por cerca de 1 a cada 3 empregos gerados em todo o território nacional.",
    "A agricultura de precisão utiliza satélites de GPS para aplicar a quantidade milimétrica de água e nutrientes, evitando qualquer tipo de desperdício.",
    "A técnica de rotação de culturas ajuda a manter o solo rico e saudável naturalmente, quebrando o ciclo de pragas sem saturar a terra.",
    "Fazendas verticais urbanas já utilizam luzes LED e hidroponia para produzir vegetais frescos dentro de grandes metrópoles, economizando 95% de água."
];

// Mapeamento dos botões e contêineres interativos
const btnTheme = document.getElementById('btn-theme');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnCuriosity = document.getElementById('btn-curiosity');
const curiosityBox = document.getElementById('curiosity-box');
const curiosityText = document.getElementById('curiosity-text');

// Tamanho base inicial da fonte (em pixels)
let currentFontSize = 16; 

// 1. Lógica do Botão: Alterar do Tema Claro para Noturno
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        btnTheme.textContent = "☀️ Modo Claro";
    } else {
        btnTheme.textContent = "🌙 Modo Escuro";
    }
});

// 2. Lógica dos Botões: Aumentar e Diminuir Letras
btnIncrease.addEventListener('click', () => {
    if (currentFontSize < 26) { // Trava de segurança para não quebrar o visual
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
});

btnDecrease.addEventListener('click', () => {
    if (currentFontSize > 12) { // Trava de segurança para manter legível
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + 'px';
    }
});

// 3. Lógica do Botão Interativo: Caixa de Curiosidades Dinâmicas
btnCuriosity.addEventListener('click', () => {
    // Sorteia um índice aleatório baseado no tamanho da nossa lista
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    
    // Atualiza o texto na tela
    curiosityText.textContent = curiosidades[indiceAleatorio];
    
    // Remove a classe que esconde a caixa, tornando-a visível
    curiosityBox.classList.remove('hidden');
});
