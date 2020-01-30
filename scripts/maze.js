$(document).ready(function () {
        "use strict";
        let start = false;

        $("div#maze").mouseleave(function() {
            if(start){
                $(".boundary").addClass("youlose");
                window.alert("You Lose!");
                start = false;
            }
        });



        $(".boundary").mouseover(function() {
            if(start) {
                $(this).addClass("youlose");
                window.alert("You Lose!");
                start = false;
            }
        });

        $("#end").mouseover(function(){
            if(start){
                window.alert("You Win!");
                start = false;
            }
        });

        $("#start").click(function() {
            start = true;
            $(".boundary").removeClass("youlose");
        });
    });
