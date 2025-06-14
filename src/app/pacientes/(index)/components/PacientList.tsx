'use client';
import { Button, Link as ChakraLink, Link, Stack, Table } from '@chakra-ui/react';
import NextLink from 'next/link';
import { v7 as uuidv7 } from 'uuid';
import { Patients } from '../types';
import { useEffect, useState } from 'react';

export type PacientListProps = {
    rows: Patients;
};

export default function PacientList(props: PacientListProps) {

    const { rows } = props
        , [newId, setNewId] = useState('');

    useEffect(() => {
        setNewId(uuidv7());
    }, [rows]);

    return (
        <Stack alignItems='flex-start'>
            <Button asChild={true} backgroundColor='primary'>
                <ChakraLink asChild={true}>
                    <NextLink href={`/pacientes/${newId}`}>Novo Paciente</NextLink>
                </ChakraLink>
            </Button>
            <Table.Root size='sm' variant='outline'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Nome</Table.ColumnHeader>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {rows.map((row) => (
                        <Table.Row key={row.id}>
                            <Table.Cell>
                                <Link href={`/pacientes/${row.id}`}>
                                    {row.name}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                {row.email}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Stack>
    );
}