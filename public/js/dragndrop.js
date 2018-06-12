// $('thing').attr('style', 'background-color: red;width:'+val+';')
const items = document.querySelectorAll('.hero');
const map = document.getElementById('mapzone');
// var canvas;

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
    setTimeout(() => (this.className = 'invisible'), 0)
}
function heroEnd(position){
    var id = $(this).attr('data-name');
    this.className = 'moved';

    var heroWidth = document.getElementById(id).clientWidth/2;
    var heroHeight = document.getElementById(id).clientHeight/2;

    var leftScroll = $('#mapzone').scrollLeft();
    var topScroll = $('#mapzone').scrollTop();
    console.log(leftScroll)
    console.log(topScroll)

    $(this).attr('style', 'position: absolute;top:'+(position.y+topScroll-heroHeight)+'px;left:'+(position.x+leftScroll-heroWidth)+'px;z-index:2;');
    $('#mapzone').append(this)

}
