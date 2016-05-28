
$(document).ready(function(){
    $("#movimento").click(function(){
        var div = $("img");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
$(document).ready(function(){
    $("#desaparecer").click(function(){
        $("img").animate({
            height: 'toggle'
        });
    });
});
$(document).ready(function(){
    $("#aumentar").click(function(){
        $("img").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});
