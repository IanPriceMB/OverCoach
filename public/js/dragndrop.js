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
    console.log(this)
}
function heroEnd(position){
    console.log(this)
    var id = $(this).children().attr('data-name');
    this.className = 'moved';
    heroSize(this);

    var heroWidth = document.getElementById(id).clientWidth/2;
    var heroHeight = document.getElementById(id).clientHeight/2;

    var leftScroll = $('#mapzone').scrollLeft();
    var topScroll = $('#mapzone').scrollTop();
    console.log(this)
    $(this).attr('style', `position: absolute;top:${position.y+topScroll-(heroHeight)}px;left:${position.x+leftScroll}px;z-index:2;${size}`);
    $('#mapzone').append(this)
    console.log(this)
}
var size = "";
function heroSize(ha){
    if ($('#mapMe').hasClass('small')){
        $(ha).children().addClass('movedHero')
        size = 'width: 3%; height: auto;'
    } else if ($('#mapMe').hasClass('medium')){
        $(ha).children().addClass('movedHero')
        size = 'width: 4%; height: auto;'
    } else if ($('#mapMe').hasClass('large')){
        $(ha).children().addClass('movedHero')
        size = 'width: 5%; height: auto;'
    }
}
$('#heroes-btn').on('click', function(){
    $('#mapzone > div').empty()
    $('#redCharacters').empty()
    $('#blueCharacters').empty()
    for (let p = 0; p < charactersArr.length; p++){
        $('#redCharacters').append('<div class="hero" id="red'+charactersArr[p]+'" data-name="red'+charactersArr[p]+'" draggable="true">');
        $('#red'+ charactersArr[p]).append("<img id='redHero"+charactersArr[p]+"' data-name='redHero"+charactersArr[p]+"'>")
        $("#redHero" + charactersArr[p]).attr("src", redPath+charactersArr[p]+'.png');
    }
    for (let p = 0; p < charactersArr.length; p++){
        $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[p]+'" data-name="blue'+charactersArr[p]+'">');
        $('#blue'+ charactersArr[p]).append("<img id='blueHero"+charactersArr[p]+"' data-name='blueHero"+charactersArr[p]+"'>")
        $("#blueHero" + charactersArr[p]).attr("src", bluePath+charactersArr[p]+'.png');
    }

})
