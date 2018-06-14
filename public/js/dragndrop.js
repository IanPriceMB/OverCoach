var items = document.querySelectorAll('.hero');
var map = document.getElementById('mapzone');
//setting shit up
var redCharacters = [];
var redHeroCharacters = [];
var previousState;
function run(){
    for (i = 0; i < charactersArr.length; i ++){
        redCharacters.push('red' + charactersArr[i])
        redCharacters.push('blue' + charactersArr[i])
    }
}
function run2(){
    for (i = 0; i < charactersArr.length; i ++){
        redHeroCharacters.push('redHero' + charactersArr[i])
        redHeroCharacters.push('blueHero' + charactersArr[i])
    }
}
run();
run2();
//giving drag functionality to the heroes
function dragability(){
    items = document.querySelectorAll('.hero');
    map = document.getElementById('mapzone');
    for(const item of items){
        item.addEventListener('dragstart', heroStart);
        item.addEventListener('dragend', heroEnd);
    }
}
dragability();
function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}
function heroStart(){
    setTimeout(() => (this.className = 'invisible'), 0)
}
//dynamically creating heroes
var heroObj ={};
var hero;
OnBoard = function (ha, pos){
    this.name = $(ha).attr('data-name');
    this.id = $(ha).children().attr('data-name');

    this.heroHeight = document.getElementById(this.id).height/2;
    this.leftScroll = $('#mapzone').scrollLeft();
    this.topScroll = $('#mapzone').scrollTop();

    this.posX = pos.x+this.leftScroll;
    this.posY = pos.y+this.topScroll-this.heroHeight;
}

function findHero(hero){
    var posX;
    var posY;
    for (var i = 0; i < redCharacters.length; i++){
        if(redCharacters[i]===$(hero).attr('data-name')){
            for (key in heroObj){
                if(redCharacters[i] == heroObj[key].name){
                    posX = heroObj[key].posX
                    posY = heroObj[key].posY
                }
            }
        }
    }
    $(hero).attr('style', `position: absolute;top:${posY}px;left:${posX}px;z-index:10;width: 3%; height: auto;`)
}
function heroEnd(position){
    hero = $(this).attr('data-name');
    heroObj[hero] = new OnBoard(this, position)  
    this.className = 'moved'; 
    heroSize(this);
    findHero(this);
    $('#mapzone').append(this)
}

//making the hero icons small on the map
function heroSize(ha){
    $(ha).children().addClass('movedHero')
}
// clicking the clear heroes button
$('#heroes-btn').on('click', function(){
    $('#mapzone > div').remove()
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
    dragability();
})
//rezising the heros already on the map on zoom 
function smallHero(hero){
    for (var i = 0; i < redCharacters.length; i++){
        if(redHeroCharacters[i]===$(hero).attr('data-name')){
            for (key in heroObj){
                if(redCharacters[i] == heroObj[key].name){
                    if(previousState=='large'){
                        heroObj[key].posX/=2;
                        heroObj[key].posY/=2;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } else if (previousState=='medium'){
                        heroObj[key].posX/=1.5;
                        heroObj[key].posY/=1.5;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } 
                }
            }
        }
    }
}
function mediumHero(hero){
    for (var i = 0; i < redCharacters.length; i++){
        if(redHeroCharacters[i]===$(hero).attr('data-name')){
            for (key in heroObj){
                if(redCharacters[i] == heroObj[key].name){
                    if(previousState=='small'){
                        heroObj[key].posX*=1.5;
                        heroObj[key].posY*=1.5;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } else if (previousState=='large'){
                        heroObj[key].posX*=.75;
                        heroObj[key].posY*=.75;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } 
                }
            }
        }
    }
}

function largeHero(hero){
    for (var i = 0; i < redCharacters.length; i++){
        if(redHeroCharacters[i]===$(hero).attr('data-name')){
            for (key in heroObj){
                if(redCharacters[i] == heroObj[key].name){
                    if(previousState=='small'){
                        heroObj[key].posX*=2;
                        heroObj[key].posY*=2;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } else if (previousState=='medium'){
                        heroObj[key].posX/=.75;
                        heroObj[key].posY/=.75;
                        $(hero).parent().attr('style', `position: absolute;top:${heroObj[key].posY}px;left:${heroObj[key].posX}px;z-index:10;width: 3%; height: auto;`)
                    } 
                }
            }
        }
    }
}
$('#zoom-small').on('click', function(){
    $('.movedHero').each(function(){
        smallHero(this);
    })
    previousState = $(this).attr('data-name');
}) 
$('#zoom-medium').on('click', function(){
    $('.movedHero').each(function(){
        mediumHero(this);
    })
    previousState = $(this).attr('data-name');
}) 
$('#zoom-large').on('click', function(){
    $('.movedHero').each(function(){
        largeHero(this);
    })
    previousState = $(this).attr('data-name');
}) 