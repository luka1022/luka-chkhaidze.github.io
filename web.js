

    $('.nav-button').click(function(){ 
        $('.nav-button, .side-nav, .nav-header, .nav-options').toggleClass('nav-open'); 
        return false;
    });
   
    $('.nav-link.the-menu').click(function(){
        $('.nav-button, .side-nav, .nav-header, .nav-options').removeClass('nav-open');
        $('.menu-container').addClass('displayed');
        return false;
    });
    
    $('.close, .menu-container').click(function(){ $('.menu-container').removeClass('displayed'); return false;});

    $('.tab.menu-tab').click(function(){ return false; }); 
    
    $(window).scroll(function(){
        
        if($(window).scrollTop() > 600) {
            $('.nav-button, .search-button').addClass('black');
        } else {
            $('.nav-button, .search-button').removeClass('black');
        }    
    });
    
});