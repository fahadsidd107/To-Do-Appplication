var list= document.getElementById('list')

function add(){
    var input = document.getElementById('input')
    var li= document.createElement('li')
    var liText= document.createTextNode(input.value)
    li.appendChild(liText)

    // var edtBtn = document.createElement('button')
    // var edtText = document.createTextNode("EDIT")
    // edtBtn.appendChild(edtText)
        // li.appendChild(edtBtn)
    // edtBtn.setAttribute('class','edtbtn')
    // edtBtn.setAttribute('onclick','edt(this)')

    var createedt = document.createElement('i');
    createedt.setAttribute("class","fa fa-pencil-square-o");
    createedt.setAttribute("aria-hidden","true");
    li.appendChild(createedt);
    createedt.setAttribute("onclick","edt(this)")


    // var dltBtn = document.createElement('button')
    // var dltText = document.createTextNode("DELETE")
    // dltBtn.appendChild(dltText)
    // li.appendChild(dltBtn)
    // dltBtn.setAttribute('class','delbtn')

    var createdlt = document.createElement('i');
    createdlt.setAttribute("class","fa fa-trash");
    createdlt.setAttribute("aria-hidden","true");
    li.appendChild(createdlt);
    createdlt.setAttribute('onclick','dlt(this)')


    list.appendChild(li)
    input.value=""
    var h= document.createElement('hr')
    list.appendChild(h)
}
function dlt(e){
    e.parentNode.remove()
}
function dltall(){
    list.innerHTML = ""
}
function edt(e){
   var edit=e.parentNode.firstChild.nodeValue
   var editValue = prompt("Enter the Changes",edit)
   e.parentNode.firstChild.nodeValue = editValue
}