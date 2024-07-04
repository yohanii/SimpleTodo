const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', add);

function add(event) {
    const list = document.getElementById('todo-list');

    const input = document.getElementById('todo-input');
    const elem = document.createElement('li');
    elem.append(input.value);

    list.append(elem);
}