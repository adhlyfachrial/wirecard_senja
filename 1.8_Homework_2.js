const data = [
  {
    name: 'Super',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 2,
    type: 'cat'
  },
  {
    name: 'Hot',
    age: 2,
    type: 'dog'
  },
  {
    name: 'Purr',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Red',
    age: 4,
    type: 'dog'
  },
  {
    name: 'Besto',
    age: 3,
    type: 'cat'
  },
  {
    name: 'Peppers',
    age: 1,
    type: 'dog'
  }
];

let dog = data.filter( 
	( dogs ) => dogs.type === 'dog' 
);
let dog_ages = dog.map( 
	(ages) => ages.age * 3 
);
let age_sum = dog_ages.reduce( 
	(total, age) => total + age, 0  
);
console.log(dog);
console.log(dog_ages);
console.log(age_sum);

console.log( ' ======================================= ' );

let dog_2 = ( animal ) =>  {
	return animal.type === 'dog'
}
;

let dog_ages_2 = (animal) => {
	return animal.age * 3;
};

let age_sum_2 = ( total, age ) => {
	return total = total + age;
};

let data_2 = data.filter(dog_2).map( dog_ages_2 ).reduce( age_sum_2 );

console.log(data_2);