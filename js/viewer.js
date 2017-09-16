$(function () {

    var width = 50;
    var height = 50;

    var updateDisplay = function (displayResolution) {
        if (displayResolution) {
            width = displayResolution.split("x")[0];
            height = Math.ceil(width * (9 / 16));
            document.getElementById("canvas").width = width;
            document.getElementById("canvas").height = height;
        }
    };

    if (window.Twitch.ext) {
        window.Twitch.ext.onContext(function (context, contextFields) {
            updateDisplay(context.displayResolution);
        });
    }
    else {
        console.error("Twitch Framework couldn't be loaded.")
    }


    // GUI
    var emoteListBtn = $("#tt-emote-list-btn");
    var emoteList = $("#tt-emote-list");

    emoteList.hide();

    emoteListBtn.click(function () {

        emoteList.show();

        // When opening the emote list
        if (emoteListBtn.hasClass("icon-arrow-down")) {
            emoteListBtn.removeClass("icon-arrow-down").addClass("icon-arrow-up");
            emoteList.removeClass("animated fadeOutUp").addClass("animated fadeInDown");
        }
        // When closing the emote list
        else {
            emoteListBtn.removeClass("icon-arrow-up").addClass("icon-arrow-down");
            emoteList.removeClass("animated fadeInDown").addClass("animated fadeOutUp");
        }
    });

});