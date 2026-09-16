window.onload = function() {
    loadTodos();
};

function newTodo() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodo(text.trim());
        saveTodos();
    }
}

function createTodo(text) {
    const ftList = document.getElementById('ft_list');
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    todoDiv.onclick = function() {
        if (confirm('Do you really want to delete this TO DO?')) {
            todoDiv.remove();
            saveTodos();
        }
    };

    ftList.insertBefore(todoDiv, ftList.firstChild);
}

function saveTodos() {
    const ftList = document.getElementById('ft_list');
    const items = ftList.querySelectorAll('div');
    const todos = [];
    items.forEach(item => {
        todos.push(item.textContent);
    });
    setCookie('todo_list', JSON.stringify(todos), 7);
}

function loadTodos() {
    const todos = getCookie('todo_list');
    if (todos) {
        try {
            const list = JSON.parse(todos);
            for (let i = list.length - 1; i >= 0; i--) {
                createTodo(list[i]);
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

