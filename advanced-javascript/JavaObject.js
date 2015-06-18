

function Pet(color, legs, noise){
	this.color = color;
	this.legs = legs;
	
}

function Cat() {
	Pet.apply(this, arguments);
	this.noise = "meow"
	
}

function Dog() {
	Pet.apply(this, arguments);
	this.noise = "bark"
}

Cat.prototype = new Pet();
Dog.prototype = new Pet();

var kitty = new Cat("blue", 3);
var new_kitty = new Cat("red", 7);

var doggy = new Dog("black", 4);
var new_puppy = new Dog("blonde", 3);















