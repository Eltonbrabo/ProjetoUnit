let addBotao = document.getElementById('botao');
let tarefas = document.getElementById('tarefas');
let inputTarefa = document.getElementById('input-tarefa');
addBotao.addEventListener('click', function(){
    if(inputTarefa.value != '') {
        var tarefa = document.createElement('li')
        var botaoRemover = document.createElement('button');
        botaoRemover.innerText = 'X';
        botaoRemover.style.margin = 'auto';
        botaoRemover.addEventListener('click', function () {
            tarefas.removeChild(tarefa);
        });
        tarefa.innerText = inputTarefa.value;
        tarefa.appendChild(botaoRemover);
        
       
        tarefas.appendChild(tarefa);
        

        inputTarefa.value = '';
        
    }
   
})
