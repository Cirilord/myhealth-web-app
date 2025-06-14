import { Box, Link as ChakraLink, Container, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export type HeaderProps = object;

export default function Header({ }: HeaderProps) {
    return (
        <Box
            as='nav'
            bg='white'
            borderBottomColor='gray.100'
            borderBottomWidth='1px'
            position='sticky'
            top={0}
            zIndex={50}>
            <Container maxW='7xl' px={{ base: 4, sm: 6, lg: 8 }}>
                <Flex align='center' h={16} justify='space-between'>
                    <Flex align='center'>
                        <Link _hover={{ textDecoration: 'none' }} href='/'>
                            <Text color='navy.900' fontSize='2xl' fontWeight='bold'>
                                Alinea
                            </Text>
                        </Link>
                    </Flex>
                    <Container maxW='7xl' px={{ base: 4, sm: 6, lg: 8 }}>
                        <ChakraLink asChild={true}>
                            <NextLink href='/pacientes'>Pacientes</NextLink>
                        </ChakraLink>
                    </Container>
                </Flex>
            </Container>
        </Box>
    );
}