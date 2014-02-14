//Function to toggle the position of the menu
var toggleMenu = function (bool) {
    switch (bool) {
    case true:
        //Open menu and add closemenu class
        if (!$("section#not-nav").hasClass("closemenu")) {
            $("section#nav").stop().animate({
                right: 0
            }, 200);
            $("section#not-nav").css("cursor", "pointer")
                .stop().animate({
                    right: $("#nav").width() + "px"
                }, 200, function () {
                    $(this).addClass("closemenu");
                });
        }
        break;
    case false:
        //Close menu and remove closemenu class
        $("section#nav").stop().animate({
            right: ($("#nav").width() * -1) + "px"
        }, 200);
        $("section#not-nav").css("cursor", "auto")
            .stop().animate({
                right: 0
            }, 200).removeClass("closemenu");
        break;
    }
}

$(document).ready(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() > $("section#head").height() && $("section#not-nav").hasClass("closemenu")) {
            toggleMenu(false);
        }
    });

    $(document).on('click', '.openmenu', function () {
        console.log("clicked");
        toggleMenu(true);
    });

    //Need to delegate the click to document, because $.addClass is used
    $(document).on('click', '.closemenu', function () {
        console.log("clicked");
        toggleMenu(false);
    });

    //Slider mechanics
    var sliderWidth = $("#slider").width() / 2,
        currentId = 0;

    //Animate first element
    $("#slider li:eq(0)").animate({
        opacity: 0.7
    }, 300);
    //Call timeout for first switch
    setTimeout(function () {
        nextImage(currentId)
    }, 4500);

    //Function to change elements
    var changeElement = function (thisElement, nextElement) {
        thisElement.animate({
            left: (sliderWidth * -1),
            opacity: 0
        }, 400, function () {
            $(this).css("left", 0);
        });
        nextElement.css("left", sliderWidth).animate({
            left: 0,
            opacity: 0.7
        }, 400);
    }
    //Function to manage arguments for changeElement()
    var nextImage = function (currentId) {
        if (currentId == 0) {
            //Currently on first element, make currentId the last index
            currentId = $("#slider").children().length - 1;
            var thisElement = $("#slider li:eq(0)"),
                nextElement = $("#slider li:eq(" + currentId + ")");
            changeElement(thisElement, nextElement);
        } else {
            //Currently anywhere else, remove current and add next
            var thisElement = $("#slider li:eq(" + currentId + ")"),
                nextElement = $("#slider li:eq(" + (currentId - 1) + ")");
            changeElement(thisElement, nextElement);
            currentId -= 1;
        }
        setTimeout(function () {
            nextImage(currentId)
        }, 4500);
    }
});