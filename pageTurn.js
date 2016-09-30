$(document).on(
"pageinit", function() {
	
	var cpage=$("#main").find("img");
	
	//page right
			   $("#main").on("swiperight",function(){
				   $(cpage).hide();});/*onswiperight*/
	//page left			  
				   
				 $("#main").on("swipeleft",function(){
				   $(cpage).hide();}); /*onswipeleft*/ 
				   
				   }/*onpagefun*/			   
				   );/*onpage*/





