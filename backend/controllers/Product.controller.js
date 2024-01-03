const { asyncHandler } = require('../imports/modules.imports')
const { ProductModel, UserModel } = require('../imports/models.imports')

const getProductController = asyncHandler(async (req, res) => {
     try {
          const products = await ProductModel.find();
          res.send({ products })
     } catch (error) {
          res.send({ msg: "Something went wrong, Cannot get products" })
     }
})

const addProductIntoCart = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          const existingCartItem = user.cart.find(item => item.productId.equals(productId));

          if (existingCartItem) {
               existingCartItem.quantity += 1;
          } else {
               // Push a new object to the cart array
               user.cart.push({ productId: productId, quantity: 1 });
          }

          // Save the updated user object back to the database
          await user.save();

          res.send({ msg: `Product added to cart successfully` });

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot add the product to the cart" });
          console.log(error);
     }

})
const addProductIntoWishlist = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          const existingCartItem = user.wishlist.find(item => item.equals(productId));

          if (!existingCartItem) {
               user?.wishlist?.push(productId);
          } else {
               res.send({ msg: `Product is already added in the wishlist` })
          }

          await user.save();

          res.send({ msg: `Product added to wishlist successfully` });

     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot add the product to the cart" });
          console.log(error);
     }
})

const removeProductFromCart = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          // Find the index of the product in the cart
          const productIndex = user.cart.findIndex(item => item.productId.equals(productId));

          if (productIndex !== -1) {
               // Remove the product from the cart
               user.cart.splice(productIndex, 1);

               // Save the updated user object back to the database
               await user.save();

               return res.send({ msg: `Product removed from the cart successfully` });
          } else {
               return res.send({ msg: `Product not found in the cart` });
          }
     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot remove the product from the cart" });
          console.log(error);
     }
})
const removeProductFromWishlist = asyncHandler(async (req, res) => {
     const productId = req.params.ID;

     try {
          const userId = req.userID;
          const user = await UserModel.findById(userId);

          // Find the index of the product in the cart
          const productIndex = user.wishlist.findIndex(item => item.equals(productId));

          if (productIndex !== -1) {
               // Remove the product from the cart
               user.wishlist.splice(productIndex, 1);

               // Save the updated user object back to the database
               await user.save();

               return res.send({ msg: `Product removed from the wishlist successfully` });
          } else {
               return res.send({ msg: `Product not found in the wishlist` });
          }
     } catch (error) {
          res.status(500).send({ msg: "Something went wrong, cannot remove the product from the wishlist" });
          console.log(error);
     }
})

module.exports = { getProductController, addProductIntoCart, removeProductFromCart, addProductIntoWishlist,removeProductFromWishlist }