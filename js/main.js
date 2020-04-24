
// ----- Global Variables -->
   // Body
   var screen = document.getElementById("screen")
   var iris = document.getElementById("iris")
   var body = document.getElementById("body")
   var earRight = document.getElementById("ear-right")
   var earLeft = document.getElementById("ear-left");
   var earDotRight = document.getElementById("ear-dot-right");
   var earDotLeft = document.getElementById("ear-dot-left");
   var detailLine = document.getElementById("detail-line");


   // Eye
   var gearOne = document.getElementById("gear-one")
   var gearPattern = document.getElementById("gear-pattern");
   var innerPattern = document.getElementById("inner-pattern");
   var innerIrisRing = document.getElementById("inner-iris-ring");
   var outerRing = document.getElementById("outer-ring")


   // Button IDs
   var centerButton = document.getElementById("center-button")
   var innerButtonRing = document.getElementById("inner-button-ring")
   var innerButtonPattern = document.getElementById("inner-button-pattern")
   var outerButtonPattern = document.getElementById("outer-button-pattern")
   var buttonBase = document.getElementById("button-base")
   var whiteInnerButtonRing = document.getElementById("white-inner-button-ring");

   // gear1_rotation = gsap.getProperty("#gear1", "rotation");

// ----- Banner Animation Frames -->

	//-- Frame 1 -->

		function gear1_animation() {
         var tl = new TimelineMax({ id: "frame 1", repeat: -1, yoyo: true });
			tl
				.to(["#gear1"], 2.5, {ease: Back.easeInOut, rotation: 360}, "sync")
				.to(["#gear1"], 2, {ease: Back.easeInOut, y: 20}, "sync")
				.to(["#gear1"], 2, {ease: Back.easeInOut, y: 20}, "sync")
				
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
   function intro_bodyAnimation(){
      var bodyTL = new TimelineMax({id: "intro body"})
      bodyTL
         .to(body, .7, {y: -50, ease: Back.easeInOut.config(5)})
         .to(body, .25, {y: 0, ease: Back.easeInOut}, "-=.2")

      return bodyTL
   }

   function intro_irisAnimation(){
      var irisTL = new TimelineMax({id: "intro gear 1"})
      irisTL
         .to(gearOne, .7, {y: 20, ease: Back.easeInOut})
         .to(gearOne, .25, {y: 120, ease: Power2.easeInOut}, "-=.2")
         .to(gearOne, .5, {y: 0, ease: Power3.easeOut})

      return irisTL
   }
   
	function introAnimation(){  
      var tl = new TimelineMax({delay: 1})
      tl
         .add(intro_bodyAnimation) 
         .add(intro_irisAnimation)

      GSDevTools.create();
	}
	
// ----- Init -->

	function init() {
      introAnimation()

   // Body
      gsap.set(earRight, {x: -15})
      gsap.set(earLeft, {x: 15})
      gsap.set(detailLine, {scale: .3, transformOrigin: "center center", opacity: 0})

   // Eye
      gsap.set(gearOne, {y: 43, transformOrigin: "center center"})
      gsap.set(iris, {scale: .3, transformOrigin: "center center", fill: "black"})
      gsap.set(gearPattern, {scale: .3, transformOrigin: "center center", opacity: 0})
      gsap.set(innerPattern, {scale: .6, transformOrigin: "center center", opacity: 0})
      gsap.set(outerRing, {scale: .45, transformOrigin: "center center"})

   // Button
      gsap.set(button, {y: -150, scale: .9, opacity: 0, transformOrigin: "center center"})
      gsap.set(outerButtonPattern, {scale: .7, transformOrigin: "center center", opacity: 0})
      gsap.set(innerButtonPattern, {scale: .7, transformOrigin: "center center", opacity: 0})
      gsap.set(whiteInnerButtonRing, {scale: .85, transformOrigin: "center center", opacity: 1})
      gsap.set(buttonBase, {scale: .7, transformOrigin: "center center"})
   }
   
   init()


// 