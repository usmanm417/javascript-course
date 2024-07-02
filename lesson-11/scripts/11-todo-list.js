const todoList = [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        //this next line is a shortcut for the two lines above
        //const {name, dueDate} = todoObject;
        const html = `
            <div><input type="checkbox">${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        </div>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodoKeydown(event) {
    if (event.key == 'Enter') {
        addTodo();
    }
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const dateInputElement = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = dateInputElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
        //name, dueDate (this line does the same as the above 2)
    });
    inputElement.value = '';
    renderTodoList();
}

