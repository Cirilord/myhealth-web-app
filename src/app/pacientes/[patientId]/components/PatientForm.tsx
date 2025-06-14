'use client';
import { toaster } from '@/components/ui/toaster';
import { Button, Field, Grid, GridItem, Input, Stack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { t } from 'tuple-it';
import { createOrUpdatePatient } from '../actions';
import { PatientSchema } from '../schemas';
import { Patient } from '../types';

export type PatientFormProps = {
    defaultValues: Patient;
};

export default function PatientForm(props: PatientFormProps) {

    const form = useForm<Patient>({
        defaultValues: props.defaultValues,
        resolver: zodResolver(PatientSchema),
    });

    const onSubmit = form.handleSubmit(async (data) => {

        const [createOrUpdatePatientError, response] = await t(createOrUpdatePatient(data));

        if (createOrUpdatePatientError || !response.data?.success) {
            if (response?.validationErrors) {
                Object.entries(response?.validationErrors).forEach(([field, fieldError]) => {
                    if (fieldError && typeof fieldError === 'object' && '_errors' in fieldError) {
                        form.setError(field as keyof Patient, {
                            type: 'validate',
                            message: fieldError._errors?.[0]
                        });
                    }
                });
            }
            else if (createOrUpdatePatientError || !response.data?.success) {
                toaster.create({
                    description: 'Ocorreu um erro ao salvar os dados.',
                    title: 'Erro inesperado',
                    type: 'error'
                });
            }
        }
        else {
            redirect('/pacientes');
        }
    });

    const formErrors = form.formState.errors;

    return (
        <form noValidate={true} onSubmit={onSubmit}>
            <Stack alignItems='flex-end'>
                <Stack border='1px solid #e5e7eb' borderRadius={8} p={6} width='full'>
                    <Text as='h2' fontSize={24} fontWeight='bold' lineHeight={1} marginBottom={6}>
                        Informações Pessoais
                    </Text>
                    <Grid gap={3} templateColumns='repeat(3, 1fr)'>
                        <GridItem colSpan={1}>
                            <Field.Root invalid={!!formErrors.name} required={true}>
                                <Field.Label>
                                    Nome <Field.RequiredIndicator />
                                </Field.Label>
                                <Input {...form.register('name')} />
                                {/* <Field.ErrorText>
                                    {formErrors.name?.message}
                                </Field.ErrorText> */}
                            </Field.Root>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Field.Root invalid={!!formErrors.email} required={true}>
                                <Field.Label>
                                    Email <Field.RequiredIndicator />
                                </Field.Label>
                                <Input {...form.register('email')} />
                                {/* <Field.ErrorText>
                                    {formErrors.email?.message}
                                </Field.ErrorText> */}
                            </Field.Root>
                        </GridItem>
                    </Grid>
                </Stack>
                <Button backgroundColor='primary' type='submit'>
                    Adicionar Paciente
                </Button>
            </Stack>
        </form>
    );
}