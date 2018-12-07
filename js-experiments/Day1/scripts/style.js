var position = [
  {x: 10, y: 20},
  {x: 50, y: 70},
  {x: 80, y: 100}
]
var container = document.getElementById('container');

for(var i = 0; i < position.length; i++){

var point = document.createElement('div');

container.appendChild(point);

container.style.position = 'relative';
point.style.backgroundColor = 'blue';
point.style.position = 'absolute';
point.style.width = '20px';
point.style.height = '20px';
point.style.left = position[i].x + 'px';
point.style.top = position[i].y + 'px';

}
