const mysql = require('mysql2');
const con   = mysql.createConnection({
    port: 3306,
    host: '54.38.50.59',
    user: 'www13314_portfolio',
    database: 'www13314_portfolio',
    password: 'LpgwK9tLNAqbQkw6gtqi'
});
const query = async(sql, keys) =>
{
    let data = await new Promise((resolve, reject) =>
    {
        con.query(sql, keys, (e, r, f) =>
        {
            resolve(r);
        });
    });
    return data;
};
module.exports = {
    query: query
};