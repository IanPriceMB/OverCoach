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
    $('#redCharacters').append('<div class="hero" id="red'+charactersArr[p]+'" data-name="red'+charactersArr[p]+'" draggable="true">');
    $('#red'+ charactersArr[p]).append("<img id='redHero"+charactersArr[p]+"' data-name='redHero"+charactersArr[p]+"'>")
    $("#redHero" + charactersArr[p]).attr("src", redPath+charactersArr[p]+'.png');
}
for (let p = 0; p < charactersArr.length; p++){
    $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[p]+'" data-name="blue'+charactersArr[p]+'">');
    $('#blue'+ charactersArr[p]).append("<img id='blueHero"+charactersArr[p]+"' data-name='blueHero"+charactersArr[p]+"'>")
    $("#blueHero" + charactersArr[p]).attr("src", bluePath+charactersArr[p]+'.png');
}
for (let i = 0; i < mapsArr.length; i++){
    $("#mapDropDown").append("<div class='map-name' id='"+mapsArr[i]+"' data-img-src='" + mapPath + mapsArr[i] +".png'>")
    $('#'+mapsArr[i]).text(mapsArr[i].replace(/_/g, " "));
}

// creating dropdowns the map of choice and the zoom buttons
$(document).ready(function(){
    $('.dropDownMapsBtn').on('click', function(){
        document.getElementById("mapDropDown").classList.toggle("show");
    })
    $('.dropDownColorsBtn').on('click', function(){
        document.getElementById("colorDropDown").classList.toggle("show");
    })
    $('.map-name').on('click', function(){
        previousState = 'small';
        var path = $(this).attr('data-img-src')
        $('.map-div').empty()
        var img = new Image();
        img.src = path;
        $('.map-div').append(img)
        $('.map-div > img').attr("id", "mapMe")
        $('#mapMe').addClass('small')
        matchCanvas();
    })
    $('#zoom-small').on('click', function(){
        document.getElementById("mapMe").className = "small";
        matchCanvas2()
    })
    $('#zoom-medium').on('click', function(){
        document.getElementById("mapMe").className = "medium";
        matchCanvas2()
    })
    $('#zoom-large').on('click', function(){
        document.getElementById("mapMe").className = "large";
        matchCanvas2()
    })
});
// this whole section is for dynamically matching the canvas to the map size
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
    context.lineWidth = 4;
    context.lineCap = 'round';

    canvas.addEventListener('mousedown', dragStart, false);
    canvas.addEventListener('mousemove', drag, false);
    canvas.addEventListener('mouseup', dragStop, false);
}