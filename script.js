const addTask = () => {

    //console.log("works");

    // 追加するTODOの内容を取得
    const addTaskTitle = document.getElementById("addTaskTitle").value;

    //TODOの内容を消去し次のTODOに備える
    document.getElementById("addTaskTitle").value = "";

    //タスク一覧関連の関数を実行
    if(addTaskTitle != ""){
        createTaskList(addTaskTitle);
    }
};

// タスク完了時に消す関数
const deleteCompTask = (target) => {
    document.getElementById("task-list").removeChild(target);
}

// タスク一覧関連の関数
const createTaskList = (text) =>{
    // divの生成
    const div = document.createElement("div");

    // liの生成とliのtextを設定
    const li = document.createElement("li");
    li.innerText = text;

    // Task横の完了ボタンの生成、ボタン押下時のTask削除
    const compButton = document.createElement("button");
    compButton.innerText = "完了";
    compButton.addEventListener("click", () => {
        deleteCompTask(compButton.parentNode);
    })

    div.appendChild(li);
    div.appendChild(compButton);

    document.getElementById("task-list").appendChild(div);
}

// 時間が一桁の時に頭に0を足す関数
const setTimeTo2 = (time) => {
    var ret;
    if(time<10){
        ret = "0" + time;
    }else{
        ret = time;
    }
    return ret;
}

// 日時を表示する関数
const showClock = () => {
    const nowTime = new Date();
    const nowYear = nowTime.getFullYear();
    const nowMonth = nowTime.getMonth();
    const nowDay = nowTime.getDate();
    const nowHour = setTimeTo2(nowTime.getHours());
    const nowMinute = setTimeTo2(nowTime.getMinutes());
    const nowSecond = setTimeTo2(nowTime.getSeconds());

    const msg = "現在:" + nowYear + "/" + (nowMonth+1) + "/" + nowDay + " - " + nowHour + ":" + nowMinute + ":" + nowSecond;
    document.getElementById("RealTimeClock").innerHTML = msg;
}

// 時間の更新を1000ms毎に行う
setInterval('showClock()', 1000);

document
    .getElementById("add-task")
    .addEventListener("click", addTask);