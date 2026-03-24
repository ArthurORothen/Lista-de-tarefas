let btAdicionar = document.querySelector('#btAdicionar')
let btRemover = document.querySelector('#btRemover')
let inputTarefa = document.querySelector('#inputTarefa')
let listaTarefas = document.querySelector('#listaTarefas')
listaTarefas.classList.add('escondido')
function adicionar() {

    if (inputTarefa.value == "") {
        alert("Por favor digite o nome da sua tarefa")
        return
    }

    let novaTarefa = document.createElement('li')
    let checkbox = document.createElement('input')
    let nomeTarefa = document.createElement('span')

    novaTarefa.classList.add('tarefa')
    checkbox.classList.add('checkbox')
    checkbox.type = 'checkbox'
    nomeTarefa.innerText = inputTarefa.value

    novaTarefa.appendChild(checkbox)
    novaTarefa.appendChild(nomeTarefa)

    listaTarefas.appendChild(novaTarefa)


    inputTarefa.value = ''

    listaTarefas.classList.remove('escondido')
}

function remover() {

    let tarefas = document.querySelectorAll('.tarefa')

    tarefas.forEach(tarefa => {
        let checkbox = tarefa.querySelector('input')
        if (checkbox.checked) {
            tarefa.remove()
        }
    if (listaTarefas.children.length == 0) {
        listaTarefas.classList.add('escondido')
    }
    });
}