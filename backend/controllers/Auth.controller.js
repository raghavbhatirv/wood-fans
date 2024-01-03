const { asyncHandler } = require("../imports/modules.imports")
const { generateToken } = require('../imports/configs.imports')
const { UserModel } = require('../imports/models.imports')

const signupController = asyncHandler(async (req, res) => {
     const { name, email, password } = req.body;

     if (!name || !email || !password) {
          res.status(400);
          throw new Error("Please enter all the feilds")
     }

     const existUser = await UserModel.findOne({ email })

     if (existUser) {
          res.status(400);
          throw new Error("User already exists")
     }

     const user = await UserModel.create({ name, email, password });

     if (user) {
          res.status(200).json({
               _id: user._id,
               email: user.email,
               token: generateToken(user._id)
          })
     } else {
          res.status(400)
          throw new Error("Feild to create the User")
     }

})
const loginController = asyncHandler(async (req, res) => {
     const { email, password } = req.body

     const user = await UserModel.findOne({ email });
     if (user && (await user.matchPassword(password))) {
          res.status(200).json({
               _id: user._id,
               email: user.email,
               token: generateToken(user._id)
          })
     } else {
          res.status(401);
          throw new Error("Invalid Email and Password")
     }
})

module.exports = { signupController, loginController }