
var readUserData = function(dataObject) {
    var infoBlock = $('.info-option');
    var showInfoBlock = false;
    if(dataObject.isInfoClicked) {
        showInfoBlock = true;
    }
    if (showInfoBlock) {
        infoBlock.show();
        console.log(";D")
        return
    }
    infoBlock.hide();
}

$(document).ready(function() {
    $(".close").on("click", function(){
        var $parent = $("." + $(this).attr('parent'));
        $parent.hide();
    });
})