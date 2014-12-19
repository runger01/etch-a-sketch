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

var paintBrush = function(Color) {
    $(".cell").hover(
        function(){
            $(this).css("opacity", 1.0);
            $(this).css("background", Color);
        },
        function(){
            $(this).fadeTo("flow", 0.66);
            $(this).css("background", Color);
        }
    );
};

var rainbowBrush = function() {
    $(".cell").hover(
        function(){
            $(this).css("opacity", 1.0);
            $(this).css("background", randomColor());
        },
        function(){
            $(this).fadeTo("flow", 0.66);
            $(this).css("background", randomColor());
        }
    );
};

var randomColor = function() {
    var color = ("#" + Math.floor(Math.random()*10) +
                    Math.floor(Math.random()*10) +
                    Math.floor(Math.random()*10)
                );
    return color;
};

$(document).ready(function() {
    var canvasSize = 720
    var gridSize = 16;
    var cellSize = (canvasSize/gridSize)
    // default canvas
    generateCanvas(gridSize);
    paintBrush(randomColor());

    $("button[name=clear_canvas]").click(function() {
        $("body").css("background", "#fff");
        $(".column").remove();
        generateCanvas(gridSize, cellSize);
        paintBrush(randomColor());
    });
    $("button[name=new_canvas]").click(function() {
        $("body").css("background", "#fff");
        $(".column").remove();
        gridSize = prompt("Enter a new canvas size:");
        // recalculate values
        cellSize = (canvasSize/gridSize);
        generateCanvas(gridSize, cellSize);
        paintBrush(randomColor());
    });
    $("button[name=rainbow_brush]").click(function() {
        $("body").css("background", "url(RAINBOW_TILE.png)");
        rainbowBrush();
    });
});
