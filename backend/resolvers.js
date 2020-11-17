const USER = require("./fake_data");

const resolvers = {
  Query: {
    getUsers: () => {
      return USER;
    },
  },
  Mutation: {
    addUser: (parent, args, context, info) => {
      const { username, password } = args;
      const nextId = USER[USER.length - 1].id + 1;
      const newUser = {
        id: nextId,
        username: username,
        password: password,
      };
      USER.push(newUser);
      return USER;
    },
    updateUser: (parent, args, context, info) => {
      const { id, username, password } = args;
      const updateUser = USER.filter((item) => {
        return item.id == id;
      });
      if (username) {
        updateUser[0].username = username;
      }
      if (password) {
        updateUser[0].password = password;
      }
      return USER;
    },
  },
};

module.exports = resolvers;
