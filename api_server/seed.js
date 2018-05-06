module.exports = function(){
	let faker = require('faker');
	let index = 0
	let animals =[]
	let zookeepers = []
	while(index<=100){
		animals.push({
			id: index,
			name: faker.name.findName(),
			birthYear: faker.random.number({min: 2000, max: 2018}),
			species: faker.company.catchPhraseNoun()
		})
		index+=1

		if(index<20){
			zookeepers.push({
				id: index,
				name: {
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName()
				},
				salary: faker.random.number({min: 5000, max: 10000})
			})
		}
	}
	return {
		animals: animals,
		zookeepers: zookeepers
	}
}