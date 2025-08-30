const User  = require('../class/User').User;
const users = [];
const mysql = require('../sql/MySQL');

const createUser = (name) =>
{
    let u = new User(name, 0, "PRACOWNIK", true);
    users[users.length] = u;
};
const getUser = (name) =>
{
    return users.find(u => u.name === name);
};
const loadUsers = async() =>
{
    let result = await mysql.query("SELECT * FROM users");
    for (let item of result)
    {
        let u = new User(item["name"], item["money"], item["role"], false);
        users[users.length] = u;
    }
};
module.exports = {
    loadUsers: loadUsers,
    getUser: getUser,
    createUser: createUser
};