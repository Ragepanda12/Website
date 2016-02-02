  var f = function() { 
    var d = new Date();
    var n = d.getTime();
    var bgcolor = "";
    switch(n%7){
      case 1:
      bgcolor="#0000CC"
      break;
      case 2:
      bgcolor="#3300FF"
      break;
      case 3:
      bgcolor="#9900CC"
      break;
      case 4:
      bgcolor="#3300CC"
      break;
      case 5:
      bgcolor="#006699"
      break;
      case 6:
      bgcolor="#330099"
      break;
      default:
      bgcolor="#6600CC"
    }
    document.body.style.backgroundColor = bgcolor;
  }
  setInterval(f, 500);
