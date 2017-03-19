$(document).ready(function()
{
	var url=window.location.href;
	$("a").mouseenter(function()
	{
			var str=$(this).attr('href');
		if(str.match("^//"))
		{
			var current_url="https:"+str;
		}
		else if(str.match("^/"))
		{
			var current_url=url-"/"+str;
		}
		else
		{
			var current_url=str;
		}
		$(this).append("<div class='popup'></div>");
		$(".popup").append(current_url);
		var pos = $(this).position();
		var top = pos.top-"20";
		var left = pos.left-"30";
		$(".popup").css({
		 position:"absolute",
		 top:top,
		 left:left,
		"z-index":"1",
		"display":"block",
		"width":"auto",
		"height":"auto",
		"padding":"5",
		"color":"#FFF",
		"background":"#535663",
		"font-size":"11",
		"text-decoration":"none",
		"border-radius":"6"
		});
    })
    .mouseleave(function()
    {
    	$(".popup").remove();
    });
});