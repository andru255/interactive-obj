
var readUserData = function(dataObject) {
    var infoBlock = $('.info-option');
    var showInfoBlock = false;
    if(dataObject.isInfoClicked) {
        showInfoBlock = true;
    }
    if (showInfoBlock) {
        infoBlock.show();
        return
    }
    infoBlock.hide();
}

$(document).ready(function() {

    $(".close").on("click", function(){
        var $parent = $("." + $(this).attr('parent'));
        $parent.hide();
    });
    $(".close").on("touchend", function(){
        var $parent = $("." + $(this).attr('parent'));
        $parent.hide();
    });
})