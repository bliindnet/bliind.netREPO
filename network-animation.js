
var network;

function setup() {
  //createCanvas(640, 360);
  myCanvas = createCanvas(600, 400);

  // Create the Network object
  network = new Network();

  // Create a bunch of Neurons

  // Two inputs
  var x2 = new Neuron(-250, 20);
  var x0 = new Neuron(-200, -20);
  var x1 = new Neuron(-200, 75);
  

  // Two hidden
  var h0 = new Neuron(0, -75);
  var h1 = new Neuron(0, 75);

  // One output
  var y = new Neuron(200, 0);

  // Connect them
  network.connect(x0, h0);
  network.connect(x0, h1);
  network.connect(x1, h0);
  network.connect(x1, h1);
  network.connect(h0, y);
  network.connect(h1, y);
  network.connect(x2, x1);
  network.connect(x2, x0);

  // Add them to the Network
  network.addNeuron(x0);
  network.addNeuron(x1);
  network.addNeuron(h0);
  network.addNeuron(h1);
  network.addNeuron(y);
  network.addNeuron(x2);

  console.log(`connections: ${network.connections.length}`);
  console.log(`Neruon 1: ${network.neurons[3].sum}`);

  console.log(`neurons: ${network.neurons.length}`);

  
}

function draw() {
  background(200);
  translate(width / 2, height / 2);
  // Draw the Network
  network.show();

  // Update the Network
  network.update();

  if (frameCount % 30 == 0) {
    var inputs = [random(2), random(1)]
    network.feedforward(inputs);
  }
  
}


function Neuron(x, y) {
  // Neuron has a position
  this.position = createVector(x, y);
  // Neuron has a list of connections
  this.connections = [];

  // We now track the inputs and sum them
  this.sum = 0;

  // The Neuron's size can be animated
  this.r = 32;


  // The Neuron fires
  this.fire = function() {
    this.r = 64; // It suddenly is bigger

    // We send the output through all connections
    for (var i = 0; i < this.connections.length; i++) {
      var c = this.connections[i];
      c.feedforward(this.sum);
    }
  }

  // Receive an input
  this.feedforward = function(input) {
    // Accumulate it
    this.sum += input;
    // Activate it?
    if (this.sum > 1) {
      this.fire();
      this.sum = 0; // Reset the sum to 0 if it fires
    }
  }


  // Add a Connection
  this.addConnection = function(c) {
    this.connections.push(c);
  }

  // Draw Neuron as a circle
  this.show = function() {
    stroke(0);
    strokeWeight(1);
    // Brightness is mapped to sum
    var b = map(this.sum, 0, 1, 0, 255);

    b += map(this.r, 32, 64, 0, 500);

    fill(b);
    ellipse(this.position.x, this.position.y, this.r, this.r);

    // Size shrinks down back to original dimensions
    this.r = lerp(this.r, 32, 0.1);

    // Draw all its connections
    // for (var i = 0; i < this.connections.length; i++) {
    //   this.connections[i].display();
    // }
  }
}


function Network() {
  // The Network has a list of neurons
  this.neurons = [];
  // Also storing list of connections ("edges")
  this.connections = [];

  // We can add a Neuron
  this.addNeuron = function(n) {
    this.neurons.push(n);
  }

  // We can connection two Neurons
  this.connect = function(a, b) {
    var c = new Connection(a, b, random(1));
    a.addConnection(c);
    this.connections.push(c);
  }


  // Sending an input to the first Neuron
  // We should do something better to track multiple inputs
  this.feedforward = function(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      var neuron = this.neurons[i];
      neuron.feedforward(inputs[i]);
    }
  }

  // Update the animation
  this.update = function() {
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].update();
    }
  }

  // We can draw the network
  this.show = function() {
    for (var i = 0; i < this.neurons.length; i++) {
      this.neurons[i].show();
    }
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].show();
    }

  }
}


function Connection(from, to, w) {
  // Connection has a weight
  this.weight = w;
  // Connection is from Neuron A to B
  this.a = from;
  this.b = to;

  // Variables to track the animation
  this.sending = false;
  this.sender = createVector();

  // Need to store the output for when its time to pass along
  this.output = 0;

  // Draw line and traveling circle
  this.show = function() {
    stroke(0);
    strokeWeight(this.weight * 4);
    line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);

    if (this.sending) {
      fill(0);
      strokeWeight(1);
      ellipse(this.sender.x, this.sender.y, 16, 16);
    }
  }

  // The Connection is active
  this.feedforward = function(val) {
    this.output = val * this.weight; // Compute output
    this.sender = this.a.position.copy(); // Start animation at Neuron A
    this.sending = true; // Turn on sending
  }

  // Update traveling sender
  this.update = function() {
    if (this.sending) {
      // Use a simple interpolation
      this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
      this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
      var d = p5.Vector.dist(this.sender, this.b.position);
      // If we've reached the end
      if (d < 1) {
        // Pass along the output!
        this.b.feedforward(this.output);
        this.sending = false;
      }
    }
  }



}