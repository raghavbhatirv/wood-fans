const { signupController, loginController } = require("../imports/controllers.imports");
const { express } = require("../imports/modules.imports")

const authRoutes = express.Router();

authRoutes.post('/signup', signupController);
authRoutes.post('/login', loginController);


module.exports = { authRoutes }