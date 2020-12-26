$(function() {

    //Image by Ivaylo Yovchev (  http://ivayloyovchev.com/weddings )
      
        //elements
        var $menu = $(".menu");
        var $pages = $(".page");
        var $menuLi = $menu.find("li").not(".to-home");
        var $toHome = $menu.find(".to-home");
        
        //interna vars
        var currentPage = "";
        
        $toHome.on("click", function() {
            currentPage = "";
            TweenMax.to($pages, 2.5, {
                top: "80%",
                left: "-70%",
                transform: "rotate(80deg)",
                opacity:0
            });
            TweenLite.to($menuLi.filter(".active"), 2.5, {
                className: "-=active"
            });
        });
        
        $menuLi.on("click", function(event) {
            
            var $this = $(this);
            var thisHref = $this.find("a").attr("href");
            
            if (currentPage !== thisHref && $pages.filter(thisHref).length > 0) {
                currentPage = thisHref;
                TweenMax.to($pages, 2.5, {
                    top: "80%",
                    left: "-70%",
                    transform: "rotate(80deg)",
                    opacity:0
                });
                TweenMax.to($pages.filter(thisHref), 1.5, {
                    top: 0,
                    left:0,
                    transform: "rotate(0deg)",
                    opacity:1
                    
                });
                TweenLite.to($menuLi.filter(".active"), 2.5, {
                    className: "-=active"
                });
                TweenLite.to($this, 2.5, {
                    className: "+=active"
                });
            }
            
            event.preventDefault();
        });
    });