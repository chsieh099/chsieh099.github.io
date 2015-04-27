$(document).ready(function(){

    // $('#logo').click(function() {
    //  $('#triangle-small-6').attr('id', 'triangle-small-6-active');
    //  $('#triangle-small-5').attr('id', 'triangle-small-5-active');
    // });

    $('#next-button').click(function() {
        $('#triangle-bkgd').fadeOut();
        $('#landing-page-bkgd').fadeOut();

        $('#triangle-small-6').animate({
            bottom: '-=355px'
        }, {duration: 600, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-small-5').animate({
            bottom: '-=355px'
        }, {duration: 800, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-small-4').animate({
            bottom: '-=355px'
        }, {duration: 500, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-small-3').animate({
            bottom: '-=355px'
        }, {duration: 700, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-small-2').animate({
            bottom: '-=355px'
        }, {duration: 750, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-small-1').animate({
            bottom: '-=355px'
        }, {duration: 650, queue: false, specialEasing: 'easeOutQuart'});

        $('#triangle-medium-3').animate({
            bottom: '-=525px'
        }, {duration: 425, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-medium-2').animate({
            bottom: '-=525px'
        }, {duration: 450, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-medium-1').animate({
            bottom: '-=525px'
        }, {duration: 475, queue: false, specialEasing: 'easeOutQuart'});

        $('#triangle-left').animate({
            bottom: '-=735px'
        }, {duration: 450, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-right').animate({
            bottom: '-=735px'
        }, {duration: 450, queue: false, specialEasing: 'easeOutQuart'});
        $('#triangle-center').animate({
            bottom: '+=750px'
        }, {duration: 450, queue: false, specialEasing: 'easeOutQuart'});

        setTimeout(function() {
            $('#landing-page #content').fadeOut(700);
        });

        setTimeout(function() {
            $('#pages').fadeIn(200);
        });

        // setTimeout(function() {

        //     $('#greeting').fadeIn(600);

        //     var titles = $(".titles");
        //     var titleIndex = -1;

        //     function showNextTitle() {
        //         titleIndex += 1;
        //         titles.eq(titleIndex % titles.length)
        //             .fadeIn(600)
        //             .delay(1000)
        //             .fadeOut(600, showNextTitle);
        //     }

        //     showNextTitle();

        // });

    });

    $("#carousel-next").click(function() {
        var current = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (current == -8000) {
            return false;
        } else {
            current -= 1435;
            $("#carousel").css("margin-left", current);
        }
    });

    $("#carousel-prev").click(function() {
        var current = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (current == 0) {
            return false;
        } else {
            current += 1435;
            $("#carousel").css("margin-left", current);
        }
    });

        // $('#triangle-small-6').animate({bottom: '-=355px'}, 'easeOutQuart');
        // $('#triangle-small-5').animate({bottom: '-=300px'}, 'easeOutQuart');

// $("#first").animate({
//        width: '200px'
//     }, { duration: 200, queue: false });
//     $("#second").animate({
//        width: '600px'
//     }, { duration: 200, queue: false });


});
