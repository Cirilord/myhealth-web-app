import { Container, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import { TbUserPlus } from 'react-icons/tb';
import { validate as validateUuid } from 'uuid';
import PatientForm from './components/PatientForm';
import { Patient } from './types';

type PatientEditPage = {
    params: Promise<{ patientId: string }>
};

export default async function PatientEditPage(props: PatientEditPage) {

    const { patientId } = await props.params;

    if (!validateUuid(patientId)) {
        redirect('/pacientes');
    }

    const defaultValues: Patient = {
        email: '',
        id: patientId,
        name: ''
    };

    return (
        <Container maxW='7xl' py={8}>
            <Stack gapY={2} marginBottom={8}>
                <HStack gapX={3}>
                    <Icon color='primary' size='xl'>
                        <TbUserPlus />
                    </Icon>
                    <Text as='h1' fontSize={24} fontWeight='bold' lineHeight={1}>
                        Adicionar Novo Paciente
                    </Text>
                </HStack>
                <Text>
                    Preencha as informações do paciente para registrá-lo no sistema.
                </Text>
            </Stack>
            <PatientForm defaultValues={defaultValues} />
        </Container>
    );
}