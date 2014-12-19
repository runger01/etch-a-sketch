// this becomes sluggish with a canvas size of about 200, unbearable at 300, and
// 400 will crash the brower (only tested on my system)
var generateCanvas = function(canvasSize, cellSize) {
    for(var i = 0; i < canvasSize; i++) {
        $("#canvas").append("<div class='column'></div>");
    }
    for(var i = 0; i < canvasSize; i++) {
        $(".column").append("<div class='cell'></div>");
    }
    // fit the grid to the canvas (720x720)
    $(".cell").css("width", cellSize);
    $(".cell").css("height", cellSize);
}

var paintBrush = function() {
    $(".cell").hover(
        function(){
            $(this).css("background", "orange");
        },
        function(){
            $(this).css("background", "orange");
        }
    );
};

$(document).ready(function() {
    var canvasSize = 720
    var gridSize = 16;
    var cellSize = (canvasSize/gridSize)
    // default canvas
    generateCanvas(gridSize);
    paintBrush();

    $("button[name=clear_canvas]").click(function() {
        $(".column").remove();
        generateCanvas(gridSize, cellSize);
        paintBrush();
    });
    $("button[name=new_canvas]").click(function() {
        $(".column").remove();
        gridSize = prompt("Enter a new canvas size:");
        // recalculate values
        cellSize = (canvasSize/gridSize);
        generateCanvas(gridSize, cellSize);
        paintBrush();
    });
});
