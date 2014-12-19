var generateCanvas = function(width, height) {
    //generate canvas columns followed by canvas rows(cells)
    for(var i = 0; i < width; i++) {
        $("#canvas").append("<div class='column'></div>");
    }
    for(var i = 0; i < height; i++) {
        $(".column").append("<div class='cell'></div>");
    }
}

var clearCanvas = function() {
	$(".column").remove();
};

var paintCell = function() {
    $(".cell").hover(
        function(){
            $(this).addClass("blue");
        },
        function(){
            $(this).addClass("light_blue");
        }
    );
};

$(document).ready(function() {
    generateCanvas(16, 16);
    paintCell();
    $("button[name=button_clear]").click(function() {
        $(".column").remove();
    });
});
