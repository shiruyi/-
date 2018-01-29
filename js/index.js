$("#loutiNav  ul li").not(".last").hover(function() {
	//鼠标滑上去
	$(this).addClass("hover");
}, function() {
	//鼠标移开
	$(this).removeClass("hover");
});
//鼠标点击
var mark = 1;
$("#loutiNav  ul li").not(".last").click(function() {
	mark = 2; //改变标记
	$("#loutiNav  ul li").find("span").removeClass("active");
	$(this).find("span").addClass("active");
	//点击左边导航 然后跳到指定的楼层
	var $index = $(this).index(); //找到了对应的序列号
	//alert($index);
	var $top = $(".conter2").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
	//alert($top);
	$("body,html").animate({
		scrollTop: $top
	}, 500, function() {
		mark = 1;
	}); //浏览器滚动的高度
});
//浏览器串口滚动事件
$(window).scroll(function() {
	if(mark == 1) {
		if(mark == 1) {
			var $t = $(this).scrollTop(); //获取滚动条滚动的高度
			//document.title = $t;
			if($t > 1000) { //通过滚动条来判断
				$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
			} else {
				$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
			}
			var $obj = $("#main .Louti");
			//循环每一个Louti 然后找到最先满足条件的那个 Louti
			$obj.each(function() {
				var $index = $(this).index();
				//楼层与浏览器上面的高度
				var $height = $obj.eq($index).offset().top + $(this).height() / 2;
				//alert($height) 
				//document.title = $t + "--" + $height;
				if($t < $height) {
					$("#LoutiNav ul li").find("span").removeClass("active")
					$("#LoutiNav ul li").eq($index).find("span").addClass("active");
					return false;
				}
			});
		}
	}
});
//点击 Top按钮 跳转到浏览器顶部
$("#loutiNav ul li.last").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 0, function() {
		mark = 1;
	});
});

/*lunbo*/
var index = 0; //表示当前的图片的下标
var next = 0; //表示下一张
// 向左运动
function fun() {
	//判断当前图片的临界点
	if(index >= 3) {
		index = 0;
	}
	//判断下一张的临界点
	next = index + 1;
	if(next >= 3) {
		next = 0;
	}

	$(".swiper-container ul>li").eq(index).siblings().css("left", "742px"); //除了当前的一个图片，其他的图片都设置left = 1000px

	$(".swiper-container ul>li").eq(index).animate({
		left: "-=742px"
	}, 1000); //设置当前图片向左运动1000px
	$(".swiper-container ul>li").eq(next).animate({
		left: "-=742px"
	}, 1000); //设置下一张图片向左运动1000px

	index++;

	//设置小圆点
	$(".swiper-container ol>li").eq(next).css("background", "BLUE");
	$(".swiper-container ol>li").eq(next).css("color", "white");
	$(".swiper-container ol>li").eq(next).siblings().css("background", "#FFFFFF");
	$(".swiper-container ol>li").eq(next).siblings().css("color", "black");

}

var timer = setInterval(fun, 2000);

//当鼠标点击小圆点时，切换到对应的图片
$(".swiper-container ol>li").click(function() {
	//
	var i = $(this).index(); //获取到当前点击哪一个小圆点
	$(".swiper-container ul>li").eq(i).css("left", "0px");
	$(".swiper-container ul>li").eq(i).siblings().css("left", "-742px");

	$(this).css("background", "blue");
	$(this).siblings().css("background", "white");
})

var n = 0;
$(".btn1").click(function() {
	$(".btn2").prop("disabled", false);
	$(".swiper-container ul").animate({
		left: "-=742px"
	}, 1000);
	n++;
	if(n > 3) {
		$(this).prop("disabled", true);
	}
});
$(".btn2").click(function() {
	$(".btn1").prop("disabled", false);
	$(".swiper-container ul").animate({
		left: "+=742px"
	}, 1000);
	if(n <= 0) {
		$(this).prop("disabled", true);
	} else {
		$(".swiper-container ul").stop().animate({
			left: "+=742px"
		}, 1000);
		n--;
	}
});

var space1=0;
		timer1=null;
		function fun(){
			space1+=-50;
			if (space1<=-150) {
				space1=0;
				$(".conter-right-bottom-right ul").css("top","0px");
				clearInterval(timer1);
			}
			$(".conter-right-bottom-right ul").animate({"top":+space1+"px"});
			if (space1==0) {
				timer1=setInterval(fun,3000);
			}
		}
		timer1=setInterval(fun,3000);

