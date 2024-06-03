const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();

connectDB();

app.use(express.json())

app.use(cors());
app.use(express.json());

console.log(require('dotenv').config())


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/chats', chatRoutes);
app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
