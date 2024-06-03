const chats = require('../data/data');

const getAllChats = (req, res) => {
    res.send(chats);
};

const getChatById = (req, res) => {
    const selectedChat = chats.find(chat => chat._id === req.params.id);
    if (selectedChat) {
        res.send(selectedChat);
    } else {
        res.status(404).send({ message: "Chat not found" });
    }
};

module.exports = {
    getAllChats,
    getChatById
};
