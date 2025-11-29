const input = document.getElementById('input-text')
const button = document.getElementById('add-button')
const list = document.getElementById('task-list')

let myList = []

const addTask = () =>{
    //pega o que esta no input
    myList.push(
        {tarefa: input.value, concluida: false}
    )

    input.value = ''
    textIn()
}
const textIn = () =>{
    list.innerHTML = ''
    myList.forEach((element, index) => {
        list.innerHTML += `
            <li class="task ${element.concluida && "done"}">

                <img
                src="/assets/${element.concluida ? 'checked.png' : 'unchecked.png'}"
                onclick="concluirTarefa(${index})"
                >
                

                <p>${element.tarefa}</p>

                <img src="/assets/lixeira.png"
                onclick="deletarItem(${index})"
                >
            </li>
        `
    });
}

const concluirTarefa = (index) =>{
    myList[index].concluida = !myList[index].concluida

    textIn()
}

const deletarItem = (index) =>{
    myList.splice(index, 1)
    textIn()
}

button.addEventListener('click', addTask)