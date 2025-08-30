const express = require('express');
const app     = express();
const port    = 12345;
const cors    = require('cors');
const mysql   = require('./sql/MySQL');
const um      = require('./manager/UserManager');

app.use(express.json());
app.use(cors());

app.get('/getUser', async(req, res) =>
{
    let name = req.query.name;
    if (name === undefined)
    {
        res.status(200).send({error: 'Niepoprawne zapytanie.'});
        return;
    }
    let user = um.getUser(name);
    if (user === undefined)
    {
        res.status(200).send({error: 'Taki user nie istnieje!'});
        return;
    }
    res.status(200).send(user);
});

app.post('/createUser', async(req, res) =>
{
    let name = req.body.name;
    if (name === undefined)
    {
        res.status(200).send({error: 'Niepoprawne zapytanie.'});
        return;
    }
    let user = um.getUser(name);
    if (user !== undefined)
    {
        res.status(200).send({error: 'Taki user już istnieje!'});
        return;
    }
    um.createUser(name);
    res.status(200).send([]);
});

app.listen(port, async() =>
{
    await mysql.query("CREATE TABLE IF NOT EXISTS users (name TEXT, money INTEGER, role TEXT)");
    await um.loadUsers();

    console.log(`Server listening on http://localhost:${port}/`);
});