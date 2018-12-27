const animals = [
{name: "Fluffy", species: "cat"},
{name: "Carlo", species: "dog"},
{name: "Nemo", species: "fish"},
{name: "Hamilton", species: "dog"},
{name: "Dory", species: "fish"},
{name: "Ursa", species: "cat"}
];

// bentuk tradisional
/*
let fish = [];
for(let i = 0; i < animals.length; i++) {
  if (animals[i].species === 'fish') {
    fish.push(animals[i]);
  }
}
*/

let fish = animals.filter((animal) => animal.species === 'fish');

/*
let fish = animals.filter( (animal) => {
	
	return animal.species === "fish" ? false : animal.species;
	
});
*/

// penjelasan
/*
animals[0] = {name: "Fluffy", species: "cat"}

iterasi ke 0 
animal = {name: "Fluffy", species: "cat"}
iterasi ke 1 
animal = {name: "Carlo", species: "dog"}
iterasi ke 2 
animal = {name: "Nemo", species: "fish"}
iterasi ke 3 
animal = {name: "Hamilton", species: "dog"}

..
dst
*/

console.log(fish);