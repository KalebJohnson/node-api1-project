let users = [
	{
		id: "1", 
		name: "AFRICAN MARKETPLACE", 
		bio: "Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty. You will build a platform to enable these business owners to create listing for items they have for sale.",  // String, required
	},
	{
		id: "2",
		name: "SILENT AUCTION", 
		bio: "Silent auctions are a popular fundraiser for many different kinds of organizations, especially charities. This app will allow sellers and bidders to connect together in one place and allow for bidders to see items and place bids on them without having to physically be there.",  // String, required
	  },
	  {
		id: "3", 
		name: "WATER MY PLANTS", 
		bio: "Ensuring that all your plants are consistently watered is actually pretty difficult. Water My Plants is an app that helps to solve those problems. With an easy to use interface for creating a plant watering schedule tailored to each individual plant, WaterMyPlants will remind users when it's time to feed that foliage and quench your plants' thirst.",  // String, required
	  },
	  {
		id: "4", 
		name: "TO BE DETERMINED", 
		bio: "To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued",  // String, required
	  }
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}
