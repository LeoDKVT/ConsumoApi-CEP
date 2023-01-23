const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

const logradouro = document.getElementById('logradouro');


btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        resultadoCep.innerText = body;
    });
}