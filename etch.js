var generateCanvas = function(width, height) {
    //generate canvas columns followed by canvas rows(cells)
    for(var i = 0; i < width; i++) {
        $("#canvas").append("<div class='column'></div>");
    }
    for(var i = 0; i < height; i++) {
        $(".column").append("<div class='cell'></div>");
    }
}

var paintCell = function(color) {
    $(".cell").mouseover(function(){
        $(this).addClass(color);
    });
}

$(document).ready(function() {
    generateCanvas(16, 16);
    paintCell("green");
});
