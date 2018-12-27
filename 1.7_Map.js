const animals = [
{name: "Fluffy", species: "cat"},
{name: "Carlo", species: "dog"},
{name: "Nemo", species: "fish"},
{name: "Hamilton", species: "dog"},
{name: "Dory", species: "fish"},
{name: "Ursa", species: "cat"}
];

//let names = animals.map((animal) => animal.name + " is a " + animal.species);
let names = animals.map((animal) => {
	
	return animal.species === "cat" ? animal.name + " is a " + animal.species : animal.name + " is not a cat";
	
});
console.log(names);