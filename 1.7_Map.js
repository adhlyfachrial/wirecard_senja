const animals = [
{name: "Fluffy", species: "cat"},
{name: "Carlo", species: "dog"},
{name: "Nemo", species: "fish"},
{name: "Hamilton", species: "dog"},
{name: "Dory", species: "fish"},
{name: "Ursa", species: "cat"}
];

let fish = animals.filter((animal) => animal.species === 'fish');

console.log(fish);