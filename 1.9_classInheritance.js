class Person {
	
	constructor (name) {
		this._name = name;
	}
	
	getName() {
		return this._name;
	}
}

class Employee extends Person {
	
	constructor( name, title ) {
		super(name);
		this._titleEmployee = title;
	}
	
	doWork() {
		return this._name + " is working as " + this._titleEmployee;
	}
}

let scott = new Employee( "Scott Moss", "Software Engineer" );
let scott2 = new Person( "Scott Moss", "Software Engineer" );
console.log( scott.doWork() );
console.log( scott2.getName() );