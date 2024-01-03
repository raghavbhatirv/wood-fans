const { mongoose } = require("../imports/modules.imports")
const productSchema = new mongoose.Schema({
     name: {
          type: String, required: true
     },
     description: {
          short: {
               type: String,
               required: true
          },
          long: {
               type: String,
               required: true
          }
     },
     price: {
          type: Number,
          required: true
     },
     currency: {
          type: String,
          required: true
     },
     color: {
          type: String,
          required: true
     },
     material: {
          type: String,
          required: true
     },
     stock: {
          type: Number,
          required: true
     },
     rating: {
          type: Number,
          required: true
     },
     reviews: {
          type: Number,
          required: true
     },
     images: {
          type: [String], // Array of image URLs
          required: true
     },
     category: {
          type: String,
          required: true
     }
});

const ProductModel = mongoose.model('products', productSchema)

module.exports = { ProductModel }