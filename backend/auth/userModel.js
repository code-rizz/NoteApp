let users = [];

const userModel = {
  addUser: (user) => {
    user.userId = users.length + 1;
    users.push(user);
  },
  getUserByUsername: (username) => {
    return users.find((user) => user.username === username);
  },
};

module.exports = userModel;
