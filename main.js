
var blockwidth = 30;
var blockheight = 30;
var playerx = 10;
var playery = 10;
var palyerobj ="";
var blockimageobj ="";

function playerupdate() {
fabric.Image.fromURL("player.png",function(Img){
palyerobj=Img;
palyerobj.scaleToWidth(150);
palyerobj.scaleToHeight(150);
palyerobj.set({
    top:playery,
    left:playerx,
})
canvas.add(palyerobj)
})
}

function newimage(getimage) {
fabric.Image.fromURL(getimage,function(Img){
blockimageobj=Img;
blockimageobj.scaleToWidth(blockimagewidth);
blockimageobj.scaleToHeight(blockimageheight);
blockimageobj.set({
    top:playery,
    left:playerx,
})
canvas.add(blockimageobj)
})
}


function mykeydown(e) {
    keypressed = e.keyCode;

    console.log(keypressed);

    if(keypressed == "38") {
       up();

       console.log("up");
    }

    if(keypressed == "40") {
        down();
 
        console.log("up");
     }

     if(keypressed == "37") {
        left();
 
        console.log("up");
     }

     if(keypressed == "39") {
        right();
 
        console.log("up");
     }
     


     if(keypressed == "70") {
        newimage('ironman_face.png');
 
        console.log("f");
     }

     if(keypressed == "66") {
        newimage('spiderman_body.png');
 
        console.log("b");
     }


     if(keypressed == "76") {
        newimage('hulk_legs.jpg');
 
        console.log("l");
     }

     if(keypressed == "82") {
        newimage('thor__right_hand.png');
 
        console.log("r");
     }

     if(keypressed == "72") {
        newimage('captain_america_left.png');
 
        console.log("h");
     }


function up() {
    if(playery >= 0) {
        playery = playery-blockheight;
        console.log("blockheight = " + blockheight);
        console.log("when up arrow key is pressed,x = " + playerx + "y = " + playery)
        canvas.remove(palyerobj);
        playerupdate();
    }
}

function down() {
    if(playery <= 500) {
        playery = playery+blockheight;
        console.log("blockheight = " + blockeheight);
        console.log("when up arrow key is pressed,x = " + playerx + "y = " + playery)
        canvas.remove(palyerobj);
        playerupdate();
    }
}

function left() {
    if(playerx >= 0) {
        playerx = playerx-blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("when up arrow key is pressed,x = " + playerx + "y = " + playery)
        canvas.remove(palyerobj);
        playerupdate();
    }
}

function right() {
    if(playerx <= 900) {
        playerx = playerx+blockwidth;
        console.log("blockwidth = " + blockwidth);
        console.log("when up arrow key is pressed,x = " + playerx + "y = " + playery)
        canvas.remove(palyerobj);
        playerupdate();
    }
}
}