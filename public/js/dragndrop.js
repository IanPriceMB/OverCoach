// $('thing').attr('style', 'background-color: red;width:'+val+';')
const items = document.querySelectorAll('.hero');
const map = document.getElementById('mapzone');
var canvas;

for(const item of items){
    item.addEventListener('dragstart', heroStart);
    item.addEventListener('dragend', heroEnd);
}

function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function heroStart(){
    console.log(this)
    setTimeout(() => (this.className = 'invisible'), 0)
}
function heroEnd(position){
    console.log(this)
    $(this).attr('style', 'position: absolute;top:'+position.y+'px;left:'+position.x+'px;z-index:2;');
    this.className = 'moved';
    $('#mapzone').append(this)

}
