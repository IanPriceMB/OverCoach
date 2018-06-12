// $('thing').attr('style', 'background-color: red;width:'+val+';')
const items = document.querySelectorAll('.hero');
const map = document.getElementById('mapzone');
// var canvas;

for(const item of items){
    item.addEventListener('dragstart', heroStart);
    item.addEventListener('dragend', heroEnd);
}

function getCanvasCoordinates(event) {
    // var x = event.clientX - canvas.getBoundingClientRect().left,
    //     y = event.clientY - canvas.getBoundingClientRect().top;
    var x = event.clientX - $('#mapme').getBoundingClientRect().left,
    y = event.clientY - $('#mapme').getBoundingClientRect().top;
console.log($('#mapme').getBoundingClientRect().top)

    return {x: x, y: y};
}
function heroStart(){
    setTimeout(() => (this.className = 'invisible'), 0)
}
function heroEnd(position){
    var id = $(this).attr('data-name');
    this.className = 'moved';
    var heroWidth = document.getElementById(id).clientWidth/2;
    var heroHeight = document.getElementById(id).clientHeight/2;
    $(this).attr('style', 'position: absolute;top:'+(position.y-heroHeight)+'px;left:'+(position.x-heroWidth)+'px;z-index:2;');
    $('#mapzone').append(this)

}
