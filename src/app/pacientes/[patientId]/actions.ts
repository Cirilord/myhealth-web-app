'use server';
import prisma from '@/lib/prisma';
import { actionClient } from '@/safe-action';
import { revalidatePath } from 'next/cache';
import { t } from 'tuple-it';
import { PatientSchema } from './schemas';

export const createOrUpdatePatient = actionClient
    .inputSchema(PatientSchema)
    .action(async ({ parsedInput: patient }) => {

        const [patientUpsertError] = await t(prisma.patient.upsert({
            create: {
                email: patient.email,
                name: patient.name,
                id: patient.id
            },
            update: {
                email: patient.email,
                name: patient.name
            },
            where: {
                id: patient.id
            }
        }));

        if (patientUpsertError) {
            return { success: false } as const;
        }

        revalidatePath('/pacientes');

        return { success: true } as const;
    });