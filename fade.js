$(window).on("load", function() {
    for (tag of $("div.on-start")) {
        $(tag).addClass("faded");
    }
});

$(document).on("scroll", function() {
    pageTop = $(document).scrollTop();
    pageBottom = pageTop + $(window).height();
    tags = $("div.fader");
    for (tag of tags) {
        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("faded");
        }
    }
});