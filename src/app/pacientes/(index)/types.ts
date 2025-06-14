import { getPatients } from './repos';

export type Patients = Awaited<ReturnType<typeof getPatients>>;