const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello ! I need two days to prepare 7 LOMs and one day for all the LORS');

})

// const data = {
//     name: 'Abdul Alim',
//     age: 56,
//     job: 'Khai shudhu Halim'
// }

const users = [
    { id: 1, name: 'LOM', email: 'Germany' },
    { id: 2, name: 'LOR', email: 'ASH, MIK, Faysal' },
    { id: 3, name: 'WEB Dev', email: 'Career' },
    { id: 4, name: 'Leetcode', email: 'Google' },
    { id: 5, name: 'German language', email: 'Germany' },
]

app.get('/users', (req, res) => {
    // res.send('Hello from user !');
    if (req.query.name) {
        const queryParam = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(queryParam));
        console.log(matched);
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    const userID = parseInt(req.params.id);
    console.log(userID);
    const user = users.find(user => user.id === userID)
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'pineapple', 'Guava'])
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send({ message: "POST request received ", user });
})

app.listen(port, () => {
    console.log('Listening to server on port', port);
})

































