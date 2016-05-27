'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING(255),
      validate: {
        isEmail:true,
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING(255),
      validate: {
        notNull: true
      }
    },
    nickname: {
      type: DataTypes.STRING(255)
    },
    locale: {
      type: DataTypes.STRING(10)
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      field: 'email_verified'
    },
    picture: {
      type: DataTypes.STRING(255)
    },
    userId: {
      type: DataTypes.STRING(255),
      field:'user_id'
    },
    identities: {
      type: DataTypes.JSON
    },
    gender: {
      type: DataTypes.STRING(20)
    },
    statusId: {
      type: DataTypes.INTEGER,
      field:'status_id'
    },
    fullName: {
      type: DataTypes.STRING,
      field: 'name'
    }
  },{
      getterMethods: {
        firstName: function(){
          var name = this.getDataValue("fullName");
          return name.split(" ")[0];
        },
        lastName:function(){
          var name = this.getDataValue("fullName");
          var arrayNames = name.split(" ");

          return arrayNames[arrayNames.length-1];
        }
      },
      freezeTableName: true // Model tableName will be the same as the model name
  });
  return User;
};

/*User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});*/
