// this becomes sluggish with a canvas size of about 200, unbearable at 300, and
// 400 will crash the brower (only tested on my system)
var generateCanvas = function(canvasSize, cellSize) {
    for(var i = 0; i < canvasSize; i++) {
        $("#canvas").append("<div class='column'></div>");
    }
    for(var i = 0; i < canvasSize; i++) {
        $(".column").append("<div class='cell op0'></div>");
    }
    // fit the grid to the canvas (720x720)
    $(".cell").css("width", cellSize);
    $(".cell").css("height", cellSize);
}

// increments the cell's opacity by 0.1 on mouseover until it reaches 1.0. 
// this is a mess, i feel like this is a very hacky and all just plain terrible
// method to achieve the desired effect, can definetly condense this
// i set the opacity to 1.0 at the start and fade to target number for that cell in order to
// create a "paint drying" effect
var increaseOpacity = function($cell) {
    if ($cell.hasClass("op0")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op0");
        $cell.addClass("op1");
        $cell.fadeTo("fast", 0.1);
    } else if ($cell.hasClass("op1")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op1");
        $cell.addClass("op2");
        $cell.fadeTo("fast", 0.2);
    } else if ($cell.hasClass("op2")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op2");
        $cell.addClass("op3");
        $cell.fadeTo("fast", 0.3);
    } else if ($cell.hasClass("op3")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op3");
        $cell.addClass("op4");
        $cell.fadeTo("fast", 0.4);
    } else if ($cell.hasClass("op4")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op4");
        $cell.addClass("op5");
        $cell.fadeTo("fast", 0.5);
    } else if ($cell.hasClass("op5")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op5");
        $cell.addClass("op6");
        $cell.fadeTo("fast", 0.6);
    } else if ($cell.hasClass("op6")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op6");
        $cell.addClass("op7");
        $cell.fadeTo("fast", 0.7);
    } else if ($cell.hasClass("op7")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op7");
        $cell.addClass("op8");
        $cell.fadeTo("fast", 0.8);
    } else if ($cell.hasClass("op8")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op8");
        $cell.addClass("op9");
        $cell.fadeTo("fast", 0.9);
    } else if ($cell.hasClass("op9")) {
        $cell.css("opacity", 1.0);
        $cell.removeClass("op9");
        $cell.addClass("op10");
        $cell.fadeTo("fast", 1.0);
    }
}

var paintBrush = function(Color) {
    $(".cell").hover(function(){
            increaseOpacity($(this));
            $(this).css("background", Color);
        },
        function(){
            $(this).css("background", Color);
    });
};

var rainbowBrush = function() {
    $(".cell").hover(function(){
            $(this).css("background", randomColor());
        },
        function(){
            $(this).css("background", randomColor());
    });
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
        $("body").css("background", "#efefef");
        $(".column").remove();
        generateCanvas(gridSize, cellSize);
        paintBrush(randomColor());
    });
    $("button[name=new_canvas]").click(function() {
        $("body").css("background", "#efefef");
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
