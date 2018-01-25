var bg; // background color
var btnSave, btnReset, btnReplay; // buttons
var dc = new DragCircle(50, 50, 40, 40); // draggable circle

// one and done
function setup() {
	var cnv = createCanvas(910, 372);
	cnv.parent('map-holder');
	
	bg = loadImage("../Assets/img/blankMap_overhead.png");
  	init();
}

// repeats at the speed of the framerate
function draw() {
  background(bg);
  
  // the display stuff
  dc.dragDisplay();
  
  if(dc.getCoords().length > 0) {
    showButtons();
  } else {
    hideButtons();
  }
}

// initialize some stuff
function init() {
  bg = loadImage("../Assets/img/blankMap_overhead.png");
  
  // download the coordinates
  btnSave   = createButton('Save');
  btnReset  = createButton('Reset');
  btnReplay = createButton('Replay');
  
  btnSave.mousePressed(function() {
    var json = {
      'coords' : dc.getCoords()
    };
    saveJSON(json, 'coord.json');
  });
  
  btnReset.mousePressed(function() {
    dc.reset();
    btnSave.hide();
  });
  
  btnReplay.mousePressed(function() {
    dc.replay(0);
  });
  
  btnSave.position(10, 10);
  btnReset.position(btnSave.width + 10, 10); 
  btnReplay.position(btnSave.width + btnReset.width + 10, 10);
  
  hideButtons();
}

function hideButtons() {
  btnReset.hide();
  btnSave.hide();
  btnReplay.hide();
}

function showButtons() {
  btnSave.show();
  btnReplay.show();
  btnReset.show();
}

// the draggable circle class
function DragCircle(x,y,r) {
  
  // explicit reference to self
  var self = this;
  
  // public properties
  self.x = x;
  self.y = y;
  self.r = r; // radius
  
  // private properties
  var dragging = false; // a boolean flag for mouse drag state
  var history = [];
  var locked = false;
  
  // public function
  self.dragDisplay = function() {
    
    // distance formula
    var d = dist(mouseX, mouseY, self.x, self.y); 

    // change drag boolean if mouse is down and inside
    if(mouseIsPressed) {
      if(d < 0.5 * self.r) { // distance is inside circle
        dragging = true;
      }
    } else {
      dragging = false;
    }
    
    // position and cursor
    if(dragging) {
      cursor(WAIT);
      self.x += mouseX - self.x;
      self.y += mouseY - self.y;
      history.push({
        'x' : self.x,
        'y' : self.y,
        't' : new Date().getTime()
      });
    } else {
      cursor(ARROW);
    }
    
    // draw a circle
	var c = color(255,0,0);
	fill(c);
	stroke(c)
	ellipse(self.x, self.y, self.r, self.r);
	fill(0);
	textAlign(CENTER, CENTER);
	textSize(8);
	text('PowerCube', self.x, self.y);
  }
  
  self.getCoords = function() {
    return history;
  }
  
  self.reset = function() {
    history = [];
    self.x = 50;
    self.y = 50;
  }
  
  self.replay = function(i) {
    locked = true;
    if(i < history.length - 1) {
      self.x = history[i].x;
      self.y = history[i].y;
      var nextT = history[i+1].t - history[i].t;
      setTimeout(function() {
        self.replay(i+1)
      }, nextT);
    } else if (i < history.length) {
      self.x = history[i].x;
      self.y = history[i].y;
      locked = false;
    }
  }
}
