(function() {
    var canvas = document.getElementById('canvas');
    var cover = document.getElementById('cover');
    var ctx = canvas.getContext('2d');
    var mouse = {x:0, y:0};
    var imgpos = {x:0, y:0};
    var img = new Image();
    img.src = "defcon.png";
    var height = 128;
    var width = 128;
    var onPic = false;
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
                /**
                 * Your drawings need to be inside this function otherwise they will be reset when 
                 * you resize the browser window and the canvas goes will be cleared.
                 */
        drawStuff(); 
    }
    resizeCanvas();
    function drawStuff() {
        drawRandomSpot();
    }

    canvas.addEventListener('mousemove', function(e){
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if((mouse.x >= imgpos.x && mouse.x <= imgpos.x + width) && (mouse.y >= imgpos.y && mouse.y <= imgpos.y + height)){
            if(onPic == false){
                onPic = true;
                $(cover).hide();
            }
        }
        else{
            onPic = false;
            $(cover).show();
        }
    }, false);

    canvas.addEventListener('click', function(){
        if((mouse.x >= imgpos.x && mouse.x <= imgpos.x + width) && (mouse.y >= imgpos.y && mouse.y <= imgpos.y + height)){
            alert("Found!");
        }
        else{
            alert("Nope!");
        }
    }, false);

    function drawRandomSpot(){
        
        img.onload = function(){
            var locWidth = getRandomInt(0, window.innerWidth - image.width*2);
            var locHeight = getRandomInt(0, window.innerHeight - image.height*2);
            imgpos.x = locWidth;
            imgpos.y = locHeight;
            ctx.drawImage(image, locWidth, locHeight, width, height);
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})();

