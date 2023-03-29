// Variaables 

const input = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');
const button = document.getElementById('add-task');


button.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${input.value}`;
    task.appendChild(li);

    let read = document.createElement('button');
    read.innerHTML = '<span class="material-symbols-outlined"> done</span>';
    read.classList.add('read');
    task.appendChild(read);

    let del = document.createElement('button');
    del.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    del.classList.add('del');
    task.appendChild(del);

    if(input.value === ''){
        alert('Enter Somthing!!!!');
    } else {
        taskContainer.appendChild(task);
    }

    input.value = '';

    read.addEventListener('click', () => {
        read.parentElement.style.textDecoration = 'line-through';
    });

    del.addEventListener('click', () => {
        del.parentElement.remove();
    });
})