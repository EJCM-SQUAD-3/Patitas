import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

const NUM_CATEGORIES = 10; 

interface Category {
    name: string;
}

const categoryData: Category[] = [];

export async function categorySeed() {
    for (let i = 0; i < NUM_CATEGORIES; i++) {
        categoryData.push({
            name: faker.commerce.department(),
        });
    }
    for (const category of categoryData) {
        await prisma.category.create({
            data: {
                name: category.name,
            },
        });
    }
}