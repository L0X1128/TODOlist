const onClickAdd = () =>{
    const inputTitle = document.getElementById("addTodo").Value;
    const inoutText = document.getElementById("addText").value;
    document.getElementById("addTodo").value ="";
    document.getElementById("addText").value ="";
};

document
    .getElementById("add-task")
    .addEventListener("click", () => onClickAdd());

const div = document.createElement("div");