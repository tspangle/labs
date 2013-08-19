
/**
 * 订单页面交互js
***/

$(function(){
    
    // 单选项
    function JS_check(_box,check_radio_box,check_radio_item,active){
		$(_box).delegate(check_radio_item,'click',function(){
            $(this).parents(check_radio_box).toggleClass(active).siblings(check_radio_box).removeClass(active);
            //return false;
        });
	};
    JS_check(".JS_check",".check-radio-box",".check-radio-item","active");
    $(".JS_check").delegate(".check-content .tip-close","click",function(){
        $(this).parents(".check-radio-box").find(".check-radio-item").click();
    });
    
    
    $(".slidedown-orderlist").click(function(){
        $(this).toggleClass("active").parent().find(".order-list").toggleClass("hide");
        
    })
    
    $("b.countdown").ui("countdown",{
        format: "mm:ss",
        overtips : "此订单已过期"
    });
    
})
