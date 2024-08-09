import { Router } from "express";
import { productController } from "../controllers/product.controller"; 

const router = Router();

//products
router.post("/product", productController.create);
router.get("/products", productController.readAll);
router.get("/product/:id", productController.read);
router.put("/product/:id", productController.update);
router.delete("/product/:id", productController.delete);


export default router;
