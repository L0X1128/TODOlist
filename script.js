const tasks = [];

const taskValue = document.getElementesById('add-task');

taskValue.addEventListener('submit', (event) => {

    event.preventDefault();

    const nameValue = document.getElementesById('add-task-value').value;

    if(!nameValue) return;

    const task = {id: tasks.length+1, name:nameValue};

    console.log("登録しました")
})