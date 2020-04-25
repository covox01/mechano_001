
// ----- Global Variables -->
   // Body
   var screen = document.getElementById("screen")
   var body = document.getElementById("body")
   var armRight = document.getElementById("arm-right")
   var armLeft = document.getElementById("arm-left");
   var armDotRight = document.getElementById("arm-dot-right");
   var armDotLeft = document.getElementById("arm-dot-left");
   var detailLine = document.getElementById("detail-line");

   // Eye
   var iris = document.getElementById("iris");
   var gearOne = document.getElementById("gear-one")
   var gearPattern = document.getElementById("gear-pattern");
   var innerPattern = document.getElementById("inner-pattern");
   var innerIrisRing = document.getElementById("inner-iris-ring");
   var outerRing = document.getElementById("outer-ring")
   var buttonRing = document.getElementById("button-ring")

   // Button IDs
   var centerButton = document.getElementById("center-button")
   var innerButtonRing = document.getElementById("inner-button-ring")
   var innerButtonPattern = document.getElementById("inner-button-pattern")
   var outerButtonPattern = document.getElementById("outer-button-pattern")
   var buttonBase = document.getElementById("button-base")
   var whiteInnerButtonRing = document.getElementById("white-inner-button-ring");
   var button = document.getElementById("button")

// Master Timeline -->
   function intro_bodyAnimation(){
      var tl = new TimelineMax({id: "intro body"})
      tl
         .to(body, .7, { y: -50, ease: Back.easeInOut.config(5)})
         .to(body, .4, { y: 0, ease: Back.easeOut.config(3)}, "-=.2")

      return tl
   }

   function intro_irisAnimation(){
      var tl = new TimelineMax({id: "intro iris animation"})
      tl
         .to(gearOne, .7, {y: 20, ease: Back.easeInOut})
         .to(gearOne, .25, {y: 80, ease: Power2.easeInOut}, "-=.2")
         .to(gearOne, .3, {y: 0, ease: Back.easeOut.config(2)})

      return tl
   }

   function intro_buttonAnimation() {
      var tl = new TimelineMax({id: "intro button"})
      tl
         .to(button, .5, {y: 0, ease: Power3.easeOut, opacity: 1})
         .to(button, .3, {scale: 1, ease: Back.easeOut.config(3), opacity: 1}, "-=.3sync")
         .from(buttonRing, .5, {scale: .5, ease: Power3.easeOut, transformOrigin: "center center"}, "-=.3sync")

      return tl
   }

   function intro_arms(){
      var tl = new TimelineMax({ id: "intro button"});
      tl
         .to(armRight, .2, {x:0, ease: Power2.easeInOut }, "sync")
         .to(armLeft, .2, {x: 0, ease: Power2.easeInOut }, "sync")

         .to(armRight, .3, {y:-30, ease: Power2.easeInOut }, "-=.1sync")
         .to(armLeft, .3, {y:-30, ease: Power2.easeInOut }, "-=.1sync")

         .to(armRight, .3, {y: 0, ease: Back.easeOut.config(3) }, "sync2")
         .to(armLeft, .3, {y: 0, ease: Back.easeOut.config(3) }, "sync2")

         .to(armDotLeft, .3, {y: -120, ease: Power3.easeInOut}, "sync3")
         .to(armDotRight, .3, {y: 120, ease: Power3.easeInOut}, "sync3")
         .to(armDotLeft, .3, {y: -60, ease: Power3.easeInOut}, "sync4")
         .to(armDotRight, .3, {y: 60, ease: Power3.easeInOut}, "sync4")

         .to(iris, .4, {scale: 1.4}, "sync5")
         .to(armDotLeft, .2, {y: 0, ease: Power3.easeInOut}, "sync5")
         .to(armDotRight, .2, {y: 120, ease: Power3.easeInOut}, "sync5")
         .to(armRight, .4, {y: 20, ease: Power3.easeOut}, "sync5")
         .to(armLeft, .4, {y: 20, ease: Power3.easeOut}, "sync5")
         .to(armRight, .2, {y: 0, ease: Power3.easeOut}, "sync6-=.2")
         .to(armLeft, .2, {y: 0, ease: Power3.easeOut}, "sync6-=.2")

      return tl;
   }

    function intro_iris_animation() {
      var tl = new TimelineMax({ id: "iris" });
      tl
         .from(iris, 0.2, { scale: .7, ease: Power2.easeInOut, transformOrigin: "center center" }, "sync")
         .to(iris, .2, {fill: "url(#iris_1_)"}, "sync")

      return tl;
   }

   // function intro_gear_animation(){

   // }


   
	function introAnimation(){  
      var tl = new TimelineMax({})
      tl
         .add(intro_bodyAnimation(), "sync") 
         .add(intro_irisAnimation(), "sync")
         .add(intro_buttonAnimation(), "-=.4")
         .add(intro_arms(), "-=.5")
         .add(intro_iris_animation(), "-=.3")
         // .add(intro_gear_animation())


         // GSDevTools.create();
         return tl
	}
	
// ----- Init -->

   function setup(){
      var tl = new TimelineMax({})
      tl
      // Body
         .set(armRight, {x: -15, force3D: false, rotation: 0.01})
         .set(armLeft, {x: 15, force3D: false, rotation: 0.01})
         .set(detailLine, {scale: .3, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})

      // Eye
         .set(gearOne, {y: 43, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(iris, { transformOrigin: "center center", force3D: false, rotation: 0.01, fill: "url(#iris_2_)"})
         .set(gearPattern, {scale: .5, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerPattern, {scale: .6, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(outerRing, {scale: .45, transformOrigin: "center center", force3D: false, rotation: 0.01})

      // Button
         .set(button, {y: -150, scale: .8, opacity: 0, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(outerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(whiteInnerButtonRing, {scale: .85, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 1})
         .set(buttonBase, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set("*", {visibility: "visible"})
         .to(body, .5, {opacity: 1, force3D: false, rotation: 0.01})
         .add(introAnimation())
   }

	function init() {
      TweenMax.set(body, {opacity: 0, onComplete: setup})
   }

   document.addEventListener("DOMContentLoaded", function(event) {
      // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
      window.addEventListener("load", function(e) {

            // run all GSAP code here
               init();

   }, false);
});


   


// 