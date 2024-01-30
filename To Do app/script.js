const addTask = document.querySelector('.add');
const taskName = document.querySelector('.task');
const check= document.querySelector('.check');



function add(info)
{
    document.querySelector('.task1').innerHTML =info.value ;
}

function checkClick(){
    check.src = "images/checked.png"
    document.querySelector('.task1').style.textDecoration = "line-through" ;
    document.querySelector('.task1').style.opacity ="50%" ;
    

}

check.addEventListener("click",() => {
    checkClick()
    
})
addTask.addEventListener("click",() => {
    add(taskName)
    
})