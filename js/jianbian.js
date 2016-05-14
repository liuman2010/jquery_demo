$(document).ready(function(){

	// 初索引值 0是第一张图片
	var index = 0;

	// 获得图片总数
	var imgLength = $(".pics ul li").length;

	// 定时器
	var autoPlay = setInterval(function(){

		// 如果当前索引少于图片的总数就增加1 否则为第一张图片
		if(index < imgLength-1){
			index++;
		}else{
			index = 0;
		}
		play(index);
	},3000);

	// 构造一个定时器
	function autoPlayConstruct(){
		// 定时器
		autoPlay = setInterval(function(){

			// 如果当前索引少于图片的总数就增加1 否则为第一张图片
			if(index < imgLength-1){
				index++;
			}else{
				index = 0;
			}
			play(index);
		},3000);
	}

	// 播放 num 索引值
	function play(num){
		// 0*990=0  1*990=990 2*990=1980 3*990=2970 
		var goright = num*990+"px";
		$(".pics ul").animate({"right":goright});
		$(".nav ul li").removeClass("active").eq(num).addClass("active");
		$(".summary ul li").hide().eq(num).show();
	}

	// 点击上一张 如果当前的索引大于0 大于0 就是已经滚了好几张图片，就-1
	$(".left a").click(function(){
		// 清除当前的定时器
		clearInterval(autoPlay);
		if(index > 0 ){
			--index;
		}else{
			index = 0;
			alert("已经是最前一张！");
		}
		autoPlayConstruct();
		play(index);
	});

	// 点击下一张
	$(".right a").click(function(){
		// 清除当前的定时器
		clearInterval(autoPlay);
		if(index < imgLength-1 ){
			++index;
		}else{
			index = 0;
			alert("已经是最后一张！");
		}
		play(index);
		autoPlayConstruct();
	});

	// 索引点击事件
	$(".nav ul li").click(function(){
		// 清除当前的定时器
		clearInterval(autoPlay);
		index = $(this).index();
		play(index);
		// 再次运行定时器
		autoPlayConstruct();
	});


});//r