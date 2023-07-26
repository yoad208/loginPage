const {connect} = require('mongoose');

 const connectToDB = async () => {
    try {
        await connect("mongodb://localhost:27017/test");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToDB