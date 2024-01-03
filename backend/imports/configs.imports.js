const { connectDB } = require('../configs/db')
const { generateToken } = require('../configs/generateToken')

module.exports = { connectDB, generateToken }