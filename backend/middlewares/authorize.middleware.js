const { jwt } = require("../imports/modules.imports")
const authorize = (req, res, next) => {
     const token = req.headers.authorization?.split(" ")[1]
     if (!token) {
          return res.send({ msg: "You are not Authorize." })
     }

     jwt.verify(token, process.env.PRIVATE_KEY, async (err, decoded) => {
          if (decoded) {
               const userID = decoded.userID;
               req.userID = userID
               next()
          }
     })
}

module.exports = { authorize }