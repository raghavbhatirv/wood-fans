const { mongoose } = require("../imports/modules.imports");


const connectDB = async () => {
     try {
          const conn = await mongoose.connect(`${process.env.MONGO_URI}/wood-fans`)
          console.log(`MongoDB connected successfully: ${conn.connection.host}`.underline.blue)
     } catch (error) {
          console.log("Error: While conntecting Database".red)
          console.log(error)
     }
}



module.exports = { connectDB }