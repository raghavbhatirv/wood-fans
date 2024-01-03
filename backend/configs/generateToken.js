const { jwt } = require("../imports/modules.imports")

const generateToken = (id) => {
     return jwt.sign({ userID: id }, process.env.PRIVATE_KEY);
}

module.exports = { generateToken }