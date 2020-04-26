
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

// Master Timeline -->
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

         .to(armRight, .3, {y:-30, ease: Power2.easeInOut }, "-=.1sync")
         .to(armLeft, .3, {y:-30, ease: Power2.easeInOut }, "-=.1sync")

         .to(armRight, .3, {y: 0, ease: Back.easeOut.config(2) }, "sync2")
         .to(armLeft, .3, {y: 0, ease: Back.easeOut.config(2) }, "sync2")

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
         .to(iris, .2, {scale: 1}, "-=.2")
         
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
         .to(outerButtonPattern, 10, {rotation: 360, ease: Linear.easeNone, repeat: -1}, "sync")
         .to(innerButtonPattern, 10, {rotation: -360, ease: Linear.easeNone, repeat: -1}, "sync")
      
      return tl
   }

   function metronome (){
      var tl = new TimelineMax({id: "outer button ring spin", repeat: -1, yoyo:true})
      tl
         .to(armDotLeft, 2, {y: 0, ease: Power3.easeInOut}, "sync")
         .to(armDotRight, 2, {y:  0, ease: Power3.easeInOut}, "sync")
      
      return tl
   }

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
         .set(gearPattern, { scale: .5, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerPattern, {scale: .6, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(outerRing, {scale: .45, transformOrigin: "center center", force3D: false, rotation: 0.01})

      // Button
         .set(button, {y: -150, scale: .8, opacity: 0, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set(outerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(innerButtonPattern, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 0})
         .set(whiteInnerButtonRing, {scale: .85, transformOrigin: "center center", force3D: false, rotation: 0.01, opacity: 1})
         .set(buttonBase, {scale: .7, transformOrigin: "center center", force3D: false, rotation: 0.01})
         .set("*", {visibility: "visible"})
         .to(chasis, .5, {opacity: 1, force3D: false, rotation: 0.01})
         // .to([outerRing, gearPattern], 1, {opacity: 1, rotation: 20, scale: .7, ease: Power2.easeInOut, yoyo: true, repeat: -1, transformOrigin: "center center"})
         // .add(introAnimation())

      
   }

  

   function chasisHover(){
      //  var hoverTL = new TimelineMax({ repeat: -1 });
      // TweenMax.to(chasis, .2, {y: 0})
      // chasis.addEventListener("mouseenter", e => {
      //    hoverTL
      //       .to(chasis, 1, {y: 10, ease: Linear.easeNone, transformOrigin: "center center"})
      //       .to(chasis, 1,{y: 0, ease: Linear.easeNone})
      //       console.log("mouse enter")
      // }) 
      // chasis.addEventListener("mouseout", e => {
      //    hoverTL
      //       .kill()
      //       .to(chasis, 1, {y: 0, ease: Linear.easeNone, transformOrigin: "center center"})
      //       console.log("mouse <output></output>")
      // })


      chasis.addEventListener("mouseenter", hoverOn)
      chasis.addEventListener("mouseleave", hoverOut)
      chasis.addEventListener("mousedown", mouseClick)
   }

   var hoverTL = new TimelineMax()
   var hoverOutTL = new TimelineMax()

   function mouseClick(){
      introAnimation()
      console.log("clicked")
      chasis.removeEventListener("mouseenter", hoverOn, false)
      chasis.removeEventListener("mouseleave", hoverOut, false);
      hoverTL.kill()
      hoverOutTL.kill()
   }
   function hoverOn(e){
      e.preventDefault();
      // hoverOutTL.kill()
      // hoverTL.kill()
      //  hoverTL
      //    .set(chasis, {immediateRedner: false, y: 0})
      //    .to(chasis, 1, {y: 30, ease: Power2.easeInOut, transformOrigin: "center center"})
      //    .to(chasis, 1,{y: 0, ease: Power2.easeInOut})
      //    console.log("mouse on")
        
      // return hoverTL
      //  TweenMax.to(chasis, 1, {y: -10, ease: Power2.easeInOut, repeat: -1, yoyo: true})
      // TweenMax.to(chasis, 1, {y: 30, ease: Power2.easeInOut, repeat: -1, yoyo: true})
      TweenMax.to([outerRing, gearPattern], 1, {opacity: 1, rotation: 20, scale: .7, ease: Power2.easeInOut, yoyo: true, repeat: -1, transformOrigin: "center center"})
      // TweenMax.to(chasis, 1, { y: 0, delay: .5});
   }

   function hoverOut(e){
       e.preventDefault();
      // hoverTL.kill()
      // hoverOutTL.kill()
      //  hoverOutTL
         // .to(chasis, 1, {y: 10, ease: Linear.easeNone, transformOrigin: "center center"})
         // .to(chasis, 1,{y: 0, ease: Linear.easeNone})
         // .set(chasis, {y: 0})
         TweenMax.to(chasis, 1, {immediateRender: false, y: 0, ease:Power2.easeInOut, transformOrigin: "center center"})
         TweenMax.to([outerRing, gearPattern], 1, { scale: .5, rotation: 0, ease: Power2.easeInOut, transformOrigin: "center center"})
         TweenMax.to([gearPattern], 1, { opacity: 0, scale: .5, rotation: 0, ease: Power2.easeInOut, transformOrigin: "center center"})
         console.log("mouse out")
      
      return hoverOutTL
   }

	function init() {
      TweenMax.set(chasis, {opacity: 0, onComplete: setup})
      chasisHover()
     
   }

   document.addEventListener("DOMContentLoaded", function(event) {
      // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
      window.addEventListener("load", function(e) {

            // run all GSAP code here
               init();

   }, false);
});


   


// 