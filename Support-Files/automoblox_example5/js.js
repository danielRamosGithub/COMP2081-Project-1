// Custom Javascript 
// By: Thomas Dexter
// www.tsdexter.com

$(document).ready(function(){
	
	//-- NAV --//
	//When a nav item is clicked it must replace all the images and the car info content
	$('nav > ul > li > a').live('click',function(){
		var model = $(this).children('span').text().toLowerCase(); //get the model name that was clicked and convert to lower case 
		var img = $('body > section:nth-of-type(1)').html().replace(/a9s|c9r|c9s|s9r|x9x|c9|t9|x9/g,model); //get all images and use Regular Expression to extract folder names from url and insert new ones based in model clicked
		$('body > section:nth-of-type(1)').empty().html(img); //insert the new content with updated image srcs
		
		// Use ajax to load car info content from separate pages
		$('body > section:nth-of-type(2)').load(model+'.html');
	});
	
	//-- Color Changer -------------------------------------------------------//
	// Set the selected color to 1
	var selectedColor = 1;
	
	// Set the selector to only colors (not woods)
	var colors = 'section a:nth-of-type(1), section a:nth-of-type(2), section a:nth-of-type(3), section a:nth-of-type(4), section a:nth-of-type(5), section a:nth-of-type(6), section a:nth-of-type(7)';
	// Initialize - add active class to nth element based on selectedColor variable
	$('section a:nth-of-type('+selectedColor+')').addClass('active');
	
	// Function to add active class to the element when it's hovered over
	$(colors).live('hover',function(){
	
		// remove active class from all other elements while hovering
		$(colors).removeClass('active');
		
		// add active class to element being hovered over
		$(this).addClass('active');
	});
	//-----------------------------------------------------------------------//
	
	//-- Wood Changer -------------------------------------------------------//
	// Set the selected Wood to stock (11)
	var selectedWood = 11;
	
	// Set the selector to only woods
	var woods = 'section a:nth-of-type(8), section a:nth-of-type(9), section a:nth-of-type(10), section a:nth-of-type(11)';
	// Initialize - add active class to nth element based on selectedWood variable
	$('section a:nth-of-type('+selectedWood+')').addClass('active');
	
	// Function to add active class to the element when it's hovered over
	$(woods).live('hover',function(){
		// remove active class from all other elements while hovering
		$(woods).removeClass('active');
		
		// add active class to element being hovered over
		$(this).addClass('active');
	});
	//-----------------------------------------------------------------------//
	
	//--- OSX Dock Style menu ---//
	$('nav > ul > li').hover(function(){
		$('nav > ul > li').removeClass('active'); //remove active from all items
		$(this).addClass('active'); 
		
		// Add modifier to item before and after this
		$(this).prev('li').addClass('halfactive'); 
		$(this).next('li').addClass('halfactive');
		
		// Add modifier to item 2 before and 2 after this
		$(this).prev('li').prev('li').addClass('quarteractive');
		$(this).next('li').next('li').addClass('quarteractive');
	}, function(){ //call back function to remove classes when not hovering over menu
		$(this).removeClass('active');
		$(this).prev('li').removeClass('halfactive');
		$(this).next('li').removeClass('halfactive');
		$(this).prev('li').prev('li').removeClass('quarteractive');
		$(this).next('li').next('li').removeClass('quarteractive');
	});
	
	//-- Add items to cart/trailer --//
	var itemsincart = 0; // set items to 0 on page load
	$('a[href="#addtotrailer"]').live('click',function(){ //live so new html will still activate function
		
		// Make a copy of the active car including color and wood tone
		var car = $('.active').next('img').clone();
		
		//Append the current car to the cart list
		$('div > ul').append('<li></li>'); //add a new list item
		$('div > ul > li:last-child').append(car); //append the content to the new list item
		itemsincart++; //increase the item counter by 1
		$('div > a > strong').empty().append(itemsincart); //change the item counter onscreen
	});
	
	//-- Open the Cart overlay when clicked --//
	$('a[href="#viewtrailer"]').live('click',function(){ //live used so new html still activates
		
		//get cart div and make it visible
		$('div:last-of-type').css({
			'display':'block',
			'opacity':'1'
		});
		
		var trailer = $('body > div:first-of-type > ul').children().clone(); //clone the content from the trailer 
		$('body > div:last-of-type > hgroup > ul').append(trailer); // append the content to the cart list		 
	});
	
	//Close the trailer/cart when click the x button
	$('a[href="#closetrailer"]').click(function(){
		
		//set css to hide trailer
		$('div:last-of-type').css({
			'display':'none',
			'opacity':'0'
		});
	});
});