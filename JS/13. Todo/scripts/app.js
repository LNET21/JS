import Item from "./item.js";

((todo) => {
    const items = document.querySelector('#toDoItems');


    todo.save = function(){
        let items  = document.querySelectorAll('li');
        let result = Array.from(items).map(i => new Item(i.childNodes[0].nodeValue, i.classList.contains('change')));
        localStorage.setItem('items', JSON.stringify(result));
        // let res = localStorage.getItem('items');
        // console.log(res);
    }

    todo.additem = function(event){
        event.preventDefault();
        const input = this['todoInput'];
        const li = createElement(input);
        items.appendChild(li);
        input.value = '';
    }

    const createElement = input => {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        li.classList.add('list-group-item') 
        li.addEventListener('click', change);

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger');
        button.innerHTML = 'X';
        button.addEventListener('click', remove);

        li.appendChild(button);

        return li;
    }

    function change(){
        this.classList.toggle('change');
    }

    function remove(){
        this.parentElement.remove();
    }

})(window.todo = window.todo || {});

document.querySelector('#todoForm').addEventListener('submit', todo.additem);
document.querySelector('h1').addEventListener('click', todo.save);