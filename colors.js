var pulsateInterval = null, i = 0;
$(document).ready(function() {
      // set interval to pulsate every 1500ms
      myAudio = new Audio('moe.mp3'); 
      if (typeof myAudio.loop == 'boolean'){
       myAudio.loop = true;
      }
      else{
        myAudio.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
        }, false);
      } 
      myAudio.play();
      pulsateInterval = setInterval(function(){
          // animate back and forth
          $('body').animate({
             backgroundColor: '#6600CC',
          }, 545).animate({
             backgroundColor: '#0000CC',
          }, 545).animate({
             backgroundColor: '#3300FF',
          }, 545).animate({
             backgroundColor: '#9900CC',
          }, 545).animate({
             backgroundColor: '#3300CC',
          }, 545).animate({
             backgroundColor: '#006699',
          }, 545).animate({
             backgroundColor: '#330099',
          }, 545);
          i++;
          // stop at 50000 pulsations
          if(i == 50000){
              clearInterval(pulsateInterval);
          }
      }, 1600);
});

function changePenguin(){
  $(".cat").hide();
  $(".penguin").show();
}

function changeCat(){
  $(".penguin").hide();
  $(".cat").show();
}