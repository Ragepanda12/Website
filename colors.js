var pulsateInterval = null, i = 0;
$(document).ready(function() {
      // set interval to pulsate every 1500ms
      pulsateInterval = setInterval(function(){
          // animate back and forth
          $('body').animate({
             backgroundColor: '#6600CC',
          }, 200).animate({
             backgroundColor: '#0000CC',
          }, 200).animate({
             backgroundColor: '#3300FF',
          }, 200).animate({
             backgroundColor: '#9900CC',
          }, 200).animate({
             backgroundColor: '#3300CC',
          }, 200).animate({
             backgroundColor: '#006699',
          }, 200).animate({
             backgroundColor: '#330099',
          }, 300);
          i++;
          // stop at 50000 pulsations
          if(i == 50000){
              clearInterval(pulsateInterval);
          }
      }, 1600);
});