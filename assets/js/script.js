$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})

$(document).ready(function() {
    $('#downloadResumeBtn').on('click', function() {
        // Construct the path to your resume file
        var resumeFilePath = './assets/resume/Hassam.pdf'; // Change this to the actual path and filename

        // Create a temporary anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = resumeFilePath;

        // Set the download attribute with the desired filename
        downloadLink.download = 'Hassam.pdf'; // Change this to the desired filename

        // Append the anchor element to the document
        document.body.appendChild(downloadLink);

        // Trigger a click event on the anchor element
        downloadLink.click();

        // Remove the anchor element from the document
        document.body.removeChild(downloadLink);
    });
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
