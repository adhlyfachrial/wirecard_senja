const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


const makeAllCaps = ( array ) => {
	
	return new Promise( ( resolve, reject ) => {
		
		let result = array.map( (item) => {
			return item.toUpperCase();
		}	);
		
		resolve( result );
	});
	
	/*return array.map( (item) => {
		return item.toUpperCase();
	}	);
	*/
	
};

const sortWords = ( array ) => {
	
	return new Promise( (resolve, reject) => {
		
		let result = array.sort();
		
		resolve( result );
	}	);
	
};

makeAllCaps( arrayOfWords )
.then( (result) => sortWords( result ) )
.then( (result) => console.log(result) )
.catch( error => console.log(error) );