// preload font
let inconsolata, redHat;
function preload() {
  inconsolata = loadFont('Inconsolata-Medium.ttf');
  redHat = loadFont('RedHatMono-Light.ttf')
}

// (not using this anymore)
var mainGraphicDiv= document.getElementById('mainGraphicDiv');

var aboutDiv = document.getElementById('aboutDiv');
var formDiv =  document.getElementById('contactFormDiv');

// set canvas background
var bgcolor;

// set the letters or the word
let myLetters = ['b','l','i','i','n','d','.','n','e','t'];

// Set up the Canvas
function setup() {

  // create a button
  enterButton = createButton("Enter");
  // but it inside the div
  enterButton.parent("enterButtonDiv");
  // set the position within the DIV
  enterButton.position(0,0);
  // give id to interact with CSS elements
  enterButton.id("enter-button");
  // when you press the mouse do thing
  console.log(enterToggle);
  enterButton.mouseReleased(clickState);
 
  // create your canvas
  myCanvas = createCanvas(windowWidth, windowHeight, WEBGL);

  //myCanvas.position(0,0);
  myCanvas.parent("mainGraphicDiv");
 
  bgcolor = color (254,254,254);

  // set up text variables  
  textFont(redHat);
  textSize(width / 15);
  textAlign( CENTER);

}

// the draw function by default runs continuously every frame
function draw() {
    background(bgcolor);
    let myTime = millis();
    //let myTime = millis();wordfunc.loop();
    //translate(width / 2, height / 2);

    if (enterToggle == 0) { 
        wordFunction(myTime);

    } 
    else if (enterToggle == 1)
    {
        let isitfade = wordFade(myTime);
        console.log(isitfade);
        if (isitfade == 0){
          //bgcolor = color(random(255));
          fadeOutButton();
          //enterButton.style('display','none');
          // stop the draw loop
          formDiv.style.color = 'rgb(0,0,0)';
          formDiv.style.display = 'inline';
          fadeInAbout();
          noLoop();

          
        }

    }
   
}

//// functions related to bliind sketch
var posX;
var posY;
var posZ;
var word;
var myTextFill; 
var enterButton;
//var i;
// the fun spinny word function!!
function wordFunction(time)
{   
  console.log(posX);
    for (let i = 0; i < myLetters.length; i++) {
        rotateX(time/2000);
        rotateY(time/8000);
        rotateZ(time/4000);
        //fill(150,150,150);
        myTextFill = fill(150,150,150);
        word = text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4); }
        //console.log(posX);
}

function wordFade(time)
{       
    let letCol = 50 + (time/25);
    for (let i = 0; i < myLetters.length; i++) {
        rotateX(time/2000);
        rotateY(time/8000);
        rotateZ(time/4000);
        fill(letCol,letCol,letCol);
        console.log(letCol);
        word = text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4);
      }
    if (letCol < 255){
      return 1;
    }
    else{
      return 0;
    }
     
}

function fadeOutButton() {
  //fade = 100;
  // because transition time is set in CSS you dont need fade here
  enterButton.style('color', 'rgb(254, 254, 254)');
}

function fadeInAbout() {
    //fade = 100;
    // because transition time is set in CSS you dont need fade here
    aboutDiv.style.color = 'rgb(0, 0, 0)';
 }
  

function fadeinButton() {
    //fade = 100;
    // because transition time is set in CSS you dont need fade here
    enterButton.style('color', 'rgb(0, 0, 0)');
  }


function hideDiv() {
  //mainDiv.hide();
  mainDiv.style.display = "none";
}

function rando() {
  //bgcolor = color(random(255));
  console.log(random(10)); 
}

let enterToggle = 0;
function clickState() {
    //bgcolor = color(random(255));
    enterToggle = 1;
    console.log(enterToggle); 
    return(enterToggle);
  }

function drawCircle() {
  ellipse(100,100,100,100);
}

// this is a global function in P5 you can write 
function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}



