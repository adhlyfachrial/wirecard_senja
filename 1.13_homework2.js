class Shape {
	
	constructor ( id, x, y ) {
		this._id = id;
		this._x = x;
		this._y = y;
	}
	
	move( x, y) {
		this._x = x;
		this._y = y;
		
		//return this._x, this._y;
	}
	
}

class Rectangle extends Shape{

	constructor ( id, x, y, width, height ) {
		super(id,x,y);
		this._width 	= width;
		this._height 	= height;
	}

}	

class Circle extends Shape {
	
	constructor( id, x, y, radius ) {
		super(id,x,y);
		this._radius = radius;
	}
	
}

class Eye extends Circle {
	constructor( id, x, y, radius, color ) {
		super( id, x, y, radius );
		this._color = color;
	}
	
	roll( rollAmount ) {
		
		this.move( 1, 2 );
		
		return this._x + rollAmount ;
		
	}
}

console.log( '' );
console.log( 'No. 1' );
console.log( '----------------------------------------------' );

const mas_adhly = new Shape('ini id', 'ini x', 'ini y');

console.log( mas_adhly.move( 'ini x', 'ini y' ) );
console.log( mas_adhly._x );
console.log( mas_adhly._y );
console.log( '----------------------------------------------' );

console.log( '' );
console.log( 'No. 2' );
console.log( '----------------------------------------------' );

const mas_rectangle = new Rectangle('ini id', 'ini x', 'ini y', 'ini width', 'ini height');

console.log( mas_rectangle._id );
console.log( mas_rectangle._x );
console.log( mas_rectangle._y );
console.log( mas_rectangle._width );
console.log( mas_rectangle._height );
console.log( '----------------------------------------------' );

console.log( '' );
console.log( 'No. 3' );
console.log( '----------------------------------------------' );

const mas_circle = new Circle('ini id', 'ini x', 'ini y', 'ini radius');

console.log( mas_circle._id );
console.log( mas_circle._x );
console.log( mas_circle._y );
console.log( mas_circle._radius );
console.log( '----------------------------------------------' );

console.log( '' );
console.log( 'No. 4' );
console.log( '----------------------------------------------' );

//const mas_circle = new Circle('ini id', 'ini x', 'ini y', 'ini radius');

let test = new Eye();
//test.roll(99);
console.log(test.roll(99) );

// console.log( mas_circle._id );
// console.log( mas_circle._x );
// console.log( mas_circle._y );
// console.log( mas_circle._radius );
console.log( '----------------------------------------------' );