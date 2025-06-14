import { z } from 'zod';

export const PatientSchema = z.object({
    email: z.string().email(),
    id: z.string().uuid(),
    name: z.string().min(1),
});