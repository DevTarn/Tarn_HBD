window.addEventListener('message', function (event) {
    var data = event.data;
	
	if (data !== undefined && data.display == true) {
	
		$(".hbd_list").append(`

				<input id="coords_work" type="image" src="img/button/onclick.png" onclick="coords_work('')" onmouseover="this.src='img/button/onclick_work.png'" onmouseout="this.src='img/button/onclick.png'">
	
		`);
		
		$(".container").show();	
	}
	
	if (data.display == false) {
		$(".hbd_list").empty();
		$(".container").fadeOut(100);
    }
});


function coords_work( ) {
	$('.popup_work').fadeIn(200);
	$(".hbd_list").empty();
	$(".container").fadeOut(100);

	$('#popupYes_work').on('click', function (e){
		$.post('http://Tarn_HBD/coords_work', JSON.stringify({ }));
		
		$('.popup_work').fadeOut(100);
		$.post('http://Tarn_HBD/NUIFocusOff');
		return;
	});
	
	$('#popupNo_work').on('click', function (e) {
	
		$('.popup_work').fadeOut(100);
		$.post('http://Tarn_HBD/NUIFocusOff');
		return;
	});
}


		
document.addEventListener('DOMContentLoaded', function () {
    $(".container").hide();
});

