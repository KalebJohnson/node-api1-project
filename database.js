let users = [
	{
		id: 1, // hint: use the shortid npm package to generate it
		name: "kleb", // String, required
		bike: "Cbr1000rr",  // String, required
	},
	{
		id: 2, // hint: use the shortid npm package to generate it
		name: "Mike", // String, required
		bike: "R1",  // String, required
	  },
	  {
		id: 3, // hint: use the shortid npm package to generate it
		name: "sean", // String, required
		bike: "was an R1",  // String, required
	  },
	  {
		id: 4, // hint: use the shortid npm package to generate it
		name: "Dec", // String, required
		bike: "Lol no bike",  // String, required
	  }
]

function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function putUserById(id) {
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