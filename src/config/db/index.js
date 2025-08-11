const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://huydb23:23052003@cluster0-shard-00-00.eqicsid.mongodb.net:27017,cluster0-shard-00-01.eqicsid.mongodb.net:27017,cluster0-shard-00-02.eqicsid.mongodb.net:27017/?ssl=true&replicaSet=atlas-abcdef-shard-0&authSource=admin&retryWrites=true&w=majority');
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = { connectDB };
