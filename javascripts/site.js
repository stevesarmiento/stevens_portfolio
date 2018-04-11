//=================== VARIABLES ============================================

    var header = document.getElementsByClassName('main-header');
    var mainWrap = document.getElementsByClassName('main-wrap');
    var content = document.getElementsByClassName('main-container');
    var cardWrap = document.getElementsByClassName('card-container');
    var h1 = document.getElementsByTagName('h1');
    var h2 = document.getElementsByTagName('h2');
    var date = document.getElementsByClassName('main-date');
    var re = document.getElementById('csRe');
    var fr = document.getElementById('csFr');
    var lw = document.getElementById('csLw');
    var close = document.getElementsByClassName('overlay');
    var loader = document.getElementsByClassName('loader');
    var tlLoader = new TimelineMax({onComplete:loadContent});
    var tl = new TimelineMax();
    var submitBtn = document.getElementById('submit');
    var cardBtn = document.getElementsByClassName('card-btn');


//=================== PRELOADER & MAIN CONTENT FADE IN =================

    //Loader Animation
    tlLoader
      .staggerTo('.loader circle', .8, {
            attr: {"fill-opacity": 0},
            yoyo: true,
            ease: Power0.easeNone}, .10);
      
      //Fades Loader Out
      function loadContent(){

        var tlLoaderOut = new TimelineMax({onComplete:contentIn});
        
        tlLoaderOut
          .to(loader, .6, {
            autoAlpha:1, 
            scale:1.3,  
            ease:Power3.easeOut
          })
          .set('.loader-wrap', {
            autoAlpha:0, 
            ease:Power0.easeNone
          });
          }
      

      //Fades Content In
      function contentIn(){
        tl
          .set(mainWrap, {
            autoAlpha:1, 
            ease:Power0.easeNone}
            )
          .from(header, .8,{
            autoAlpha:0, y:'-200', 
            ease: Bounce.easeOut}, 0
            )
          .staggerFrom(content, .8,{
            autoAlpha:0, 
            y:'200', 
            ease: Bounce.easeOut}, 0
            )            
          .from(h1, .8,{
            autoAlpha:0, 
            y:'-200', 
            ease: Power3.easeOut}, 0
            )
          .from(h2, .8,{
            autoAlpha:0, 
            y:'-200', 
            ease: Bounce.easeOut}, 0
            )
          .from(date, .8, {
            autoAlpha:0, y:'-200', 
            ease: Bounce.easeOut}, 0
            )
          .from(cardWrap, .8, {
            autoAlpha:0, y:'-200', 
            ease: Bounce.easeOut}, 0
            );
          }


//============ OPEN AND CLOSE FUNCTIONS FOR CASE STUDIES ==============

        function openRe() {
          tl
            .to(re, 1, {
              height:'100%', 
              ease: Bounce.easeOut
            });
          }
        function openFr() {
          tl
            .to(fr, 1, {
              height:'100%', 
              ease: Bounce.easeOut
            });
          }
        function openLw() {
          tl
            .to(lw, 1, {
              height:'100%', 
              ease: Bounce.easeOut
            });
          }



    //=======  CLOSE CS FUNCTION ============

        function closeCs() {
          tl
            .to(close, .6, {
              height:'0', 
              ease: Power3.easeOut
            });
          }

//============== MOUSE HOVER STYLING ===========================
        
    submitBtn.addEventListener('mouseover', mouseOver);
    submitBtn.addEventListener('mouseout', mouseOut);

    function mouseOver(){
          TweenMax.to(submitBtn, .1,{  
          yPercent:-10,
          backgroundColor: '#7965a5'
        });
    }
    function mouseOut(){
          TweenMax.to(submitBtn, .1,{
          yPercent:0,
          backgroundColor: '#5a4b7b'
        });
      }

  //  cardBtn.addEventListener('mouseover', cardOver);
  //  cardBtn.addEventListener('mouseout', cardOut);

  //  function cardOver(){
  //        TweenMax.to(cardBtn, .8,{  
  //        yPercent:-10,
  //        rotation: -4
  //      });
  //  }
  //  function cardOut(){
  //        TweenMax.to(cardBtn, .8,{
  //        yPercent:0,
  //        rotation: 0
  //      });
  //    }  


