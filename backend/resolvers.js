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
  },
};

module.exports = resolvers;
