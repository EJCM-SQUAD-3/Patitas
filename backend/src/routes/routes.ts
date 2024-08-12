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


const router = Router();

// Products
router.post("/product", productController.create);
router.get("/products", productController.readAll);
router.get("/product/:id", productController.read);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);

// Users
router.post('/user', userController.create);
router.get("/login", userController.login);
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put("/user/update", passport.authenticate('jwt', {session: false}), userController.update);
router.put("/user/updatePassword", passport.authenticate('jwt', {session:false}), userController.updatePassword);
router.delete("/user/delete", passport.authenticate('jwt', {session:false}), userController.delete); 
router.get('/user/:id/messages', userController.getUserMessages);
router.get('/user/:id/orders', userController.getUserOrders);
router.get('/user/:id/cart', userController.getUserCart);
router.get('/user/:id/favorites', userController.getUserFavorites);

// Sellers
router.get("/sellers", sellerController.readAll);
router.get("/seller/:userId", sellerController.read);

// Categories
router.post("/category", categoryController.create);
router.get("/category/:id", categoryController.read);
router.get("/categories", categoryController.readAll);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);

// Addresses
router.post("/address", addressController.create);
router.get("/address/:id", addressController.read);
router.put("/address/:id", addressController.update);
router.delete("/address/:id", addressController.delete);

// Buy Items
router.post("/buy-item", buyItemController.create);
router.get("/buy-item/:orderId/:productId", buyItemController.read);
router.delete("/buy-item/:orderId/:productId", buyItemController.delete);

// Cart
router.post("/cart", cartController.create);
router.get("/cart/:userId", cartController.read);
router.delete("/cart/:userId", cartController.delete);

// Favorites
router.post("/favorite", favoriteController.create);
router.get("/favorite/:buyerId/:productId", favoriteController.read);
router.delete("/favorite/:buyerId/:productId", favoriteController.delete);

// Messages

// Orders
router.post("/order", orderController.create);
router.get("/order/:id", orderController.read);
router.put("/order/:id", orderController.update);

// Products on Cart
router.post("/product-on-cart", productOnCartController.create);
router.delete("/product-on-cart/:cartId/:productId", productOnCartController.delete);

//rotas usuário
router.post('/users', userController.create);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/:id/messages', userController.getUserMessages);
router.get('/users/:id/orders', userController.getUserOrders);
router.get('/users/:id/cart', userController.getUserCart);
router.get('/users/:id/favorites', userController.getUserFavorites);



export default router;

