//RCM means Responsive Class Manager
//@martinciscap
//https://github.com/martinciscap/bootstrap-rcm/
$(function(){

    onResize();
    $(window).on("resize", onResize);

    function onResize() {

        var width = window.innerWidth,
            strClass = "add-class-",
            strClassLen = strClass.length,
            addedClasses = new Array(),
            size, $e, cleanStrClass, wSize;

        if (width <= 480) {
            size = "xs";
        } else if (width <= 768) {
            size = "sm";
        } else if (width <= 992) {
            size = "md"
        } else {
            size = "lg"
        }

        $("[class*='" + strClass + "']").each(function(i, e) {
            $e = $(e);
            $e.attr("class").split(" ").forEach(function(el) {
                cleanStrClass = el.trim();
                if (cleanStrClass.indexOf(strClass) !== -1) {
                    wSize = cleanStrClass.substr(strClassLen, 2);
                    cleanStrClass = cleanStrClass.substr(strClassLen + 3);
                    if (size == wSize) {
                        $e.removeClass(cleanStrClass).addClass(cleanStrClass);
                        addedClasses.push(cleanStrClass);
                    } else if (addedClasses.indexOf(cleanStrClass) === -1) {
                        $e.removeClass(cleanStrClass);
                    }
                }
            });
        });
    }
});
