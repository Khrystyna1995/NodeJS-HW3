const  dataBase  = require('../dataBase')

module.exports = {
    getUsers: () => dataBase,

    createUser: (user) => {
        dataBase.push(user);

        return user;
    },

    getUserByName: (userName) => dataBase.find((user) => user.userName === userName),

    getUserByEmail: (email) => dataBase.find((user) => user.email === email),

    deleteUser: (id) =>  {
       return dataBase.filter((user) => user.id !== id)
    }

};
