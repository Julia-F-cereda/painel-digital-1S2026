const app = () =>{
//crianod os elementos em html
const containerData = document.createElement ('div');
const containerHora = document.createElement ('div');
const containerDiaSemana = document.createElement ('div');

//colocando os elementos
function criarElementos(){
    //colocando eles no corpo da pagina
    document.body.appendChild(containerData);
    document.body.appendChild(containerHora);
    document.body.appendChild(containerDiaSemana);
};

//atualizanod o relogio
function atualizarRelogio(){
    const agora = new Date();

    //atualizando só o conteudo de cada containert
    containerData.textContent = agora.toLocaleDateString();
    containerHora.textContent = agora.toLocaleTimeString();
    containerDiaSemana.textContent = agora.toLocaleDateString('pt-br', {weekday: 'long'});

};

//aplicando estilos
function aplicarEstilos(){
    document.body.style.display = 'flex';
    document.body.style.widht = '100vw';
    document.body.style.height = '100vh';
    document.body.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.alignItems = 'center';
    document.body.style.flexDirection = 'column';
    document.body.style.color = 'brown';
    document.body.style.fontSize = '40px';
    document.body.style.justifyContent = 'center';
    document.body.style.backgroundColor = 'bisque';

};

//chamando as funções
criarElementos();
atualizarRelogio();
aplicarEstilos();
setInterval(atualizarRelogio, 1000); //interval atualiza o valor de segundos em sgundo
};


app();

