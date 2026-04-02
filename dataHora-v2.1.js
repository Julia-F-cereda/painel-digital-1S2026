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

//crinaod os elementos
const boasVindas = document.createElement('div');
const relogio = document.createElement('div');
const data = document.createElement('div');



//3 aplicar estilos do obhj
function aplicarEstilos(elemento, estilo){
    Object.assign(elemento.style, estilo);
}

//função de saudacao
function boasVindass(){
    const agora = new Date();
        const horaAtual = agora.getHours();
        let saudacao = "Boa Noite";
        if(horaAtual < 12) saudacao= "Bom dia";
        else if (horaAtual < 18) saudacao= "Boa tarde";
};

//função das opções
function opcoess(){
    let opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };
};

function dataFormatadaa(){
    let dataFormatada = agora.toLocaleDateString('pt-BR', opcoess);

};


//4 logica de atualização
function atualizarPainel(){

    //inserindo textro 
    boasVindas.textContent = `Olá, ${saudacao}`
    relogio.textContent = agora.toLocaleDateString('pt-BR');
    data.textContent = dataFormatadaa;
};

//5 inicializando

aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(boasVindass, temas.boasVindas);
aplicarEstilos(opcoess, temas.relogio);
aplicarEstilos(dataFormatadaa, temas.dataInfo);

// Adicionando ao DOM
document.body.append(boasVindas, data, relogio);

// Rodar
setInterval(atualizarPainel, 1000);
atualizarPainel();