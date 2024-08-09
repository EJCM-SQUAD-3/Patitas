import { Router } from "express";
import { productController } from "../controllers/product.controller"; 
import {userController} from "../controllers/user.controllers";

const router = Router();

//products
router.post("/product", productController.create);
router.get("/products", productController.readAll);
router.get("/product/:id", productController.read);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);


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
