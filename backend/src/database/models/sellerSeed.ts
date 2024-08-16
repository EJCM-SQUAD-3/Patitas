import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const NUM_SELLERS = 20;

export async function sellerSeed() {
    const users = await prisma.user.findMany({
        where: {
            seller: null,
        },
        select: { id: true },
    });

    if (users.length === 0) {
        throw new Error("Nenhum usuário disponível para se tornar vendedor. Certifique-se de que há usuários sem vendedores na base de dados.");
    }

    for (let i = 0; i < NUM_SELLERS && i < users.length; i++) {
        const user = users[i];

        await prisma.seller.create({
            data: {
                user: {
                    connect: { id: user.id },
                },
            },
        });
    }
}
