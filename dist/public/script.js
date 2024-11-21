"use strict";
let addForm = document.getElementById('addToDoForm');
addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    let input = document.getElementById('todoText');
    if (input.value.trim()) {
        const response = await fetch('add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: input.value.trim() })
        });
        if (response.ok) {
            location.reload();
            addForm.reset();
        }
    }
});
let taskList = document.getElementById('todoUl');
taskList.addEventListener('click', async (event) => {
    let target = event.target.closest('button');
    if (!target)
        return;
    const taskId = target.getAttribute('data-task-id') ? Number(target.getAttribute('data-task-id')) : null;
    if (!taskId)
        return;
    if (target.id === 'delete-btn') {
        let taskId = Number(target.getAttribute('data-task-id'));
        const response = await fetch('delete-task', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ id: taskId })
        });
        if (response.ok) {
            location.reload();
        }
    }
    else if (target.id === 'done-btn') {
        let tastId = Number(target.getAttribute('data-task-id'));
        const response = await fetch('complete-task', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: tastId })
        });
        if (response.ok) {
            location.reload();
        }
    }
    else if (target.id === 'edit-btn') {
        let id = Number(target.getAttribute('data-task-id'));
        let spanElement = document.getElementById(`task-title-${id}`);
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = spanElement.innerText;
        inputElement.id = 'edit-input';
        inputElement.style.padding = '12px';
        inputElement.style.width = 'calc(100% - 40px)';
        inputElement.style.border = '2px solid var(--accent-color)';
        inputElement.style.borderRadius = '10px';
        inputElement.style.font = 'inherit';
        inputElement.style.color = 'var(--text-color)';
        inputElement.style.backgroundColor = 'var(--primary-color)';
        spanElement.replaceWith(inputElement);
        inputElement.focus();
        target.classList.replace('fa-pencil', 'fa-floppy-o');
        target.setAttribute('id', 'save-btn');
    }
    else if (target.id === 'save-btn') {
        let id = Number(target.getAttribute('data-task-id'));
        let title = document.getElementById('edit-input');
        const response = await fetch('edit-task', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id, title: title.value })
        });
        if (response.ok) {
            location.reload();
        }
    }
});
