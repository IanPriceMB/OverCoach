const mapsArr=
    [
        "Blizzard_World",
        "Dorado",
        "Eichenwalde",
        "Hanamura",
        "Hollywood",
        "Horizon_Lunar_Colony",
        "Ilios",
        "Junkertown",
        "Kings_Row",
        "Lijiang_Tower",
        "Nepal",
        "Numbani",
        "Oasis",
        "Route_66",
        "Temple_of_Anubis",
        "Volskaya_Industries",
        "Watchpoint_Gibraltar",
    ]
const charactersArr= 
[
    'Ana', 'Bastion', 'Brigette', 'Doomfist',
    'Dva', 'Genji', 'Hanzo', 'Junkrat',
    'Lucio', 'McCree', 'Mei', 'Mercy',
    'Moira', 'Orisa', 'Phara', 'Reaper',
    'Reinhardt', 'Soldier', 'Sombra', 'Symmetra',
    'Torbjorn', 'Tracer', 'Widowmaker', 'Winston',
    'Zarya', 'Zenyatta'
]
const mapPath = "/OverCoach/OverwatchMaps/"
const redPath = '/OverCoach/redHeroes/'
const bluePath = '/OverCoach/blueHeroes/'

for (let p = 0; p < charactersArr.length; p++){
    $('#redCharacters').append('<div class="hero" id="red'+charactersArr[p]+'" draggable="true">');
    $('#red'+ charactersArr[p]).append("<img id='redHero"+charactersArr[p]+"'>")
    $("#redHero" + charactersArr[p]).attr("src", redPath+charactersArr[p]+'.png');
}
for (let p = 0; p < charactersArr.length; p++){
    $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[p]+'">');
    $('#blue'+ charactersArr[p]).append("<img id='blueHero"+charactersArr[p]+"'>")
    $("#blueHero" + charactersArr[p]).attr("src", bluePath+charactersArr[p]+'.png');
}
for (let i = 0; i < mapsArr.length; i++){
    console.log('hi')
    $("#mapDropDown").append("<div class='map-name' id='"+mapsArr[i]+"' data-img-src='" + mapPath + mapsArr[i] +".png'>")
    $('#'+mapsArr[i]).text(mapsArr[i].replace(/_/g, " "));
}


$(document).ready(function(){
    $('.dropDownMapsBtn').on('click', function(){
        document.getElementById("mapDropDown").classList.toggle("show");
    })
    $('.dropDownColorsBtn').on('click', function(){
        document.getElementById("colorDropDown").classList.toggle("show");
    })
    $('.map-name').on('click', function(){
        var path = $(this).attr('data-img-src')
        $('.map-div').empty()
        $('.map-div').append('<img id="mapMe">')
        $('#mapMe').attr('src', path)
        matchCanvas();
    })
    $('#zoom-small').on('click', function(){
        document.getElementById("mapMe").classList.toggle("small");
        matchCanvas2()
    })
    $('#zoom-medium').on('click', function(){
        document.getElementById("mapMe").classList.toggle("medium");
        matchCanvas2()
    })
    $('#zoom-large').on('click', function(){
        document.getElementById("mapMe").classList.toggle("large");
        matchCanvas2()
    })
});
function matchCanvas() {
    var scrollDiv = document.createElement("div");

    scrollDiv.className = "scrollbar-measure";
    document.getElementById('mapzone').appendChild(scrollDiv);
    
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    var scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.getElementById('mapzone').removeChild(scrollDiv);

    var myCanvas = document.getElementById("drawzone");
    myCanvas.width = (document.getElementById('mapzone').clientWidth)-scrollbarWidth;
    myCanvas.height = (document.getElementById('mapzone').clientHeight)-scrollbarHeight;

    init();
}
function matchCanvas2() {
    var myCanvas = document.getElementById("drawzone");
    myCanvas.width = (document.getElementById('mapzone').clientWidth)-scrollbarWidth;
    myCanvas.height = (document.getElementById('mapzone').clientHeight)-scrollbarHeight;

    init();
}


function init() {
    canvas = document.getElementById('drawzone');
    context = canvas.getContext('2d');
    context.strokeStyle = colorChoice;
    context.lineWidth = 10;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}