import {fetchTasks} from "./classTasks.js";
const classFetch = new  fetchTasks();
let allTasks = [];
let valueInput = '';
let input = '';
let activeEditTask = null;

window.onload = async function init() {
    try {
        input = document.getElementById('add-task');
        input.value = '';
        input.addEventListener('change', updateValue);
        const response = await classFetch.fetchGetTasks();
        allTasks = response.data;
        render();
    }catch (e) { console.log(e); }
}

const onClickButton = async () => {
    try {
        const response = await classFetch.fetchPostTasks(valueInput);
        allTasks.push(response);
        valueInput = '';
        input.value = '';
        render();
    }catch (e) { console.log(e); }

}

const onChangeCheckbox = async (index) => {
    try {
        allTasks[index].isCheck = !allTasks[index].isCheck;
        render();
    }catch (e) { console.log(e); }
}

const updateTaskText = (event) => {
    allTasks[activeEditTask].text = event.target.value;
    render();
}

const updateValue = (event) => {
    valueInput = event.target.value;
}

const doneEditTask = async () => {
    try {
        await classFetch.fetchPatchTask(allTasks[activeEditTask]);
        activeEditTask = null;
        render();
    }catch (e) { console.log(e); }
}

const onDeleteTask = async (taskId) => {
    try {
        const response = await classFetch.fetchDeleteTask(taskId);
        // const result = await response.json();
        if (response.status >= 200 && response.status < 400) {
            allTasks = allTasks.filter(item => item._id !== taskId);
            render();
        }
    }catch(e) { console.log(e); }
}

const clearButton = async () => {
    try {
        const response = await classFetch.fetchDeleteAllTask();

        if (response.status >= 200 && response.status < 400) {
            allTasks = [];
            render();
        }
    }catch (e) { console.log(e); }

}

const render = () => {
    const content = document.getElementById('content-page');
    const addButton = document.getElementById(`addButton`);
    const clearDB = document.getElementById('clearDB');
    addButton.onclick = async () => await onClickButton();
    clearDB.onclick = async () => await clearButton();
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    allTasks.map((item, index) => {
        const container = document.createElement('div');
        const checkbox = document.createElement('input');
        container.className = 'task-container';
        checkbox.type = 'checkbox';
        checkbox.checked = item.isCheck;
        checkbox.onchange = async () => await onChangeCheckbox(index);
        container.appendChild(checkbox);

        if (index === activeEditTask) {
            const inputTask = document.createElement('input');
            inputTask.type = 'text';
            inputTask.value = item.text;
            inputTask.addEventListener('change', updateTaskText);
            inputTask.addEventListener('blur', doneEditTask);
            container.appendChild(inputTask);
        } else {
            const text = document.createElement('p');
            text.innerText = item.text;
            text.className = item.isCheck ? 'text-task done-text' : 'text-task';
            container.appendChild(text);
        }

        if (!item.isCheck) {

            if (index === activeEditTask) {

                const imageDone = document.createElement('img');
                imageDone.src = 'images/done.svg';
                imageDone.onclick = async () => doneEditTask();
                container.appendChild(imageDone);
            } else {
                const imageEdit = document.createElement('img');
                imageEdit.src = 'images/edit.svg';
                imageEdit.onclick = () => {
                    activeEditTask = index;
                    render();
                };
                container.appendChild(imageEdit);
            }
            const imageDelete = document.createElement('img');
            imageDelete.src = 'images/close.svg'
            imageDelete.onclick = async () => await onDeleteTask(item._id);
            container.appendChild(imageDelete);
        }
        content.appendChild(container);
    });
}