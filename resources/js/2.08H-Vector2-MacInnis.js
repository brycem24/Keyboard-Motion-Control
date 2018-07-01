//Simple container class that holds a vector with point x,y.
class Vector2 {
	//INITIALIZATION: Constructor
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
	}
	//OUTPUT: Print the x,y coordinates to the console.
	print() {
		console.log('(' + this.x + ',' + this.y + ')');
	}
}