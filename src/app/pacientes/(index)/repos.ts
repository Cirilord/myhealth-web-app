import prisma from '@/lib/prisma';

export async function getPatients() {
    const patients = await prisma.patient.findMany({
        orderBy: [
            {
                id: 'desc'
            }
        ],
        select: {
            email: true,
            id: true,
            name: true
        }
    });

    const safePatients = patients.map(lawyer => ({
        email: lawyer.email,
        id: lawyer.id,
        name: lawyer.name
    }));

    return safePatients;
}