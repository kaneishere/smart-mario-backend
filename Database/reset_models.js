import Sequelize from 'sequelize';

const sequelize = new Sequelize('EXPRESS_1', 'root', 'Adithya@29', {
    host: 'localhost',
    dialect: 'mysql'
});

let Student = sequelize.define('student', {
    username: {
        type: Sequelize.STRING,
        allowNull : false
    },
    password : {
        type: Sequelize.STRING,
        allowNull : false
    }
})
    
let Teacher = sequelize.define('teacher', {
    username: {
        type: Sequelize.STRING,
        allowNull : false
    },
    password : {
        type: Sequelize.STRING,
        allowNull : false
    }
})
        
let Challenge = sequelize.define('challenge', {
    challengeName: {
        type: Sequelize.STRING,
        allowNull : false
    }
})
    
Teacher.hasMany(Student)
Student.belongsTo(Teacher)

Challenge.hasMany(Student)
Student.belongsTo(Challenge)

sequelize.sync({force: true}).then(()=>{
    console.log("DB Synced")

    sequelize.getQueryInterface().showAllSchemas().then((tableObj) => {
        console.log('// Tables in database','==========================');
        console.log(tableObj);
      })
      .catch((err) => {
        console.log('showAllSchemas ERROR',err);
    })
    
})
.catch((err)=> {
    console.error("DB Sync Failed", err)
})

export {sequelize as db_connection}



