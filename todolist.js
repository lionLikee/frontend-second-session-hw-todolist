function todoadd(){
    var todoText=document.getElementById("todoInput").value;
    
    //아무것도 입력하지 않고 +를 눌렀을때 경고창
    if(todoText===""){
        alert("할 일을 입력하세요.");
        return;
    }
    // div로 todolist목록 칸 만들기
    var todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    //input으로 체크박스 만들고 css에서 조작하기 워해 이름 부여
    var ListCheckbox = document.createElement("input")
    ListCheckbox.type="checkbox";
    ListCheckbox.name="myCheckbox";
    
    //span으로 입력한값 넣을 수 있는 공간 만들기
    var textSpan=document.createElement("span");
    textSpan.textContent = todoText;

    //button으로 x표시 만들고 css에서 조작하기 위해 이름 부여
    var deletebutton=document.createElement("button");
    deletebutton.innerText="x";
    deletebutton.name="myDeletebutton";

    //생성한 요소들을 todoItem의 자식요소들로 append
    todoItem.appendChild(ListCheckbox);
    todoItem.appendChild(textSpan);
    todoItem.appendChild(deletebutton);
    
    //deletebutton을 동작하게 하는 함수호출(deleteList(e) 함수)
    deletebutton.addEventListener("click", deleteList); 

    
    document.getElementById("todoList").appendChild(todoItem); //html 파일의 todoList 자식요소로 todoItem append
  
    
    document.getElementById("todoInput").value = ""; //입력필드 비우기
}

function deleteList(e){ //삭제 버튼(x) 클릭시 
    var removeList = e.target.parentElement; 
    removeList.remove();
}

function todoAlldelete(){ //전체삭제 클릭시
    const parent=document.getElementById("todoList");
    parent.replaceChildren();
}

function todoCheckComplete() { //완료 클릭시
    var checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.nextElementSibling.style.textDecoration = "line-through";
        } else {
            checkbox.nextElementSibling.style.textDecoration = "none";
        }
    });
}

function todoBookmark(){ //별표 클릭시
    var checkboxes = document.querySelectorAll('.todo-item input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var text=checkbox.nextElementSibling;
            text.classList.add("highlight");
        } 
    });
}




