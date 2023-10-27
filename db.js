const { Sequelize } = require("sequelize");


module.exports = new Sequelize('todo-listapp' , 'postgres' , 'postgres@6404' , {
    host: 'localhost',
    dialect: 'postgres'
});

// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "postgres@6404",
//     host: "localhost",
//     port: "5432",
//     database: "todolistapp"

// })

// module.exports = pool;