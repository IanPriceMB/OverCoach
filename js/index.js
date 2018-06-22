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
        "Rialto",
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
    'Reinhardt', 'Roadhog', 'Soldier', 'Sombra', 'Symmetra',
    'Torbjorn', 'Tracer', 'Widowmaker', 'Winston',
    'Zarya', 'Zenyatta'
]
// some path variables
const mapPath = "static/OverwatchMaps/"
const redPath = 'static/redHeroes/'
const bluePath = 'static/blueHeroes/'

$(document).ready(function(){
    //filling up the character zones
    for (let a = 0; a < charactersArr.length; a++){
        $('#redCharacters').append('<div class="hero" id="red'+charactersArr[a]+'" data-name="red'+charactersArr[a]+'" move-target="red">');
        let cw = $('.hero').width();
        $('#red'+ charactersArr[a]).append("<img id='redHero"+charactersArr[a]+"' data-name='redHero"+charactersArr[a]+"' move-target='red'>")
        $('#redHero'+charactersArr[a]).css({'height':cw+'px'});
        $("#redHero" + charactersArr[a]).attr("src", redPath+charactersArr[a]+'.png');
    }
    for (let b = 0; b < charactersArr.length; b++){
        $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[b]+'" data-name="blue'+charactersArr[b]+'" move-target="blue">');
        let cw = $('.hero').width();
        $('#blue'+ charactersArr[b]).append("<img id='blueHero"+charactersArr[b]+"' data-name='blueHero"+charactersArr[b]+"' move-target='blue'>")
        $('#blueHero'+charactersArr[b]).css({'height':cw+'px'});
        $("#blueHero" + charactersArr[b]).attr("src", bluePath+charactersArr[b]+'.png');
    }

    //populating the map dropdown
    for (let c = 0; c < mapsArr.length; c++){
        $("#mapdd").append("<div class='map-name' id='"+mapsArr[c]+"' data-img-src='" + mapPath + mapsArr[c] +".png'>")
        $('#'+mapsArr[c]).text(mapsArr[c].replace(/_/g, " "));
    }
    // on click of the dropdown sections
    $('#ddMapsBtn').on('click', function(){
        document.getElementById("mapdd").classList.toggle("show");
    })
    $('#ddColorsBtn').on('click', function(){
        document.getElementById("colordd").classList.toggle("show");
    })
    //when you chose the map add it to the screen and match the canvas
    var img;
    $('.map-name').on('click', function(){
        document.getElementById("mapdd").classList.toggle("show");
        img = new Image();
        img.src = $(this).attr('data-img-src');
        
        $('#map').remove();
        $('#easel').append(img);
        
        img.onload = function() {
            matchCanvas(this);
          }
        
        $('#easel > img').attr("id", 'map')
        $('#map').addClass('small')
    })
    //some kind info
    $('#about').on('click', function(){
        if($('.about-div').length == 0){
            $('body').append('<div class="about-div">')
            $('.about-div').append('<p class="about-p">')
            $('.about-p').html(`Over Coach is a project I made for my web design class.
            <br>
            <br>
            If you support this project on Patreon I will continue to update it with more content.
            <br>
            <br>
            Check the hotkeys section for a menu of quick actions to improve your experience.
            <br>
            <br>
            I hope you enjoy Over Coach!
            <br>
            <br>
            -Ian Price
            <br>
            <br>`)
            $('.about-div').append('<button class="closeBtn">')
            $('.closeBtn').text('close')
        }
    })
    $(document).on("click", ".closeBtn", function() {
        $(".about-div").remove();
    });
    $('#hotkeys').on('click', function(){
        if($('.hotkey-div').length == 0){
            $('body').append('<div class="hotkey-div">')
            $('.hotkey-div').append('<p class="hotkey-p">')
            $('.hotkey-p').html(`Q = Black Pen
            <br><br>
            W = White Pen
            <br><br>
            E = Blue Pen
            <br><br>
            R = Red Pen
            <br>
            <br>
            T = Eraser<br><br>Ctrl+Click = Clear Hero From the Board<br><br>L = Clear All Lines<br><br>H = Reset All Heroes
            <br>
            <br>
            B = Clear the Board<br><br>M = Maps List<br><br>A = About Popout<br><br>Z = Hotkeys
            <br>
            <br>`)
            $('.hotkey-div').append('<button class="closeBtn2">')
            $('.closeBtn2').text('close')
        }
    })
    $(document).on("click", ".closeBtn2", function() {
        $(".hotkey-div").remove();
    });
});
//an extra function for matching the canvas
function matchCanvas(image) {
    var myCanvas = document.getElementById("canvas");
    myCanvas.width = image.width
    myCanvas.height = image.height
    init();
}