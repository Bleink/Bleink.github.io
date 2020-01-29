$(document).ready(function () {
        "use strict";
        let start = false;

        $("div#maze").mouseleave(function() {
            if(start){
                window.alert("You Lose!");
                $(".boundary").addClass("youlose");
                start = false;
            }
        });



        $(".boundary").mouseover(function() {
            if(start) {
                window.alert("You Lose!");
                $(this).addClass("youlose");
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
    }
);
