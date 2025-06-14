import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.patient.upsert({
        create: {
            email: 'paciente@paciente.com',
            name: 'Paciente'
        },
        update: {},
        where: {
            email: 'paciente@paciente.com'
        }
    });
}

main().then(() => prisma.$disconnect()).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});