const main = (document => {
    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        // for (let prop in props){
        //     element[prop] = props[prop]; // element.type = props['type'];
        //                                 // element.className = props.className;
        // }

        Object.keys(props).forEach( key => element[key] = props[key]);

        if (children.length >0){
            children.forEach(child => {
                if (typeof child === 'string'){
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
        };
        return element;
    }

    function createTodoItem(title) {
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkbox';

        const label = document.createElement('label');
        label.innerText = title;
        label.className = 'title';

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'textfield';

        const editButton = document.createElement('button');
        editButton.innerText = 'Изменить';
        editButton.className = 'edit';

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Удалить';
        deleteButton.className = 'delete';

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // console.log(listItem);

        bindEvents(listItem);

        return listItem;
    }

    // function createTodoItem(title) {
    //     const checkBox = createElement('input', { type: 'checkbox', className: 'checkbox'});
    //     const label = createElement('label', {className: 'title'}, title);
    //     const editInput = createElement('input', {type: 'text', className: 'textfield'});
    //     const editButton = createElement('button', { className: 'edit'}, 'Изменить');
    //     const deleteButton = createElement('button', { className: 'delete'}, 'Удалить');
    //     const listItem = createElement('li', {className: 'todo-item'}, checkBox, label,
    //         editInput, editButton, deleteButton);
    //
    //     // console.log(listItem);
    //
    //     bindEvents(listItem);
    //
    //     return listItem;
    // }


    function bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');

        checkbox.addEventListener('change', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoItem);
    }

    function addTodoItem(e) {
        e.preventDefault();

        if (addInput.value === '') return alert ('Введите название задачи.');

        const todoItem = createTodoItem(addInput.value)

        todoList.appendChild(todoItem);
        addInput.value = '';
    }

    // function toggleTodoItem({ target }) {
    //     console.log(target);  // target = e.target, но тогда в кач-ве аргумента нужно передавать e
    //     console.log(this);
    // }

    function toggleTodoItem() {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');

    }

    function editTodoItem() {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');

        if (isEditing) {
            title.innerText = editInput.value;
            this.innerText = 'Изменить';
        } else {
            editInput.value = title.innerText;
            this.innerText = 'Сохранить';
        }

        listItem.classList.toggle('editing');
    }

    function deleteTodoItem() {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }

    const todoForm = document.getElementById('todo-form');
    const addInput = document.getElementById('add-input');
    const todoList = document.getElementById('todo-list');
    const todoItems = document.querySelectorAll('.todo-item');

    function main() {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    }

    // main();
    return main;
})(document);

main();

