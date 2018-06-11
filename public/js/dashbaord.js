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
const mapPath = "../OverCoach/OverwatchMaps/"

$('#mapDropDown').on('click', function(){
    document.getElementById("mapDropDown").classList.toggle("show");
    for (let i = 0; i < mapsArr.Length; i++){
        var mapDiv = $("<div>")
        mapDiv.addClass('map-name')
        mapDiv.attr('id', mapsArr[i])
        mapDiv.text(mapsArr[i])
    }
    $('mapDropDown').append(mapDiv)
})


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.mapDropDown')) {
    var dropdowns = document.getElementsByClassName("map-name");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
