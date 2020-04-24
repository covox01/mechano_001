
// ----- Global Variables -->
   var gearPattern = document.getElementById("gear-pattern")
   var innerPattern = document.getElementById("inner-pattern")
   var iris = document.getElementById("iris")
   var body = document.getElementById("body")

   var earRight = document.getElementById("ear-right")
   var earLeft = document.getElementById("ear-left");

   var centerButton = document.getElementById("center-button")
   var innerRing = document.getElementById("inner-ring")
   var innerButtonPattern = document.getElementById("inner-button-pattern")

   // gear1_rotation = gsap.getProperty("#gear1", "rotation");

// ----- Banner Animation Frames -->

	//-- Frame 1 -->

		function gear1_animation() {
         var tl = new TimelineMax({ id: "frame 1", repeat: -1, yoyo: true });
			tl
				.to(["#gear1"], 2.5, {ease: Back.easeInOut, rotation: 360}, "sync")
				.to(["#gear1"], 2, {ease: Back.easeInOut, y: 20}, "sync")
				.to(["#gear1"], 2, {ease: Back.easeInOut, y: 20}, "sync")
				// .to(["#gear1"], .5, {ease: Linear.easeNone, x: 50, repeat: -1},)
				
			return tl
      }

      function gear2_animation() {
         var tl = new TimelineMax({ id: "frame 2", repeat: -1, yoyo: true });
			tl
				.to(["#gear2"], 2.5, {ease: Back.easeInOut, rotation: 180}, "sync")
				// .to(["#gear2"], 2, {ease: Power4.easeInOut, y: 20}, "sync")
				// .to(["#gear2"], 2, {ease: Power4.easeInOut, y: 20}, "sync")
				// .to(["#gear1"], .5, {ease: Linear.easeNone, x: 50, repeat: -1},)
				
			return tl
      }

// Master Timeline -->

	function masterTimeline(){   
      gear1_animation()
      gear2_animation()
	}
	
// ----- Init -->

	function init() {
      // TweenMax.from(gearPattern, .2, {scale: .5, rotation: 180, transformOrigin: "center center", ease: Power3.easeInOut})
      // TweenMax.from(innerPattern, 1, {scale: .5, rotation: -360, transformOrigin: "center center", ease: Power3.easeInOut})
      // TweenMax.from(iris, .5, {scale: .5, transformOrigin: "center center", ease: Power3.easeIn})
      // TweenMax.to(body, .5, {rotate: 10, transformOrigin: "center center", ease: Power2.easeInOut, yoyo: true, repeat: 1})
   }
   
   init()


// 