var box1,box2,box3,box3,box4,box5,ball;


function draw(){
   box1=  rect (200,400,20,20)
    box2= rect (200,500,20,20)
    box3= rect (200,300,20,20)
    box4= rect (200,100,20,20)
    box5=rect (200,150,20,20)

    createCanvas= (500,500);
    drawSprites;
    background ('black');

    if (box1.istouching(ball)){
        bounce box1;


    }
    if (box2.istouching(ball)){
        bounce box2;
        

    }
    if (box3.istouching(ball)){
        bounce box3;
        

    }
    if (box4.istouching(ball)){
        bounce box4;
        

    }
    if (box5.istouching(ball)){
        bounce box5;
        

    }


}


