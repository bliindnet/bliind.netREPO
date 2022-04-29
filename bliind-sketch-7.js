// Sketch One
/*
var s = function( p ) { // p could be any variable name
    var x = 100; 
    var y = 100;
    
    let inconsolata, redHat;
    p.preload = function(){
        inconsolata = p.loadFont('Inconsolata-Medium.ttf');
        redHat = p.loadFont('RedHatMono-Light.ttf');
      };
    
    // define DIVs in Index
    var aboutDiv = document.getElementById('aboutDiv');
    var formDiv =  document.getElementById('contactFormDiv');
    // set canvas background
    var bgcolor;
    // set the letters or the word
    let myLetters = ['b','l','i','i','n','d','.','n','e','t'];


    p.setup = function() {
      //p.createCanvas(400, 200);
        // create a button
        enterButton = p.createButton("Enter");
        // but it inside the div
        enterButton.parent("enterButtonDiv");
        // set the position within the DIV
        enterButton.position(0,0);
        // give id to interact with CSS elements
        enterButton.id("enter-button");
        // when you press the mouse do thing
        console.log(enterToggle);
        enterButton.mouseReleased(p.clickState);

        // create your canvas
        myCanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        
        bgcolor = p.color (254,254,254);

        // set up text variables  
        p.textFont(redHat);
        p.textSize(p.width / 15);
        p.textAlign(p.CENTER);
    
    };
  
    p.draw = function() {
        p.background(bgcolor);
        let myTime = p.millis();
        
        if (enterToggle == 0) { 
            p.wordFunction(myTime);
            } 

        else if (enterToggle == 1)
        {
            let isitfade = p.wordFade(myTime);
            console.log(isitfade);
            if (isitfade == 0){
              //bgcolor = color(random(255));
              p.fadeOutButton();
              //enterButton.style('display','none');
              // stop the draw loop
              formDiv.style.color = 'rgb(0,0,0)';
              formDiv.style.display = 'inline';
              p.fadeInAbout();
              p.noLoop();
            } 
        }
     
    };

    //// functions related to bliind sketch
    var word;
    var enterButton;

    // the fun spinny word function!!
    p.wordFunction = function(time)
    {   
        for (let i = 0; i < myLetters.length; i++) {
            p.rotateX(time/2000);
            p.rotateY(time/8000);
            p.rotateZ(time/4000);
            p.fill(150,150,150);
            word = p.text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4); }
    }
    // Fade word function
    p.wordFade = function(time)
    {       
        let letCol = 50 + (time/25);
        for (let i = 0; i < myLetters.length; i++) {
            p.rotateX(time/2000);
            p.rotateY(time/8000);
            p.rotateZ(time/4000);
            p.fill(letCol,letCol,letCol);
            console.log(letCol);
            word = p.text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4);
        }
        if (letCol < 255){
        return 1;
        }
        else{
        return 0;
        }
    }
    // fade out enter button
    p.fadeOutButton = function() {
        //fade = 100;
        // because transition time is set in CSS you dont need fade here
        enterButton.style('color', 'rgb(254, 254, 254)');
      }
    // fade in about
    p.fadeInAbout = function() {
        //fade = 100;
        // because transition time is set in CSS you dont need fade here
        aboutDiv.style.color = 'rgb(0, 0, 0)';
      }

    // Function to change state of enter button
    let enterToggle = 0;    
    p.clickState = function(){
        //bgcolor = color(random(255));
        enterToggle = 1;
        console.log(enterToggle); 
        return(enterToggle);
        }
};
var myp5 = new p5(s, 'mainGraphicDiv'); */


// title graphic sketch
var t = function( p ) { 
    var x = 0; 
    var y = 0; 
    var speedx = 0.05; 
    var speedy = 0.1;
    p.setup = function() {
      p.createCanvas(p.windowWidth, 50);
      //console.log(3%2)
      //p.background(254,251,251);

      
    };
  
    p.draw = function() {
        p.background(254,250,250);
        var time = p.millis();
        var rate = time%8;
        //console.log(rate)
        if (rate == 0 || rate == 1){
            for (let i = 0; i < 50; i++) {
               p.circle(p.random(p.windowWidth),p.random(50),1,1);
            }
        }

          
    };
  };
  var myp5 = new p5(t, 'titleGraphicDiv');



// Main graphic sketch 
var t = function( p ) { 
    var x = 100.0; 
    var y = 100; 
    var speed = 2.5; 
    let inconsolata, redHat;
    p.preload = function(){
        inconsolata = p.loadFont('Inconsolata-Medium.ttf');
        redHat = p.loadFont('RedHatMono-Light.ttf');
      };
    // define DIVs in Index
    var aboutDiv = document.getElementById('aboutDiv');
    var formDiv =  document.getElementById('contactFormDiv');
    // set canvas background
    var bgcolor;
    // set the letters or the word
    let myLetters = ['b','l','i','i','n','d','.','n','e','t'];

    p.setup = function() {
      //p.createCanvas(400, 200);
       //p.createCanvas(400, 200);
        // create a button
        enterButton = p.createButton("Enter");
        // but it inside the div
        enterButton.parent("enterButtonDiv");
        // set the position within the DIV
        enterButton.position(0,0);
        // give id to interact with CSS elements
        enterButton.id("enter-button");
        // when you press the mouse do thing
        console.log(enterToggle);
        enterButton.mouseReleased(p.clickState);

        // create your canvas
        myCanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        
        bgcolor = p.color (254,250,250);

        // set up text variables  
        p.textFont(redHat);
        p.textSize(p.width / 15);
        p.textAlign(p.CENTER);

    };
  
    p.draw = function() {
      //p.background(100);
      //p.fill(1);
      p.background(bgcolor);
      let myTime = p.millis();
      
      var rate = myTime%3;
      //console.log(rate)
      if (rate == 0 || rate == 1){
          for (let i = 0; i < 100; i++) {
            p.fill(1);
            p.circle((p.random(p.windowWidth))-(p.windowWidth/2),(p.random(p.windowHeight))-(p.windowHeight/2),1,1);
          }
      }


      if (enterToggle == 0) { 
          p.wordFunction(myTime);
          } 

      else if (enterToggle == 1)
      {
          let isitfade = p.wordFade(myTime);
          //console.log(isitfade);
          if (isitfade == 0){
            //bgcolor = color(random(255));
            p.fadeOutButton();
            //enterButton.style('display','none');
            // stop the draw loop
            formDiv.style.color = 'rgb(0,0,0)';
            formDiv.style.display = 'inline';
            formDiv.style.top = '110px';
            p.fadeInAbout();
            //p.delayTime(20);
            //p.enterButton.
            //p.noLoop();

          } 
      }
  
    };
    
    //// functions related to bliind sketch
    var word;
    var enterButton;

    // the fun spinny word function!!
    p.wordFunction = function(time)
    {   
        for (let i = 0; i < myLetters.length; i++) {
            p.rotateX(time/2000);
            p.rotateY(time/8000);
            p.rotateZ(time/4000);
            p.fill(150,150,150);
            word = p.text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4); }
    }
    // Fade word function
    p.wordFade = function(time)
    {       
        let letCol = 50 + (time/25);
        for (let i = 0; i < myLetters.length; i++) {
            p.rotateX(time/2000);
            p.rotateY(time/8000);
            p.rotateZ(time/4000);
            p.fill(letCol,letCol,letCol);
            //console.log(letCol);
            word = p.text(myLetters[i], (i + 130)* i/4, (i + 1)*i/4);
        }
        if (letCol < 255){
        return 1;
        }
        else{
        return 0;
        }
    }
    // fade out enter button
    p.fadeOutButton = function() {
        //fade = 100;
        // because transition time is set in CSS you dont need fade here
        enterButton.style('color', 'rgb(254, 250, 250)');
        enterButton.style('display', 'none');
      }
    // fade in about
    p.fadeInAbout = function() {
        //fade = 100;
        // because transition time is set in CSS you dont need fade here
        aboutDiv.style.color = 'rgb(0, 0, 0)';
      }

    // Function to change state of enter button
    let enterToggle = 0;    
    p.clickState = function(){
        //bgcolor = color(random(255));
        enterToggle = 1;
        console.log(enterToggle); 
        return(enterToggle);
        };
  };
  var myp5 = new p5(t, 'mainGraphicDiv'); 

  


