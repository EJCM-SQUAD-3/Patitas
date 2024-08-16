/*import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

export async function userSeed() {

  for (let i = 0; i < 100; i++) {

    const existingUser = await prisma.user.findFirst();
    if (!existingUser) {
      throw new Error('Nenhum usuário encontrado para associar as mensagens.');
    }

    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        hash: faker.string.alphanumeric(20),
        salt: faker.string.alphanumeric(10),
        cpf: faker.string.numeric('###.###.###-##'),
        addresses: {
          create: [
            {
              number: faker.number.int({ min: 1, max: 9999 }),
              apartament: faker.location.secondaryAddress(),
              cep: faker.location.zipCode('#####-###'),
            },
          ],
        },
        seller: {
          create: {
            products: {
              create: [
                {
                  name: faker.commerce.productName(),
                  description: faker.commerce.productDescription(),
                  price: parseFloat(faker.commerce.price()),
                  quantity: faker.number.int({ min: 1, max: 100 }),
                },
              ],
            },
          },
        },
        sentMessages: {
          create: [
            {
              content: faker.lorem.sentence(),
              receiverId: existingUser.id,
            },
          ],
        },
        receivedMessages: {
          create: [
            {
              content: faker.lorem.sentence(),
              senderId: existingUser.id,
            },
          ],
        },
      },
    });

    console.log(`Created user: ${user.name}`);
  }
}

userSeed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); */

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';
import crypto from 'crypto';

const prisma = new PrismaClient();

const NUM_USERS = 100;
const MAX_ADDRESS = 3;

interface User {
  name: string;
  email: string;
  hash: string;
  salt: string;
  cpf: string;
  addresses: Array<{
    number: number;
    apartament: string;
    cep: string;
  }>;
}

const data: User[] = [];

export async function userSeed() {
  for (let i = 0; i < NUM_USERS; i++) {
    const numberOfAddresses = faker.number.int({ min: 1, max: MAX_ADDRESS }); 

    data.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      hash: crypto.randomBytes(64).toString('hex'),
      salt: faker.number.int().toString(),
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
      addresses: Array.from({ length: numberOfAddresses }).map(() => ({
        number: faker.number.int({ min: 1, max: 1000 }),
        apartament: faker.datatype.boolean()
          ? faker.number.int({ min: 1, max: 100 }).toString()
          : '',
        cep: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
      })),
    });
  }

  for (const userData of data) {
    await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        hash: userData.hash,
        salt: userData.salt,
        cpf: userData.cpf,
        addresses: {
          create: userData.addresses,
        },
      },
    });
  }
}
