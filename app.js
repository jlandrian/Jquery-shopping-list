//<li>'s  will look like this:
//<li><div class="checkbox"><input type="checkbox" name="grocery"></div>+added+<div class="deletebox"><button>x</button></div><hr></li>
 
$(document).ready(function(){
	//set the focus automatically on the text field
	$('#newitem').focus();
 
	//a function for adding items to the list
	function additem() {
		var added = $.trim($("#newitem").val());
		if (added =="") {
		alert("Please enter an item first!");
		}
		else{
			$("ul").append("<li><div class='checkbox'><input type='checkbox' name='grocery'></div>"+added+"<div class='deletebox'><button class='deletebtn'>x</button></div><hr></li>");
		}
		$('#newitem').val("")
					.focus();
	}
 
	//a function for deleting items
	function deleteitem(){
		$(this).closest('li').remove();
		console.log('delete clicked');
	}
 
	//a function to remove all items
	function removeall(){
		$('ul').html("");

	}

	//a function for checking items off the list
	function checkeditem(){
		$(this).closest('li').toggleClass('selected');
		console.log('checkbox!!!');
	}
 
	//add a new item
	$('.addbox').on('click', 'button', additem);
	
	//add a new item on keypress of Enter
	$('#newitem').on('keydown', function(event){
		if(event.keyCode == 13){
			additem();
			console.log('enter!!!');
		}
	});
 
	//delete an item
	$('ul').on('click', '.deletebtn', deleteitem);
 
	//check off an item
	$('ul').on('click', 'input', checkeditem);	

	//remove all items
	$('.remove').on('click', removeall);

});
