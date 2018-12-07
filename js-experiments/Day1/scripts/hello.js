var hello = document.getElementById('hello');

function Student(name, dob, el) {
  this.name = name;
  this.dob = dob;
  this.el = el;
  var that = this;

  this.getProfile = function() {
    console.log('In Get Profile', this);
    return this.name + ' is an idiot';
  }

  this.getNameFiveTimes = function() {
    var array = [];
    console.log('In Get Name', this);
    for (var i = 0; i < 5; i++) {
      console.log(i, this);
      array.push(this.name);
    }

    return array;
  }

  this.el.onclick = function() {
    console.log('In onclick', that);
  }


}

var john = new Student('John', '1990-01-02', hello);
console.log(john);

john.getProfile();
john.getNameFiveTimes()
