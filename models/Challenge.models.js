module.exports = (sequelize, Sequelize) => {
  const Challenge = sequelize.define("challenge", {
    challengeName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Challenge;
};
