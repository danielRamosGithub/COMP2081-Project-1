$(document).ready(function() {

	/*slider start curtesy: http://www.sohtanaka.com/web-design/automatic-image-slider-w-css-jquery/ */
	$(".paggination").show();
	$(".paggination a:first").addClass("active");
		
	//Get size of images, how many there are, then determin the size of the image reel.
	var imageWidth = $(".slider-window").width();
	var imageSum = $(".images img").size();
	var imageReelWidth = imageWidth * imageSum;
	
	//Adjust the image reel to its new size
	$(".images").css({'width' : imageReelWidth});
	
	//paggination + Slider Function
	rotate = function(){	
		var triggerID = $active.attr("rel") - 1; //Get number of times to slide
		var imagesPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide

		$(".paggination a").removeClass('active'); //Remove all active class
		$active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)
		
		//Slider Animation
		$(".images").animate({ 
			left: -imagesPosition
		}, 500 );
		
	}; 
	
	//Rotation + Timing Event
	rotateSwitch = function(){		
		play = setInterval(function(){ //Set timer - this will repeat itself every 3 seconds
			$active = $('.paggination a.active').next();
			if ( $active.length === 0) { //If paggination reaches the end...
				$active = $('.paggination a:first'); //go back to first
			}
			rotate(); //Trigger the paggination and slider function
		}, 3000); //Timer speed in milliseconds (3 seconds)
	};
	
	rotateSwitch(); //Run function on launch

	$(".paggination a").click(function() {	
		$active = $(this); //Activate the clicked paggination
		//Reset Timer
		clearInterval(play); //Stop the rotation
		rotate(); //Trigger rotation immediately
		rotateSwitch(); // Resume rotation
		return false; //Prevent browser jump to link anchor
	});	
	/* slider end */
	
});