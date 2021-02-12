const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/getUsers', (req, res) => {

    const user = req.query.user;

    if (!user) {
        res.send("Missing required param");
        return;
    }

    const userToReturn = {
        name: "Fabian",
        lastName: "Almanza"
    }

    res.send(userToReturn);

});


app.post('/setUsers', (req, res) => {

    const name = req.body.name;

    if (!name) {
        res.send("Missing required param");
    }

    console.log("Name", name);

    res.send(`User received ${name}`);

});

app.put('/updateUsers', (req, res) => {

    const user = req.body.user;
    if (!user) {
        res.send("Missing required param");
    }

    const name = req.body.user.name;

    res.send(`User updated ${name}`);


});

app.delete('/deleteUsers', (req, res) => {

    const id = req.body.id;

    if (!id) {
        res.send("Missing required param");
    }

    res.send(`User removed ${id}`);


});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})

console.log("Server running");

