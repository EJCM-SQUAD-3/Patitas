import { Router } from "express";
import { productController } from "../controllers/product.controller"; 
import { userController } from "../controllers/user.controller";
import { sellerController } from "../controllers/seller.controller";
import { categoryController } from "../controllers/category.controller";
import { addressController } from "../controllers/address.controller";
import { buyItemController } from "../controllers/buyItem.controller";
import { cartController } from "../controllers/cart.controller";
import { favoriteController } from "../controllers/favorite.controller";
import { orderController } from "../controllers/order.controller";
import { productOnCartController } from "../controllers/productOnCart.controller";
import passport from "passport";
import { messageController } from "../controllers/message.controller";
import { Validator } from "../config/validator";
import { ValidationMiddleware } from "../middlewares/validator.middleware";
import { photoUpload } from "../config/uploader";
import { uploadPhoto } from "../controllers/upload.controller";
import { validatePhotoUpload } from "../middlewares/uploadValidator.middleware";


const router = Router();

// Products
router.post("/product", passport.authenticate('jwt', {session: false}), Validator.validateProduct("create"), ValidationMiddleware.validateResult, productController.create);
router.get("/products", productController.readAll);
router.get("/product/:id", productController.read);
router.put("/product/:id",passport.authenticate('jwt', {session: false}),Validator.validateProduct("update"), ValidationMiddleware.validateResult, productController.update);
router.delete("/product/:id",passport.authenticate('jwt', {session: false}),Validator.validateProduct("delete"), ValidationMiddleware.validateResult, productController.delete);

// Users
router.post('/user', Validator.validateUser("create"), ValidationMiddleware.validateResult, userController.create);
router.post("/login", Validator.validateUser("login"), ValidationMiddleware.validateResult, userController.login);
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put("/user/update", Validator.validateUser("update"), ValidationMiddleware.validateResult,passport.authenticate('jwt', {session: false}), userController.update);
router.put("/user/updatePassword", Validator.validateUser("updatePassword"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), userController.updatePassword);
router.delete("/user/delete", passport.authenticate('jwt', {session:false}), userController.delete); 
router.get('/user/:id/messages', userController.getUserMessages);
router.get('/user/:id/orders', userController.getUserOrders);
router.get('/user/:id/cart', userController.getUserCart);
router.get('/user/:id/favorites', userController.getUserFavorites);

// Sellers
router.get("/sellers", sellerController.readAll);
router.get("/seller/:userId", sellerController.read);

// Categories
router.post("/category", Validator.validateCategory("create"), ValidationMiddleware.validateResult, categoryController.create);
router.get("/category/:id", categoryController.read);
router.get("/categories", categoryController.readAll);
router.put("/category/:id", Validator.validateCategory("create"), ValidationMiddleware.validateResult, categoryController.update);
router.delete("/category/:id", categoryController.delete);

// Addresses
router.post("/address", Validator.validateAddress("create"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), addressController.create);
router.get("/address/:id", addressController.read);
router.put("/address/:id", Validator.validateAddress("update"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), addressController.update);
router.delete("/address/:id", passport.authenticate('jwt', {session:false}), addressController.delete);

// Buy Items
router.post("/buy-item", Validator.validateBuyItem("create"), ValidationMiddleware.validateResult, buyItemController.create);
router.get("/buy-item/:orderId/:productId", buyItemController.read);
router.delete("/buy-item/:orderId/:productId", Validator.validateBuyItem("delete"), ValidationMiddleware.validateResult, buyItemController.delete);

// Cart
router.post("/cart", Validator.validateCart("create"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), cartController.create);
router.get("/cart/:userId", cartController.read);
router.delete("/cart/:userId", passport.authenticate('jwt', {session:false}), cartController.delete);

// Favorites
router.post("/favorite", Validator.validateFavorite("create"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), favoriteController.create);
router.get("/favorite/:buyerId/:productId", favoriteController.read);
router.delete("/favorite/:buyerId/:productId", Validator.validateFavorite("delete"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), favoriteController.delete);

// Messages
router.post("/message", Validator.validateMessage("create"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), messageController.create);
router.get("/message/:id", messageController.read);
router.delete("/message/:id", passport.authenticate('jwt', {session:false}), messageController.delete);

// Orders
router.post("/order", Validator.validateOrder("create"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), orderController.create);
router.get("/order/:id", orderController.read);
router.put("/order/:id", Validator.validateOrder("update"), ValidationMiddleware.validateResult, passport.authenticate('jwt', {session:false}), orderController.update);

// Products on Cart
router.post("/product-on-cart", Validator.validateProductOnCart("create"), ValidationMiddleware.validateResult, productOnCartController.create);
router.delete("/product-on-cart/:cartId/:productId", Validator.validateProductOnCart("delete"), ValidationMiddleware.validateResult, productOnCartController.delete);

// Uploads
router.post('/upload/photo', photoUpload.single("image"), validatePhotoUpload, ValidationMiddleware.validateResult);

export default router;

