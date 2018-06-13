var canvas,
    context,
    dragging = false,
    dragStartLocation,
    snapshot;


function getCanvasCoordinates(event) {
    var x = event.clientX - canvas.getBoundingClientRect().left,
        y = event.clientY - canvas.getBoundingClientRect().top;

    return {x: x, y: y};
}

function takeSnapshot(){
    snapshot = context.getImageData(0,0, canvas.width, canvas.height);
}

function restoreSnapshot(){
    context.putImageData(snapshot, 0, 0);
}

function drawLine(position) {
    context.beginPath();
    context.moveTo(dragStartLocation.x, dragStartLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
}

function dragStart(event) {
    dragging = true;
    dragStartLocation = getCanvasCoordinates(event);
    takeSnapshot();
}

function drag(event) {
    var position;
    if (dragging === true) {
        restoreSnapshot();
        position = getCanvasCoordinates(event);
        drawLine(position);
    }
}

function dragStop(event) {
    dragging = false;
    restoreSnapshot();
    var position = getCanvasCoordinates(event);
    drawLine(position);
}
$('#lines-btn').on('click', function(){
   context.clearRect(0, 0, canvas.width, canvas.height);
})

var colorChoice = 'white';
$('.color-dropdown').on('click', function(){
    colorChoice = $(this).attr('data-color')
    init();
})

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

function resizeCanvas(e) {
    var myCanvas = document.getElementById("drawzone");
    myCanvas.width = (document.getElementById('mapzone').clientWidth);
    myCanvas.height = (document.getElementById('mapzone').clientHeight);
}

window.addEventListener("resize", resizeCanvas, false);
window.addEventListener('load', init, false);
