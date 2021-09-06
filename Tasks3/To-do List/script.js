let allTasks = JSON.parse(localStorage.getItem('tasks')) || [];
let valueInput = '';
let input = '';
let activeEditTask = null;

window.onload = function init () {
    input = document.getElementById('add-task');
    input.value = '';
    input.addEventListener('change', updateValue);
    render();
}

updateValue = (event) => {
    valueInput = event.target.value;
}

onClickButton = () => {
    allTasks.push({
        text: valueInput,
        isCheck: false
    });
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    valueInput = '';
    console.log(valueInput);
    input.value = '';
    render();
}

clearButton = () => {
    localStorage.removeItem('tasks');
    onDeleteTask(0, allTasks.length);
}

render = () => {
    const content = document.getElementById('content-page');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    allTasks.sort((a, b) => a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0);

    allTasks.map((item, index) => {
        const container = document.createElement('div');
        const checkbox = document.createElement('input');
        container.className = 'task-container';
        checkbox.type = 'checkbox';
        checkbox.checked = item.isCheck;
        checkbox.onchange = function (){onChangeCheckbox(index);};
        container.appendChild(checkbox);

        if (index === activeEditTask){
            const inputTask = document.createElement('input');
            inputTask.type = 'text';
            inputTask.value = item.text;
            inputTask.addEventListener('change', updateTaskText);
            inputTask.addEventListener('blur', doneEditTask);
            container.appendChild(inputTask);
        } else {
            const text = document.createElement('p');
            text.innerText = item.text;
            text.className = item.isCheck ? 'text-task done-text': 'text-task';
            container.appendChild(text);
        }

        if (!item.isCheck) {

            if (index === activeEditTask) {

                const imageDone = document.createElement('img');
                imageDone.src = 'images/done.svg';
                imageDone.onclick = function () {
                    doneEditTask();
                };
                container.appendChild(imageDone);
            } else {
                const imageEdit = document.createElement('img');
                imageEdit.src = 'images/edit.svg';
                imageEdit.onclick = function () {
                    activeEditTask = index;
                    render();
                };
                container.appendChild(imageEdit);
            }
            const imageDelete = document.createElement('img');
            imageDelete.src = 'images/close.svg'
            imageDelete.onclick = function () {
                onDeleteTask(index);
            };
            container.appendChild(imageDelete);
        }
        content.appendChild(container);
    });
}

onChangeCheckbox = (index) => {
    allTasks[index].isCheck = !allTasks[index].isCheck;
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    render();
}

onDeleteTask = (index1, index2 = 1) => {
    allTasks.splice(index1, index2);
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    render();
}

updateTaskText = (event) => {
    allTasks[activeEditTask].text = event.target.value;
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    render();
}

doneEditTask = () => {
    activeEditTask = null;
    localStorage.setItem('tasks', JSON.stringify(allTasks));
    render();
}
