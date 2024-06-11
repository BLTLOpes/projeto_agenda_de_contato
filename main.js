const form = document.getElementById('form-Contatos');
const nome = [];
const contato = [];
const tabela = document.querySelector('#tabela-contato');
let linhas = '';

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    aidicionaLinhaContato();
    atualizarContato();
})

function aidicionaLinhaContato (){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nome.includes(inputNomeContato.value)){
        alert(`Contato ${inputNomeContato.value} já foi adicionado`)
    } else {
        nome.push(inputNomeContato.value);
        contato.push(parseFloat(inputTelefoneContato.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${inputTelefoneContato.value}</td>`;
    linha += `<td class="td-acoes">
                <span class="btn-excluir">Excluir</span>
                </td>`;
    linha += `</tr>`;

    linhas += linha;

    };
    
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
    
}

function atualizarContato () {
    const bodytabela = document.querySelector('tbody');
    bodytabela.innerHTML = linhas;
}

tabela.addEventListener('click', function(event) {
    let elementoClicado = event.target;

    if (elementoClicado.classList.contains('btn-excluir')) {
        let celulaClicada = elementoClicado.parentNode;
        let celula = celulaClicada.parentNode;
        celula.remove()

    };
});