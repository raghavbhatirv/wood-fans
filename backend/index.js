const { express } = require("./imports/modules.imports")
const { connectDB } = require("./imports/configs.imports")
const { productRoutes, authRoutes } = require("./imports/routes.imports")
const { authorize } = require("./imports/middleware.imports")

const app = express();

// middleware's
app.use(express.json())
app.use("/ping", (req, res) => {
     res.send({ msg: "Pong" });
})
app.use('/api', authRoutes)

app.use('/api/products', productRoutes)



const PORT = process.env.PORT || 8000;
connectDB().then(() => {
     app.listen(PORT, () => {
          console.log(`Server is runing on PORT: ${PORT}`.yellow)
     })
})