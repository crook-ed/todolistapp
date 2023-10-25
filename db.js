const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "hi1234",
    host: "localhost",
    port: "5432",
    database: "todolistapp"

})

module.exports = pool;