const mysql = require('mysql2');
const con   = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    database: 'database',
    password: ''
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
