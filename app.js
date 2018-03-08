
$(document).ready(function(){
	display();
	$(window).scroll(function() {
		var  second_row_last_index=(Math.ceil($(".card").length/3)-1)*3-1;
	    var second_row_pos=$(".card:eq("+second_row_last_index+")").position().top;
    if ($(window).scrollTop() >= second_row_pos && !ajax_in_progress) {
     page++;
     display();  
    }
});
})
var page=1;
var ajax_in_progress=false;
function display(){
     ajax_in_progress=true;
     console.log("inside");
	$.ajax({url:"http://tapdiscover.com:9000//design-suggestions/?category=lehenga&page="+page,success:function(result){
		for(i=0;i<result.results.length;i++){
		$('.grid').append('<div class="card"> <img  src='+result.results[i].image_link+' alt="John" style="width:100%;"></div>' )}
        ajax_in_progress=false;
	}
	,
	error:function(error){
		ajax_in_progress=false;
		console.log(error);
	}
})
}
  
