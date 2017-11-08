$(document).ready(function(){
	$(".classify-head span").click(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings(this).removeClass("cur");
		$(".classify-main").eq(index).css("display","block").siblings(".classify-main").css("display","none");
	});
	$(".classify-left li").click(function(){
		var index=$(this).index();
		$(this).addClass("cur").siblings(this).removeClass("cur");
	});
	$(".letter span").click(function(e){
		e.stopPropagation();
		var i=$(this).html();
		$(this).siblings(".letter-text").html(i);
	});
	$(".paper-head ul li").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	});
	$(".pp-head li").click(function(){
		$(this).css({"background":"#FFD9EA","color":"#FE64A6"}).siblings().css({"background":"#E3E3E3","color":"#000"});
		$(this).children("div").slideToggle(100);		
		var height=$(".pp-con").height();
		$(".bg").css("height",height);
		$(".bg").slideToggle(100);
		$(this).parent().css("border-top","1px solid #7E7E7E");
	});
	
	$(".group-con-head h3").click(function(){
		$(this).addClass("cur").siblings().removeClass();
		var index=$(this).index();
		$(".group-con .group-ul").eq(index).css("display","block").siblings(".group-con .group-ul").css("display","none");
	});
	
	$(".checkbox").click(function(){
		$(this).toggleClass("cur");
	});
	var count;
	count=0;
	$(".edit-right").click(function(){
		count++;
		$(".edit-center").val(count);
		if(count>99){
			count=99;
		}
	});
	$(".edit-left").click(function(){
		count--;	
		if(count<1){
			count=1;
		}
		$(".edit-center").val(count);
	});
	$(".balance-add").click(function(){
		count++;
		$(".balance-num").val(count);
		$(".balance-number").val(count);
		if(count>99){
			count=0;
		}
	});
	$(".balance-min").click(function(){
		count--;
		if(count<1){
			count=1;
		}
		$(".balance-num").val(count);
		$(".balance-number").val(count);
	});
	
	$(".YH-head p").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var index=$(this).index();
		$(".YH-con").eq(index).css("display","block").siblings(".YH-con").css("display","none");
	});
	$(".pay-con ul li div").click(function(){
		$(this).toggleClass("cur");
	});
});
