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
	res.json(users)
})

server.get("/users/:id", (req, res) => {

	const id = req.params.id

	const user = db.getUserById(id)


	if (user) {
		res.json(user)
	} else {
		res.status(404).json({ message: "User not found" })
	}
})
///////////////////////////////////////////////////////////////////////// (eyes too tired to read for the put request, coffee NOT working) /////////////////////////////////
server.put('/api/users/:id', (req, res) => {
    const id = req.params.id;
    const userInfo = req.body;
    const { name, bio } = req.body;

    if (name && bio) {
        db.update(id, userInfo)
            .then(user => {
                if (user) {
                    res.status(200).json({ success: true, user });
                } else {
                    res.status(404).json({ errorMessage: "User of said ID, does not exist." });
                }
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "User data modification failed" });
            });
    } else {
        res.status(400).json({ errorMessage: "User name and bio REQUIRED" });
    }
});




server.post("/users", (req, res) => {

	const newUser = db.createUser({
		name: req.body.name,
	})

	res.status(201).json(newUser)
})

server.delete("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)


	if (user) {
		db.deleteUser(req.params.id)

		res.status(204).end()
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
  });