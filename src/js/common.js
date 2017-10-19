$(function(){
    //导航下拉
    (function (){
        $('.dropdown-trigger').click(function(e){
            $(this).next('.dropdown-menu').slideToggle(200);
        });
        $(document).click(function(){
            $('.dropdown-menu').slideUp(200);
        });
        $('.dropdown').click(function(e){
            e.stopPropagation();
        })
    })();

})