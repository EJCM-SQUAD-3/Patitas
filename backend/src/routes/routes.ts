import { Router } from "express";
import { productController } from "../controllers/product.controller"; 
import { userController } from "../controllers/user.controller";
import { sellerController } from "../controllers/seller.controller";
import { categoryController } from "../controllers/category.controller";


const router = Router();

//products
router.post("/product", productController.create);
router.get("/products", productController.readAll);
router.get("/product/:id", productController.read);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);

//users
router.post('/user', userController.create);
router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.get('/user/:id/messages', userController.getUserMessages);
router.get('/user/:id/orders', userController.getUserOrders);
router.get('/user/:id/cart', userController.getUserCart);
router.get('/user/:id/favorites', userController.getUserFavorites);

//sellers
router.get("/sellers", sellerController.readAll);
router.get("/seller/:userId", sellerController.read);

//categories
router.post("/category", categoryController.create);
router.get("/category/:id", categoryController.read);
router.get("/categories", categoryController.readAll);
router.put("/category/:id", categoryController.update);
router.delete("category/:id", categoryController.delete);



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
