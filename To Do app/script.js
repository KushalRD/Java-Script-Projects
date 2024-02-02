const inputBox = document.getElementById("inputBox")
const  listContainer = document.getElementById("listContainer")
function addTask()
{
    if (inputBox.value === "")
    {
        alert("You Must Write Something");
    }
    else
    {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData()
}
listContainer.addEventListener('click', function(check){
    if (check.target.tagName === "LI"){
        check.target.classList.toggle("checked");
        saveData()
    }else if(check.target.tagName === "SPAN"){
        check.target.parentElement.remove();
        saveData()
    }


}, false);

function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()