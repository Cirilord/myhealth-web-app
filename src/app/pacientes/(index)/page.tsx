import { Container, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { TbUser } from 'react-icons/tb';
import PacientList from './components/PacientList';
import { getPatients } from './repos';

type PatientListPage = object;

export default async function PatientListPage({ }: PatientListPage) {

    const patients = await getPatients();

    return (
        <Container maxW='7xl' py={8}>
            <Stack gapY={2} marginBottom={8}>
                <HStack gapX={3}>
                    <Icon color='primary' size='xl'>
                        <TbUser />
                    </Icon>
                    <Text as='h1' fontSize={24} fontWeight='bold' lineHeight={1}>
                        Pacientes
                    </Text>
                </HStack>
                <Text>
                    Preencha as informações do paciente para registrá-lo no sistema.
                </Text>
            </Stack>
            <PacientList rows={patients} />
        </Container>
    );
}