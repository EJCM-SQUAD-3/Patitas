import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prisma = new PrismaClient();

const NUM_MESSAGES = 50;

interface Message {
    content: string;
    senderId: number;
    receiverId: number;
    datetime: Date;
}

const messageData: Message[] = [];

export async function messageSeed() {
    for (let i = 0; i < NUM_MESSAGES; i++) {
        const senderId = faker.number.int({ min: 1, max: 100 });
        let receiverId = faker.number.int({ min: 1, max: 100 });

        while (receiverId === senderId) {
            receiverId = faker.number.int({ min: 1, max: 100 });
        }

        messageData.push({
            content: faker.lorem.sentence(),
            senderId: senderId,
            receiverId: receiverId,
            datetime: faker.date.recent(),
        });
    }

    for (const message of messageData) {
        await prisma.message.create({
            data: {
                content: message.content,
                sender: {
                    connect: { id: message.senderId },
                },
                receiver: {
                    connect: { id: message.receiverId },
                },
                datetime: message.datetime,
            },
        });
    }
}