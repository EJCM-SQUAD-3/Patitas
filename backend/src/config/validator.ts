import { body, param, ValidationChain } from "express-validator";

export class Validator {
  public static validateUser(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("name").exists().withMessage("O nome é obrigatório!").isString(),
          body("email").exists().withMessage("O email é obrigatório!").isEmail(),
          body("password").exists().withMessage("A senha é obrigatória!").isString(),
          body("cpf").exists().withMessage("O CPF é obrigatório!").isString().isLength({ min: 11, max: 11 }),
        ];
      case "login":
        return [
          body("email").exists().withMessage("O email é obrigatório!").isEmail(),
          body("password").exists().withMessage("A senha é obrigatória!").isString(),
        ];
      case "update":
        return [
          body("name").optional().isString(),
          body("email").optional().isEmail(),
          body("cpf").optional().isString().isLength({ min: 11, max: 11 }),
        ];
      case "updatePassword":
        return [
          body("oldPassword").exists().withMessage("A senha atual é obrigatória!").isString(),
          body("newPassword").exists().withMessage("A nova senha é obrigatória!").isString(),
        ];
      default:
        return [];
    }
  }

  public static validateProduct(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("name").exists().withMessage("O nome do produto é obrigatório!").isString(),
          body("description").exists().withMessage("A descrição é obrigatória!").isString(),
          body("price").exists().withMessage("O preço é obrigatório!").isFloat({ min: 0 }),
          body("quantity").exists().withMessage("A quantidade é obrigatória!").isInt({ min: 0 }),
        ];
      case "update":
        return [
          body("name").optional().isString(),
          body("description").optional().isString(),
          body("price").optional().isFloat({ min: 0 }),
          body("quantity").optional().isInt({ min: 0 }),
        ];
      default:
        return [];
    }
  }

  public static validateCategory(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("name").exists().withMessage("O nome da categoria é obrigatório!").isString(),
        ];
      case "update":
        return [
          body("name").exists().withMessage("O nome da categoria é obrigatório!").isString(),
        ];
      default:
        return [];
    }
  }

  public static validateAddress(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("number").exists().withMessage("O número é obrigatório!").isInt(),
          body("apartament").optional().isString(),
          body("cep").exists().withMessage("O CEP é obrigatório!").isString().isLength({ min: 8, max: 8 }),
        ];
      case "update":
        return [
          body("number").optional().isInt(),
          body("apartament").optional().isString(),
          body("cep").optional().isString().isLength({ min: 8, max: 8 }),
        ];
      default:
        return [];
    }
  }

  public static validateBuyItem(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("orderId").exists().withMessage("O ID do pedido é obrigatório!").isInt(),
          body("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
          body("quantity").exists().withMessage("A quantidade é obrigatória!").isInt({ min: 1 }),
          body("unitaryPrice").exists().withMessage("O preço unitário é obrigatório!").isFloat({ min: 0 }),
        ];
      case "delete":
        return [
          param("orderId").exists().withMessage("O ID do pedido é obrigatório!").isInt(),
          param("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
        ];
      default:
        return [];
    }
  }

  public static validateCart(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("totalPrice").exists().withMessage("O preço total é obrigatório!").isFloat({ min: 0 }),
          body("quantity").exists().withMessage("A quantidade é obrigatória!").isInt({ min: 0 }),
        ];
      default:
        return [];
    }
  }

  public static validateFavorite(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
        ];
      case "delete":
        return [
          param("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
        ];
      default:
        return [];
    }
  }

  public static validateMessage(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("content").exists().withMessage("O conteúdo da mensagem é obrigatório!").isString(),
          body("receiverId").exists().withMessage("O ID do destinatário é obrigatório!").isInt(),
        ];
      default:
        return [];
    }
  }

  public static validateOrder(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("status").exists().withMessage("O status do pedido é obrigatório!").isString(),
          body("totalPrice").exists().withMessage("O preço total é obrigatório!").isFloat({ min: 0 }),
          body("items").exists().withMessage("Os itens do pedido são obrigatórios!").isArray(),
        ];
      case "update":
        return [
          param("id").exists().withMessage("O ID do pedido é obrigatório!").isInt(),
          body("status").optional().isString(),
          body("totalPrice").optional().isFloat({ min: 0 }),
        ];
      default:
        return [];
    }
  }

  public static validateProductOnCart(method: string): ValidationChain[] {
    switch (method) {
      case "create":
        return [
          body("quantity").exists().withMessage("A quantidade é obrigatória!").isInt({ min: 1 }),
          body("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
          body("cartId").exists().withMessage("O ID do carrinho é obrigatório!").isInt(),
        ];
      case "delete":
        return [
          param("cartId").exists().withMessage("O ID do carrinho é obrigatório!").isInt(),
          param("productId").exists().withMessage("O ID do produto é obrigatório!").isInt(),
        ];
      default:
        return [];
    }
  }
}
