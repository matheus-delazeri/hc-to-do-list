function createItem(){
    var text = document.getElementById("inputItem").value
    if(text != ""){
        var item = document.createElement("li")
        item.innerText = text + " - " + getTime()
        item.className = "list-item"
        document.getElementById("container").appendChild(item)
        clearInput()
    }else{
        alert("Please insert some text!")
    }
}
function clearItems(){
    var items = document.getElementsByClassName("list-item")
    var len = items.length
    for(var i=0;i<len;i++){
        if(i==len-1){
            items[0].remove()
        }else{
            items[i].remove()
        }
    }
}

function getTime(){
    return new Date().toLocaleString();
}

function clearInput(){
    document.getElementById("inputItem").value = ""
}