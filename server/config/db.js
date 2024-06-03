const mongoose = require('mongoose');

require('dotenv').config();


const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://chauhan:chauhan06@cluster0.anz3bbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            dbName: 'Chat',
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
