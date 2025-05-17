const inputbx=$("#input-bx")
const cont=$(".task-container")
function addTask(){
    if(inputbx.val()==='')
    {
        alert("You should write something");
    }
    else{
       let li= $("<li></li>")
       li.text(inputbx.val())
       cont.append(li)
       let span=$("<span></span>")
       span.text("\u00d7")
       li.append(span)
    }
    inputbx.val("")
    saveData()
}
cont.on("click", "li", function() {
    $(this).toggleClass("checked");
    saveData()
});
cont.on("click", "span", function() {
    $(this).parent().remove();
    saveData()
});
function saveData()
{
    localStorage.setItem("data",cont.html())
}

function showData() {
    cont.html(localStorage.getItem("data"));
}

showData(); 