(function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var mouse = {x:0, y:0};
    var imgpos = {x:0, y:0};
    var height = 128;
    var width = 128;
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
        var image = document.getElementById("image");
        var locWidth = getRandomInt(0, window.innerWidth - image.width*2);
        var locHeight = getRandomInt(0, window.innerHeight - image.height*2);
        ctx.drawImage(image, locWidth, locHeight, width, height);
        imgpos.x = locWidth;
        imgpos.y = locHeight;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})();

