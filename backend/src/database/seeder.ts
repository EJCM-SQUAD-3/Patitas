/*
Limpar a base de dados: 
npx prisma migrate reset --skip-seed

Semear a base de dados:
npx prisma db seed

Consultar o banco de dados
npx prisma studio
*/

import { PrismaClient } from '@prisma/client';

import { userSeed } from './models/userSeed';
import { sellerSeed } from './models/sellerSeed';
import { messageSeed } from './models/messageSeed';
import { categorySeed } from './models/categorySeed';
import { productSeed } from './models/productSeed';

const prisma = new PrismaClient();

async function main() {
    await userSeed();
    await sellerSeed();
    await messageSeed();
    await categorySeed();
    await productSeed();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })

    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
