
const { mongoose, bcrypt } = require("../imports/modules.imports");

const userSchema = new mongoose.Schema({
     cart: [
          {
               productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
               },
               quantity: {
                    type: Number
               }
          }
     ],
     email: {
          type: String,
          required: true,
          unique: true
     },
     name: {
          type: String,
          required: true
     },
     phoneNumber: {
          type: String
          // You may add additional validation for phone numbers as needed
     },
     password: {
          type: String,
          required: true
     },
     wishlist: [
          {
               type: mongoose.Schema.Types.ObjectId, // Assuming wishlist item refers to the ObjectId of a product document
               ref: 'Product'
          }
     ]
});


userSchema.methods.matchPassword = async function (enteredPassword) {
     return await bcrypt.compare(enteredPassword, this.password)
}


userSchema.pre('save', async function (next) {
     if (!this.isModified) {
          next()
     }
     const salt = await bcrypt.genSalt(10);
     this.password = await bcrypt.hash(this.password, salt);
});



const UserModel = mongoose.model('user', userSchema);

module.exports = { UserModel }