var canvas= new fabric.Canvas('myCanvas')
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