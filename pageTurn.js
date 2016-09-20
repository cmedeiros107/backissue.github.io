$(document).on(
"pageinit", function() {
	var cPage=$("#main").find(img);
	
	//page right
			   $(cPage).on("swiperight",function(){
				   $("#main").hide();});/*onswiperight*/
	//page left			  
				   
				 $(cPage).on("swipeleft",function(){
				   $("#main").hide();});  
				   
				   }/*onpagefun*/			   
				   );/*onpage*/





