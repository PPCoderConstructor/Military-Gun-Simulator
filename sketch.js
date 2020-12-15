/*
--------PROJECT C - 21 (MILITARY GUN SIMULATOR)--------
== Created by Priyansh Prakash (Student of WhiteHat Jr.) ==
*/



//Variables of the Simulator.
//Variables of the simulator states and their values.
    var simulator_state, state1, state2, state3;

//Variables for different types of guns.
    var gun1, gun1_image;
    var gun2, gun2_image;
    var gun3, gun3_image;

//Variables for bullet.
    var bullet, bullet_image, bullet_weight, bullet_speed, bullet_weight2, bullet_speed2, bullet_weight3, bullet_speed3, shoot, reload;

//Variables for wall.
    var wall, wall_image, wall_thickness, wall_thickness2, wall_thickness3;

//Sounds for buttons.
    var click;

//Variable for background.
    var bg, bg_image;

//Variables for buttons of the game.
    var gunButton, gunButton_image;
    var gun2Button, gun2Button_image;
    var gun3Button, gun3Button_image;
    var conclusionButton, conclusionButton_image;

//Variable for button select panel.
    var select_panel;

//This function loads images, sounds, animations etc.
    function preload() {

        //Image for Gun - 1.
            gun1_image = loadImage("AWM.png");

        //Image for Gun - 2.
            gun2_image = loadImage("M416-2.png");

        //Image for Gun - 3.
            gun3_image = loadImage("gun3.png");

        //Image for bullet.
            bullet_image = loadImage("bullet.png");

        //Image for gunButtons.
            gunButton_image = loadImage("gun_button.png");

            gun2Button_image = loadImage("gun2_buton.png");

            gun3Button_image = loadImage("gun3_button.png");

        //Image for Conclusion button which tells the final answer.
            conclusionButton_image = loadImage("ans.png");

        //Sound of button clicking.
            click = loadSound("button.mp3");

        //Images for wall.
            wall_image = loadImage("brick.png");

        //Images for background.
            bg_image = loadImage("camp.jpg");

        //Sound for bullet.
            shoot = loadSound("shoot.mp3");

        //Sound for reload.
            reload = loadSound("cock.mp3");
    }

//This function creates Sprites, objects etc. of the simulator.
    function setup() {

        //To create Canvas.
            createCanvas(1400, 400);

        //Tp create background.
            bg = createSprite(700,100);
                bg.addImage(bg_image);
                bg.scale = 1.4;

        //To create bullets.
            bullet = createSprite(340,188.5);
                bullet.addImage(bullet_image);
                bullet.scale = 0.02;

        //To create guns.
            gun1 = createSprite(340,200);
                gun1.addImage(gun1_image);
                gun1.scale = 0.35;

            gun2 = createSprite(340,200);
                gun2.addImage(gun2_image);
                gun2.scale = 0.45;

            gun3 = createSprite(340,200);
                gun3.addImage(gun3_image);
                gun3.scale = 0.15;

        //To create button select panel.
            select_panel = createSprite(50,200,200,400);
                select_panel.shapeColor = "lightGreen";
                
        //To create buttons.
            gunButton = createSprite(70,80);
                gunButton.addImage(gunButton_image);

            gun2Button = createSprite(70,200);
                gun2Button.addImage(gun2Button_image);

            gun3Button = createSprite(70,320);
                gun3Button.addImage(gun3Button_image);

        //To create wall.
            wall = createSprite(1380,200);
                wall.addImage(wall_image);

        //Button which tells in which case the wall is not safe.
            conclusionButton = createSprite(1265,40);
                conclusionButton.addImage(conclusionButton_image);

        //To create edges.
            edges = createEdgeSprites();    

        //Values of the simulator states'
            state1 = 1;
            state2 = 2;
            state3 = 3;

        //The first state.
            simulator_state = state1;

        //Bullet's speed and weight values.
            bullet_speed = 80;
            bullet_weight = 180;
            wall_thickness = 30;

            bullet_speed2 = 80;
            bullet_weight2 = 110;
            wall_thickness2 = 30;

            bullet_speed3 = 80;
            bullet_weight3 = 175;
            wall_thickness3 = 43;
    }

//This function draws sprites, creates geometry etc.
    function draw() {
        //Background color.
            background(0,0,0);

        if(mouseIsOver(gunButton)) {
            gunButton.scale = 0.17;
        } else {
            gunButton.scale = 0.1;
        }

        if(mouseIsOver(gun2Button)) {
            gun2Button.scale = 0.17;
        } else {
            gun2Button.scale = 0.1;
        }

        if(mouseIsOver(gun3Button)) {
            gun3Button.scale = 0.17;
        } else {
            gun3Button.scale = 0.1;
        }

        if(mouseIsOver(conclusionButton)) {
            conclusionButton.scale = 0.2;
        } else {
            conclusionButton.scale = 0.15;
        }

        if(simulator_state === state1) {
            gun1.visible = true;
            gun2.visible = false;
            gun3.visible = false;
            bullet.y = 188.5;
        
             
            if(keyDown("space") || mousePressedOver(gun1)) {
                bullet.velocityX = 80;
            }

            if(bullet.isTouching(wall)) {
                bullet.x = 340;
                bullet.velocityX = 0;
                reload.play();
            }

            if(keyDown("space")  && bullet.x <400 || mousePressedOver(gun1) && bullet.x <400) {
                shoot.play();
            }

            if(mousePressedOver(gun2Button)) {
                simulator_state = state2;
                click.play();
            }

            if(mousePressedOver(gun3Button)) {
                simulator_state = state3;
                click.play();
            }
        }

        if(simulator_state === state2) {
            gun1.visible = false;
            gun2.visible = true;
            gun3.visible = false;
            bullet.y = 180;
            
            if(keyDown("space") || mousePressedOver(gun2)) {
                bullet.velocityX = 80;
            }

            if(bullet.isTouching(wall)) {
                bullet.x = 340;
                bullet.velocityX = 0;
                reload.play();
            }

            if(keyDown("space")  && bullet.x <400 || mousePressedOver(gun2) && bullet.x <400) {
                shoot.play();
            }

            if(mousePressedOver(gunButton)) {
                simulator_state = state1;
                click.play();
            }

            if(mousePressedOver(gun3Button)) {
                simulator_state = state3;
                click.play();
            }
        }

        if(simulator_state === state3) {
            gun1.visible = false;
            gun2.visible = false;
            gun3.visible = true;
            bullet.y = 165;
               
            if(keyDown("space") || mousePressedOver(gun3)) {
                bullet.velocityX = 80;
            }
    
            if(bullet.isTouching(wall)) {
                bullet.x = 340;
                bullet.velocityX = 0;
                reload.play();
            }
    
            if(keyDown("space")  && bullet.x <400 || mousePressedOver(gun3) && bullet.x <400) {
                shoot.play();
            }
    
            if(mousePressedOver(gunButton)) {
                simulator_state = state1;
                click.play();
            }
    
            if(mousePressedOver(gun2Button)) {
                simulator_state = state2;
                click.play();
            }
        }

        //This draws the sprites.
            drawSprites();

        //Text Conditions of all the states.
        //Text condition for State 1.
            if(simulator_state === state1 && mousePressedOver(conclusionButton)) {
                fill(170);
                textSize(60);
                textStyle(BOLD);
                textFont("Arial")
                text(Math.round(0.5*bullet_speed*bullet_speed*bullet_weight/(wall_thickness*wall_thickness*wall_thickness)),680,200);
                fill("red");
                textFont("Georgia")
                text("DEFORMATION", 484,115);
            }

        //Text condition for State 2.
            if(simulator_state === state2 && mousePressedOver(conclusionButton)) {
                fill(170);
                textSize(60);
                textStyle(BOLD);
                textFont("Arial")
                text(Math.round(0.5*bullet_speed2*bullet_speed2*bullet_weight2/(wall_thickness2*wall_thickness2*wall_thickness2)),690,200);
                fill("red");
                textFont("Georgia")
                text("DEFORMATION", 484,115);
            }

        //Text condition for State 3.
            if(simulator_state === state3 && mousePressedOver(conclusionButton)) {
                fill(170);
                textSize(60);
                textStyle(BOLD);
                textFont("Arial")
                text(Math.round(0.5*bullet_speed3*bullet_speed3*bullet_weight3/(wall_thickness3*wall_thickness3*wall_thickness3)),690,200);
                fill("red");
                textFont("Georgia")
                text("DEFORMATION", 484,115);
            }
        
    }



/*=======================
---------- END ----------
=======================*/
