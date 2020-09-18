module.exports = {
    host: 'localhost',
    user : 'root',
    password : 'Adithya@29',
    db: 'EXPRESS_1',
    dialect: 'mysql',
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
}

// const sequelize = new Sequelize('smart_mario', 'root', 'password', {
//     host: '35.185.188.243',
//     dialect: 'mysql'
// });

// const sequelize = new Sequelize('EXPRESS_1', 'root', 'Adithya@29', {
//     host: 'localhost',
//     dialect: 'mysql'
// });