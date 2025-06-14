import { z } from 'zod';
import { PatientSchema } from './schemas';

export type Patient = z.infer<typeof PatientSchema>;