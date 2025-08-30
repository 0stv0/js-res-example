const mysql = require('../sql/MySQL');

class User
{
    constructor(name, money, role, init)
    {
        this.name  = name;
        this.money = money;
        this.role  = role;

        if (init) mysql.query("INSERT INTO users (name, money, role) VALUES (?, ?, ?)", [
            name,
            money,
            role
        ]);
    }
    getName()
    {
        return this.name;
    }
    getMoney()
    {
        return this.money;
    }
    getRole()
    {
        return this.role;
    }
};
module.exports = {
    User: User
};