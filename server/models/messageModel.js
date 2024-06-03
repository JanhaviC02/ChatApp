const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    chat: {
        type: String,
        trim : true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,       
});

module.exports = mongoose.model('Message', messageModel);