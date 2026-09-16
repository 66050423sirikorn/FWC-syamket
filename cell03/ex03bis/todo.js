$(document).ready(function() {
    loadTodos();

    $('#new_btn').click(function() {
        const text = prompt('Enter a new TO DO:');
        if (text && $.trim(text) !== '') {
            createTodo($.trim(text));
            saveTodos();
        }
    });

    function createTodo(text) {
        const $todoDiv = $('<div></div>').text(text);

        $todoDiv.click(function() {
            if (confirm('Do you really want to delete this TO DO?')) {
                $(this).remove();
                saveTodos();
            }
        });

        $('#ft_list').prepend($todoDiv);
    }

    function saveTodos() {
        const todos = [];
        $('#ft_list div').each(function() {
            todos.push($(this).text());
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
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/;SameSite=Lax";
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
});
