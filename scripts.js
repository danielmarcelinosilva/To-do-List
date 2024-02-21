const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = []

//if(input.value = "none" && alert('VOCÊ NÃO PODE ADICIONAR TAREFAS VAZIAS!')) 
function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(index) {
    let novaLi = ''

    // ['Comprar café', 'Estudar programação']

    minhaListaDeItens.forEach((item, index) => {
        novaLi = novaLi + `
                    
            <li class="task ${item.concluida && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa" onclick="deletarItem(${index})">
            </li>

            `
        
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(index){ 
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida

    mostrarTarefas()
}



function deletarItem(index){
        minhaListaDeItens.splice(index, 1)
        
        mostrarTarefas()
}

function recarregarTarefas(){    
    const tareasDoLocalStorage = localStorage.getItem('lista')

    if(tareasDoLocalStorage){ //Se não tiver nenhum item o programa para de buscar no localstorage
    minhaListaDeItens = JSON.parse(tareasDoLocalStorage)
    }
    
    mostrarTarefas()
}

    // <li class="task">
    //            <img src="./img/checked.png" alt="check-na-tarefa">
    //            <p>Dar o like e se inscrever no canal</p>
    //            <img src="./img/trash.png" alt="tarefa">
    //        </li>


recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
