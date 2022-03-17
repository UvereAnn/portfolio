$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $(this).removeClass('fa-times');
        $('header').removeClass('toggle'); 
        
        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }

    });


    //smooth scrolling
    $('a[href*="#]').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });


    ('.submit-btn').click(function(){
        $(this).alert("Submission Successful!  We Have Sent You an Email.")

    });

});

document.getElementById("combined").onclick = function() {
  
    document.getElementById("box-container-one").style.display = "none";
    document.getElementById("box-container-two").style.display = "block";

}

