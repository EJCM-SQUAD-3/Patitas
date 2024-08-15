/*
Limpar a base de dados: 
npx prisma migrate reset --skip-seed

Semear a base de dados:
npx prisma db seed

Consultar o banco de dados
npx prisma studio
*/

import {PrismaClient} from '@prisma/client';
import {userSeed} from './Seeds/userSeed';
//import {productSeed} from './Seeds/userSeed';

const prisma = new PrismaClient();

async function main()
{
    await userSeed();
    //await productSeed();
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })

    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
