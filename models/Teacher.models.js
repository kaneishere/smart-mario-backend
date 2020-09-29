module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("teacher", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    teacher_key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Teacher;
};
