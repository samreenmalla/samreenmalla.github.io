var container = document.getElementById('container');

var width = 500;
var height = 500;

circles = [];
direction = [-1,1];

function Circle (x,y,dx,dy,radius){
  var that = this;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.element;

  //create circles with random values
  this.createCircle = function(){

    var circle = document.createElement('div');
    circle.style.width = this.radius * 2 + 'px';
    circle.style.height = this.radius * 2 + 'px';
    circle.style.top = this.y + 'px';
    circle.style.left = this.x + 'px';
    circle.style.position = 'absolute';
    circle.style.background = 'rgb('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+')' ;
    circle.style.borderRadius = '50%';
    this.element = circle;
    container.appendChild(circle);
  };

  this.updateCircle = function(){
    this.x += this.dx;
    this.y += this.dy;
  };

  this.drawCircle = function(i){
    this.element.style.top = this.y + 'px';
    this.element.style.left =  this.x +'px';
    this.element.innerHTML = `${i}`;
  };

  //to check for collision with border
  this.checkCollisionBorder =  function(){
    if(this.x <= 0 || this.x >= width - (radius *2 )){
      this.dx = -this.dx;
    }
    if(this.y <=0 || this.y >= height - (radius * 2 )){
      this.dy = -this.dy;
    }
  };

  //to check for collision with each other
  this.checkCollisionCircle = function(){

    for( var i = 0; i < circles.length; i++){
      console.log('hello');
      var x1 = this.x;
      var x2 = circles[i].x;
      var y1 = this.y;
      var y2 = circles[i].y;
      var r1 = this.radius;
      var r2 = circles[i].radius;
      var distance ;

      var distanceX = x1 - x2;
      var distanceY = y1 - y2;

      distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      var r =  r1 + r2;

      if(r >= distance){

        var tempdirectionX = that.dx;
        var tempdirectionY = that.dy;

        that.dx = circles[i].dx;
        that.dy = circles[i].dy;

        circles[i].dx = tempdirectionX;
        circles[i].dy = tempdirectionY;
        // this.dx = -this.dx;
        // this.dy = -this.dy;
        // circles[i].dx = -circles[i].dx;
        // circles[i].dy = - circles[i].dy;
      }
    }
  };
}

function gameAnimation(){
  this.init= function(){
    for(var i = 0; i < 10; i++){

      var radius = 30;
      var x = Math.random()* (width-(radius* 2));
      var y = Math.random()* (height-(radius * 2));
      var dx = direction[Math.floor(Math.random()*2)];
      var dy = direction[Math.floor(Math.random()*2)];

      var circle = new Circle(x,y,dx,dy,radius);
      circle.createCircle();
      circles.push(circle);

    }

    // setInterval(this.startGame,10);
    setInterval(function(){
      for( var i = 0 ; i < circles.length; i++){
        circles[i].updateCircle();
        circles[i].checkCollisionBorder();
        circles[i].checkCollisionCircle();
        circles[i].drawCircle(i);

      }

    },10)
  }
}

new gameAnimation().init();
