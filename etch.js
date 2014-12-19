var generateCanvas = function(canvasSize, cellSize) {
    //generate canvas columns followed by canvas rows(cells)
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

var paintCell = function() {
    var red =   "#ee6363";
    var green = "#63ee63";
    var blue =  "#6363ee";

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
    // default canvas
    generateCanvas(16);
    paintCell();

    $("button[name=clear_canvas]").click(function() {
        $(".column").remove();
        generateCanvas(16);
        paintCell();
    });
    $("button[name=new_canvas]").click(function() {
        $(".column").remove();
        var canvasSize = prompt("Enter a new canvas size:");
        cellSize = (720/canvasSize);
        generateCanvas(canvasSize, cellSize);
        paintCell();
    });
});
