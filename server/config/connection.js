const mongoose = require('mongoose')

const connect = async () => {
    try{
        const response = await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo DB connected: ", response.connection.host)
        return response
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect
