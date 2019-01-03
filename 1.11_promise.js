//const test_fungsi = () => {
//	return fetch("https://swapi.co/api/people").then( response => response.json() );
//}

//console.log( test_fungsi() );

const setTimeoutPromise = (duration) => 
		new Promise((resolve, reject) => {
			setTimeout(resolve, duration);
		}
);

setTimeoutPromise(1000).then( () => console.log('tick') );
