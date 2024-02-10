var crsr =  document.querySelector("#cursor")
var blur =  document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x - 220+"px"
  blur.style.top = dets.y - 220+"px"

})




gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    // marker:true,
    scrub:3,
    start:"top -50%",
    end:"top -100%"
  }
})
gsap.from("#page1 h1",{
  x: -600,
  opacity: 0,
  stagger: 0.5,
  delay:0.5,
  duration: 1,
  scrub:2
  
  

})


let allh4 = document.querySelectorAll("#nav h4")
allh4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  
})
})
gsap.from("#about-us img, #about-us-in",{
  y:50,
  opacity:0,
  duration:2,
  // stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 50%",
    scrub:3
  }
})
gsap.from(".card",{
  y:50,
  opacity:0,
  duration:2,
  stagger:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:3
  }
})
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:" top 50%",
    scrub:1
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 60%",
    end:" top 50%",
    scrub:1
  }
})
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});