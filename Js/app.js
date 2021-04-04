// Detect if a link's href goes to the current page
function getSamePageAnchor (link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if(elem) {
    if(e) e.preventDefault();
    gsap.to(window, 1 , {scrollTo: elem});
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('nav a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);





   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(ScrollToPlugin);

   const tl = gsap.timeline({ defaults: { duration:1 }})
   tl
   .from('.navbar' ,
   {
      y:"-100%", opacity:0})
      .from('.nav-link',{ 
          opacity:0, stagger:.2
       })
 
  .from(".header-left", 
  {
            x:"-101vw", opacity:0 , stagger:.1 , ease:Back.easeOut },1)
  .from(".header-right", 
  {
            x:"100vw", opacity:0 , ease:Back.easeOut },2)
 
  gsap.from('.feature', 
              {
                scrollTrigger:'.feature',
               duration:1, y:"100", opacity:0 , stagger:.1 })
 
  gsap.from('.testi', 
              {
                scrollTrigger:'.testi',
               duration:1, y:"100", opacity:0 , stagger:.1 })
  gsap.from('.center', 
              {
                scrollTrigger:'.center',
               duration:1, y:"100", opacity:0 , stagger:.1 })
  gsap.from('.left', 
              {
                scrollTrigger:'.left',
               duration:1, x:"100vw", rotation:360, opacity:0 , stagger:.1 })
  gsap.from('.right', 
              {
                scrollTrigger:'.right',
               duration:1, x:"-100vw", opacity:0, rotation:-360, stagger:.1 })

  gsap.from('.cta', 
              {
                scrollTrigger:'.cta',
               duration:1, y:"150", opacity:0 , stagger:.1 })
  gsap.from('.f-left', 
              {
                scrollTrigger:'.f-left',
               duration:1, x:"100vw", opacity:0 , rotation:360,  stagger:.1, ease:Back.easeOut  })
  gsap.from('.f-right', 
              {
                scrollTrigger:'.f-right',
               duration:1, x:"-100vw", opacity:0 , rotation:360, stagger:.1 , ease:Back.easeOut })
 

 
  
 