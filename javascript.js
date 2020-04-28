window.addEventListener('DOMContentLoaded', function()
{
    // selecionando o botao de adcionar e fazendo funcionar ao click
    // selecionando o input pegando o seu valor e adicionar a uma lista 
    
    const btnAdc = document.querySelector('.todo-form__btn');
    const input = document.querySelector('.todo-form__input');
    let lista = document.querySelector('.todo__tarefas-lista');
    
    
    function adicionar(){
        const item = document.createElement('li'); 
        item.innerText = input.value;
        lista.appendChild(item);  
        const btnRemover = document.createElement('button');
        item.appendChild(btnRemover);
        btnRemover.addEventListener('click', function(){
            lista.removeChild(item);
        });
    }
    
    btnAdc.addEventListener('click', (e)=>{ 
        e.preventDefault();
        adicionar();
        
    })
    


    
    // removendo tudo 

    const btnRemoveAll = document.querySelector('.todo__remover-todos');

    function removeAll(){
        const apagarTudoPai = document.querySelector('.todo__tarefas')
        const apagarTudo = document.querySelector('.todo__tarefas-lista');
        // apagarTudoPai.removeChild(apagarTudo);
        apagarTudo.remove()


    }

    btnRemoveAll.addEventListener('click', removeAll)




























})



