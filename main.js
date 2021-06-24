canvas=new fabric.Canvas("myCanvas")
block_width=30
block_height=30
player_x=10
player_y=10
player_object=""
block_object=""
function player_update() {
fabric.Image.fromURL("player.png",function(img){
player_object=img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function block_update(new_img) {
    fabric.Image.fromURL(new_img,function (img) {
        block_object=img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_object)
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(event) {
    keypressed= event.keyCode;
  console.log(keypressed);
    if (event.shiftKey ==true&&keypressed=="80") {
        block_width= block_width+10;
        block_height= block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (event.shiftKey ==true&&keypressed=="77") {
        block_width= block_width-10;
        block_height= block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if (keypressed=="37") {
        Move_left();
    }
    if (keypressed=="38") {
        Move_up();
    }
    if (keypressed=="39") {
        Move_right();
    }
    if (keypressed=="40") {
        Move_down();
    }
    if (keypressed=="66") {
        block_update("bricks.jpg")
    }
    if (keypressed=="68") {
        block_update("dark_green.png")
    }
    if (event.shiftKey==true&&keypressed=="71") {
        block_update("glow_stone.png")
    }
    if (keypressed=="71") {
        block_update("Grass.png")
    }
    if (keypressed=="76") {
        block_update("light_green.png")
    }
    if (keypressed=="78") {
        block_update("netherack.jpg")
    }
    if (keypressed=="83") {
        block_update("stone.jpg")
    }
    if (keypressed=="84") {
        block_update("trunk.jpg")
    }
    if (keypressed=="89") {
        block_update("yellow_bricks.png")
    }
}
function Move_up() {
    if (player_y>=0) {
        player_y= player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function Move_down() {
    if (player_y<=500) {
        player_y= player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function Move_left() {
    if (player_x>=0) {
        player_x= player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function Move_right() {
    if (player_x<=900) {
        player_x= player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}