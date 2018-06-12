/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
const mapsArr=
    [
        "anubis_map",
        "blizzworld_map",
        "dorado_map",
        "eich_map",
        "hana_map",
        "holly_map",
        "horizon_map",
        "ilios_map",
        "junk_map",
        "kings_map",
        "lijiang_map",
        "nepal_map",
        "numbani_map",
        "oasis_map",
        "route_map",
        "volskaya_map",
        "watchpoint_map",
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
    $('#redCharacters').append('<div class="hero" id="red'+charactersArr[p]+'">');
    $('#red'+ charactersArr[p]).append("<img id='redHero"+charactersArr[p]+"'>")
    $("#redHero" + charactersArr[p]).attr("src", redPath+charactersArr[p]+'.png');
}
for (let p = 0; p < charactersArr.length; p++){
    $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[p]+'">');
    $('#blue'+ charactersArr[p]).append("<img id='blueHero"+charactersArr[p]+"'>")
    $("#blueHero" + charactersArr[p]).attr("src", bluePath+charactersArr[p]+'.png');
}
for (let i = 0; i < mapsArr.length; i++){
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
})
});
