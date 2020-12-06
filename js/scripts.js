$(document).ready(function(){
    $("#mycarousel").carousel({  
        interval: 2000 
    }); // Doesn't work, I had to specify it in the div
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $("#ReservationsButton").click(function(){
        $("#ReservationsModal").modal('show');
    });
    $("#LogInButton").click(function(){
        $("#LogInModal").modal('show');
    });
});


