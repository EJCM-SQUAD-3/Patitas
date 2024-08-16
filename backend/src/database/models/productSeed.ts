/*import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

export async function productSeed() {
  const categories = await prisma.category.findMany();

  if (categories.length === 0) {
    throw new Error('Nenhuma categoria encontrada para associar aos produtos.');
  }

  const sellers = await prisma.seller.findMany();

  if (sellers.length === 0) {
    throw new Error('Nenhum vendedor encontrado para associar aos produtos.');
  }

  for (let i = 0; i < 100; i++) {
    const product = await prisma.product.create({
      data: {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseFloat(faker.commerce.price()),
        quantity: faker.number.int({ min: 1, max: 100 }),
        seller: {
          connect: { userId: faker.helpers.arrayElement(sellers).userId },
        },
        categories: {
          create: categories.map(category => ({
            category: {
              connect: { id: category.id },
            },
          })),
        },
      },
    });

    console.log(`Created product: ${product.name}`);
  }
}*/

/*
import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

const NUM_PRODUCTS = 50; 

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    sellerId: number;
    categories: Array<{
        categoryId: number;
    }>;
}

const productData: Product[] = [];

export async function productSeed() {
    for (let i = 0; i < NUM_PRODUCTS; i++) {
        const categoriesCount = faker.number.int({ min: 1, max: 3 });

        productData.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
            quantity: faker.number.int({ min: 1, max: 100 }),
            sellerId: faker.number.int({ min: 1, max: 100 }),
            categories: Array.from({ length: categoriesCount }).map(() => ({
                categoryId: faker.number.int({ min: 1, max: 10 }),
            })),
        });
    }

    for (const product of productData) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                seller: {
                    connect: { userId: product.sellerId }, 
                },
                categories: {
                    create: product.categories,
                },
            },
        });
    }
}*/

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

const NUM_PRODUCTS = 50;

interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    sellerId: number;
    categories: Array<{
        categoryId: number;
    }>;
}

const productData: Product[] = [];

export async function productSeed() {
    const sellers = await prisma.seller.findMany({
        select: { userId: true },
    });

    if (sellers.length === 0) {
        throw new Error("Nenhum vendedor encontrado. Certifique-se de que existem vendedores na base de dados antes de semear produtos.");
    }

    for (let i = 0; i < NUM_PRODUCTS; i++) {
        const categoriesCount = faker.number.int({ min: 1, max: 10 });

        productData.push({
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
            quantity: faker.number.int({ min: 1, max: 100 }),
            sellerId: faker.number.int({ min: 1, max: 20 }),
            categories: Array.from({ length: categoriesCount }).map(() => ({
                categoryId: faker.number.int({ min: 1, max: 10 }),
            })),
        });
    }

    for (const product of productData) {
        await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                seller: {
                    connect: { userId: product.sellerId },
                },
                
            },
        });
    }
}

