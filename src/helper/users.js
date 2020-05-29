const users = [];

const addUser = ({ id, username, chatee }) => {
  username = username.trim().toLowerCase();
  chatee = chatee.trim().toLowerCase();

  const existingUser = users.find((user) => user.chatee === chatee && user.username === username);
  if (existingUser) {
    return { error: 'Username is taken' };
  }
  const user = { id, username, chatee };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id == id);

const getUsersInRoom = (chatee) => users.filter((user) => user.chatee === chatee);

module.exports = {
  addUser, removeUser, getUser, getUsersInRoom
};
