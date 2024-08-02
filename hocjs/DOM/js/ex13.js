var checkAll = document.querySelector(".checkAll");
var checkItem = document.querySelectorAll(".checkItem");

checkAll.addEventListener("change",function(){
    var status = checkAll.checked;
    checkItem.forEach(function(item){
        item.checked = status;
    })
})
checkItem.forEach(function(item){
    item.addEventListener("change",function(){
        var status = Array.from(checkItem).every(function(element){
            return element.checked;
        });
        checkAll.checked = status;
    })
})