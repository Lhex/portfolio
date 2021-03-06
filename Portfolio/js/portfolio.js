

//Overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);

$("#gallery li a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);

	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
	
	$overlay.show();
});

$overlay.click(function(){
	$overlay.hide();
});