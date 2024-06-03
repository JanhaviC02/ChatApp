const express = require('express');
const { getAllChats, getChatById } = require('../controllers/chatController');

const router = express.Router();

router.get('/', getAllChats);
router.get('/:id', getChatById);

module.exports = router;
