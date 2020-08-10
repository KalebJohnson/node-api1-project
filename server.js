const express = require("express")
const cors = require('cors')
const db = require("./database")
const server = express()

server.use(express.json())
server.use(cors())

const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 8080

server.get("/lol", (req, res) => {
	res.json({ message: "Work damn you" })
})

server.get("/users", (req, res) => {

	const users = db.getUsers()

	if(users){
	res.status(200).json(users)
} else {
		res.status(500).json({ message: "users info not retrieved" })
	}
})

server.get("/users/:id", (req, res) => {

	const id = req.params.id

	const user = db.getUserById(id)


	if (user) {
		res.status(200).json(user)
	} else if (!user) {
		res.status(404).json({ message: "User not found, are you sure that ID exists?" })
	} else {
		res.status(500).json({ errorMessage: "Post failed" });
	}
})
///////////////////////////////////////////////////////////////////////// (eyes too tired to read for the put request, coffee NOT working) /////////////////////////////////
server.put("/users/:id", (req, res) => {
    const id = req.params.id;
	const changes = req.body;
	let users = db.updateUser
	let index = users.findIndex(users => users.id === id)

	if (index !== -1) {
		users[index] = changes;
		res.status(200).json(users[index])
	} else {
		res.status(404).json({message:"user not found"})
	}

});


server.post("/users", (req, res) => {

	const newUser = db.createUser({
		name: req.body.name,
		bio: req.body.bio
	})

	if(newUser){
	res.status(201).json({ newUser })
	} else if (!newUser) {
		res.status(400).json({ errorMessage: "User name and bio REQUIRED" });
	} else {
		res.status(500).json({ errorMessage: "Post failed" });
	}
})



server.delete("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)


	if (user) {
		db.deleteUser(req.params.id)

		res.status(204).end()
	} else if (!user) {
		res.status(404).json({
			message: "User not found",
		})
	} else {
		res.status(500).json({ message: "error"})
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
  });