$(document).ready(function(){

$('.addbox').on('click', (function () {
	$('ul').append($('li', {
		text: $('#newitem').val()
	}));
}));
});