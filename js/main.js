
// ----- Global Variables -->
   // Body
   var screen = document.getElementById("screen")
   var body = document.getElementById("body")
   var chasis = document.getElementById("chasis");
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

// ----- Global Timelines ----->
   var hoverTL = new TimelineMax({});
   var hoverSpinTL = new TimelineMax({});
   var hoverOutTL = new TimelineMax({});
   var setupTL = new TimelineMax({});
   var initRingSpinTL = new TimelineMax({})


// --------------- Intro Animation  -->
   function intro_bodyAnimation(){
      var tl = new TimelineMax({id: "intro body"})
      tl
         .to(body, .7, {y: -50, ease: Back.easeInOut.config(5)})
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
         .to(detailLine, .3, {opacity: 1, scale: 1, ease: Power3.easeOut}, "-=.4")

      return tl
   }

   function intro_arms(){
      var tl = new TimelineMax({ id: "intro arms"});
      tl
         .to(armRight, .2, {x:0, ease: Power2.easeInOut }, "sync")
         .to(armLeft, .2, {x: 0, ease: Power2.easeInOut }, "sync")
         .to([armRight, armLeft], .3, {y:-30, ease: Power2.easeInOut })
         .to([armRight, armLeft], .3, {y: 0, ease: Back.easeOut.config(2) })
         .to(armDotLeft, .3, {y: -120, ease: Power3.easeInOut}, "sync4-=.1")
         .to(armDotRight, .3, {y: 120, ease: Power3.easeInOut}, "sync4-=.1")

      return tl;
   }

   function intro_irisAnimation2() {
      var tl = new TimelineMax({ id: "iris" });
   tl
      .set(iris, {fill: "url(#iris_1_)", opacity: 1})
      .to(iris, 0.2, {scale: 1.3, ease: Power3.easeInOut, transformOrigin: "center center", opacity: 1})

   return tl;
   }

   function outerRing_animation() {
      var tl = new TimelineMax({id: "outer ring animation"})
      tl
         .to(outerRing, .45, {scale: 1,  ease: Back.easeOut}, "sync")
         .to(gearPattern, .45, {scale: 1, opacity: 1, ease: Power3.easeOut}, "sync")
         .to(innerPattern, .25, {scale: 1, opacity: 1, ease: Power3.easeOut}, "sync")
         .to(iris, .2, {scale: 1, onComplete: addPostActivationListeners}, "-=.2")
         
      return tl;
   }

   function outerButtonRing_animation() {
      var tl = new TimelineMax({id: "outer button ring animation"})
      tl
         .to([outerButtonPattern, buttonBase], .45, {scale: 1,  ease: Back.easeOut, opacity: 1}, "sync")
         .to(innerButtonPattern, .25, {scale: 1, opacity: 1, ease: Power3.easeOut}, "sync")
         .to(whiteInnerButtonRing, .25, {scale: 1, opacity: 1, ease: Power3.easeOut}, "sync")
         
      return tl;
   }

   function outerRing_animationSpin (){
      var tl = new TimelineMax({id: "outer ring spin"})
      tl
         .to(gearPattern, 20, {rotation: 360, ease: Linear.easeNone, repeat: -1}, "sync")
         .to(innerPattern, 40, {rotation: -360, ease: Linear.easeNone, repeat: -1}, "sync")
      
      return tl
   }

   function outerButtonRing_animationSpin (){
      var tl = new TimelineMax({id: "outer button ring spin"})
      tl
         .to(outerButtonPattern, 10, {rotation:-360, ease: Linear.easeNone, repeat: -1}, "sync")
         .to(innerButtonPattern, 10, {rotation: 360, ease: Linear.easeNone, repeat: -1}, "sync")
      
      return tl
   }

   function metronome (){
      var tl = new TimelineMax({id: "outer button ring spin", repeat: -1, yoyo:true})
      tl
         .to(armDotLeft, 2, {y: 0, ease: Power3.easeInOut}, "sync")
         .to(armDotRight, 2, {y:  0, ease: Power3.easeInOut}, "sync")

      return tl
   }
// ----- Intro animation master timeline ----->

	function introAnimation(){  
      var tl = new TimelineMax({})
      tl
         .add(intro_bodyAnimation(), "sync") 
         .add(intro_irisAnimation(), "sync")
         .add(intro_buttonAnimation(), "-=.4")
         .add(intro_arms(), "-=.5")
         .add(intro_irisAnimation2(), "-=.3")

         .add(outerButtonRing_animation(), "sync2-=.2")
         .add(outerRing_animation(), "sync2-=.2")
        
         .add(outerRing_animationSpin(), "sync3-=.2")
         .add(outerButtonRing_animationSpin(), "sync3-=.2")
         .add(metronome(), "sync3+=.5")

         // GSDevTools.create();
         return tl
   }

// ------ Animation Reset Functions ----->

   function resetIris(){
      var tl = new TimelineMax()
      tl
         .to(gearOne, .7, {y: 45, ease: Back.easeInOut}, "sync")
         .to([gearPattern, outerRing], .5, {scale: .5, rotation: "+=100", ease: Power2.easeInOut}, "sync")
         .to(innerPattern, .5, {scale: .7, opacity: 0, ease: Power2.easeInOut}, "sync")
         .to(iris, .5, {opacity: 0, scale: .3, fill: "url(#iris_2_)", ease: Power2.easeInOut}, "sync")
         .to(iris, .5, {opacity: 1, scale: 1, ease: Back.easeInOut}, "-=.3")

      return tl
   }

   function resetButton(){
      var tl = new TimelineMax()
      tl
         .to([outerButtonPattern, innerButtonPattern, buttonBase, whiteInnerButtonRing], .5, {scale: .7}, "sync")
         .to(button, .5, {opacity: 0, y: -140, ease: Back.easeInOut.config(3), scale: .8}, "sync")
         .to(detailLine, .5, {scale: .5, opacity: 0})

      return tl
   }

   function resetArms(){
      var tl = new TimelineMax()
      tl
         .to(armLeft, .5, {x: 30, ease: Back.easeInOut.config(3)}, "sync")
         .to(armRight, .5, {x: -30, ease: Back.easeInOut.config(3)}, "sync")

      return tl
   }

   function resetChasis(){
      var tl = new TimelineMax()
      tl
         .to(chasis, .5, {scale: 1.1, ease: Back.easeInOut.config(5)})
         .to(chasis, .5, {scale: 1, ease: Back.easeInOut}, "-=.2")

      return tl
   }

   function restartIntro(){
      
   }

   function resetAnimation(){
      chasis.removeEventListener("mousedown", resetAnimation, false)
      chasis.setAttribute("id", "removeCursor")
      var tl = new TimelineMax({onComplete: restartIntro})
      tl
         .add(resetChasis(), "sync")
         .add(resetIris(), "sync")
         .add(resetButton(), "sync+=.2")
         .add(resetArms(), "sync")  

      
   }

//   -------------- Initial State of Elements and Animations ----------------- >


//   Event Handlers that will trigger Hover, Hover Out, and Click events that will have different animations
   function addEventListeners(){
      chasis.addEventListener("mouseenter", hoverOn)
      chasis.addEventListener("mouseleave", hoverOut)
      chasis.addEventListener("mousedown", activateRobot)
   }
//   After the click event activates, a new click event is added to reset the animation
   function addPostActivationListeners(){
      chasis.addEventListener("mousedown", resetAnimation)
   }

//   Mouse Click will remove all intro event handlers to prevent users from clicking the element needlessly
   function activateRobot(){
      // Activates the animation for the intro
      introAnimation()
      // Removes the previous event listeners
      chasis.removeEventListener("mouseenter", hoverOn, false)
      chasis.removeEventListener("mouseleave", hoverOut, false);
      chasis.removeEventListener("mousedown", activateRobot, false);
      // Resets animated elements before the intro animation kicks in
      TweenMax.to([outerRing, gearPattern], .5, { scale: .5, rotation: 0, ease: Power2.easeInOut, transformOrigin: "center center"})
      TweenMax.to([gearPattern], .5, { opacity: 0, scale: .5, rotation: 0, ease: Power2.easeInOut, transformOrigin: "center center"})
      TweenMax.to(iris, 0.2, { scale: 0.2 });
      TweenMax.set(iris, { fill: "url(#iris_2_)", delay: 0.2 });
      TweenMax.to(iris, 0.2, { scale: 1, opacity: 1, delay: 0.3 });
      TweenMax.to(chasis, .2, {scale: 1})
      // Kills previous timelines to ensure elements on the intro animation don't conflict with the previous ones
      hoverTL.pause()
      hoverOutTL.pause()
      initRingSpinTL.pause()
       console.log("clicked");
   }

//    When the user hovers over the chasis, the iris rings will pause
   function hoverOn(e){
      e.preventDefault();
      TweenMax.to(iris, .2, {scale: .2 });
      TweenMax.set(iris, {fill: "url(#iris_1_)", delay: .2});
      TweenMax.to(iris, 0.2, { scale: 1.2, opacity: 1, delay: .3});
      TweenMax.to(chasis, .7, {scale: 1.1, ease: Back.easeInOut.config(5), transformOrigin: "center center"})
      return hoverTL
   }

//    When mouse hover off the chasis, the iris rings will resume in it's timeline and continue looping
   function hoverOut(e){
      e.preventDefault();
      TweenMax.to(iris, .2, {scale: .2 });
      TweenMax.set(iris, {fill: "url(#iris_2_)", delay: .2});
      TweenMax.to(iris, 0.5, { scale: 1, opacity: 1, delay: .3});
      TweenMax.to(chasis, 0.5, { scale: 1, ease: Back.easeInOut.config(5), transformOrigin: "center center" });
   }

   function initRingSpin(){
      initRingSpinTL
         .to([outerRing], 1, {opacity: 1, scale: .6, ease: Power2.easeInOut, transformOrigin: "center center", repeat: -1, yoyo: true}, "sync")
         .to(gearPattern, 1, { scale: .6, ease: Power2.easeInOut, repeat: -1, yoyo: true, transformOrigin: "center center"}, "sync")
         .to(innerIrisRing, 1, {scale: .9, ease: Power2.easeInOut, repeat: -1, yoyo: true}, "sync")
   }

   // ----- Init setup of all elements before being interacted with -->
   function setup(){
      setupTL
      // Body
         .set(armRight, {x: -15, force3D: false, rotation: 0.01})
         .set(armLeft, {x: 15, force3D: false, rotation: 0.01})
         .set(detailLine, {scale: .3, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})

      // Eye
         .set(gearOne, {y: 43, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(iris, { transformOrigin: "center center", force3D: false, rotation: 0.01, fill: "url(#iris_2_)"})
         .set(gearPattern, { scale: .45, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 1})
         .set(innerPattern, {scale: .6, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerIrisRing, {scale: .6, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(outerRing, {scale: .45, transformOrigin: "center center", force3D: false, rotation: 0.01})

      // Button
         .set(button, {y: -150, scale: .8, opacity: 0, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(outerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(whiteInnerButtonRing, {scale: .85, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 1})
         .set(buttonBase, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set("*", {visibility: "visible"})
         .to(chasis, .5, {opacity: 1, force3D: false, rotation: 0.01, onComplete: initRingSpin})
   }

   // Init activates the setup once the chasis is at a 0 opacity

	function init() {
      TweenMax.set(chasis, {opacity: 0, onComplete: setup})
      addEventListeners()
   }

   document.addEventListener("DOMContentLoaded", function(event) {
      // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
      window.addEventListener("load", function(e) {

            // run all GSAP code here
               init();

   }, false);
});


   


// 