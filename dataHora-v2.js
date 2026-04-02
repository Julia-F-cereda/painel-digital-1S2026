
// 1. Objeto de Estilos (Dicionário CSS)
const temas = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    boasVindas: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    dataInfo: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    }
};

// 2. Criação dos Elementos
const elBoasVindas = document.createElement('div');
const elRelogio = document.createElement('div');
const elDataCompleta = document.createElement('div');


// 3. Função para aplicar estilos do objeto
function aplicarEstilos(elemento, estilo) {
    Object.assign(elemento.style, estilo);
}


// 4. Lógica de Atualização
function atualizarPainel() {

    const agora = new Date();
    
    // Saudação baseada na hora
    const horaAtual = agora.getHours();
    let saudacao = "Boa noite";
    if (horaAtual < 12) saudacao = "Bom dia";
    else if (horaAtual < 18) saudacao = "Boa tarde";

    // Dia da semana por extenso
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoes);

    // Inserindo os textos
    elBoasVindas.textContent = `Olá, ${saudacao}!`;
    elRelogio.textContent = agora.toLocaleTimeString('pt-BR');
    elDataCompleta.textContent = dataFormatada;
}


// 5. Inicialização
aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(elBoasVindas, temas.boasVindas);
aplicarEstilos(elRelogio, temas.relogio);
aplicarEstilos(elDataCompleta, temas.dataInfo);

// Adicionando ao DOM
document.body.append(elBoasVindas, elRelogio, elDataCompleta);

// Rodar
setInterval(atualizarPainel, 1000);
atualizarPainel();