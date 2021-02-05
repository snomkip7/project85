 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");

 rover_height = 90;
 rover_width = 100;
 rover_x = 10;
 rover_y = 10;

 car_height = 90;
 car_width = 100;
 car_x = 10;
 car_y = 200;
 
 var winner = "none";

 background_image = "background.jpg";
 rover_image = "car1.png";
 car_image = "car3.png";

 function add(){
     background_imgTag = new Image();
     background_imgTag.onload = uploadBackground;
     background_imgTag.src = background_image;

     rover_imgTag = new Image();
     rover_imgTag.onload = uploadrover;
     rover_imgTag.src = rover_image;
//car2
     car_imgTag = new Image();
     car_imgTag.onload = uploadcar;
     car_imgTag.src = car_image;
 }
 function uploadBackground(){
     ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
 function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
    console.log("x: ", rover_x, "y:", rover_y);
 }
 //car2
 function uploadcar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    console.log("x: ", car_x, "y:", car_y);
 }

 window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
     keyPressed = e.keyCode;
     console.log(keyPressed);
     if(keyPressed == '38'){
         up();
         console.log("up");
     }
     if(keyPressed == '40' ){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    //car2
    if(keyPressed == '87'){
        up1();
        console.log("up");
    }
    if(keyPressed == '83' ){
       down1();
       console.log("down");
   }
   if(keyPressed == '65'){
       left1();
       console.log("left");
   }
   if(keyPressed == '68'){
       right1();
       console.log("right");
   }
   //winner
   if ((rover_x == 700) && (winner != "won")){
       document.getElementById('winner').innerHTML = "Car 1 has won";
       winner = "won";
       console.log("car1 has won");
   }
   if ((car_x == 700) && (winner != "won")){
       document.getElementById('winner').innerHTML = "Car 2 has won";
       winner = "won";
       console.log("car2 has won");
   }
   
 }
 //car1
 function up(){
     if (rover_y >= 0){
         rover_y = rover_y - 10;
         uploadBackground();
         uploadrover();
         uploadcar();
     }
 }
 function down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        uploadBackground();
         uploadrover();
         uploadcar();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
         uploadrover();
         uploadcar();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        uploadBackground();
         uploadrover();
         uploadcar();
    }
}
//car2
function up1(){
    if (car_y >= 0){
        car_y = car_y - 10;
        uploadBackground();
         uploadrover();
         uploadcar();
    }
}
function down1(){
   if (car_y <= 500){
       car_y = car_y + 10;
       uploadBackground();
         uploadrover();
         uploadcar();
   }
}
function left1(){
   if (car_x >= 0){
       car_x = car_x - 10;
       uploadBackground();
         uploadrover();
         uploadcar();
   }
}
function right1(){
   if (car_x <= 700){
       car_x = car_x + 10;
       uploadBackground();
         uploadrover();
         uploadcar();
   }
}

