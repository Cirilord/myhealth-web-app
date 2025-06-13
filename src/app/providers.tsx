'use client';
import { system } from '@/lib/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

export default function Providers(props: { children: ReactNode }) {
    return (
        <ChakraProvider value={system}>
            <ThemeProvider attribute='class' disableTransitionOnChange={true} forcedTheme='light'>
                {props.children}
            </ThemeProvider>
        </ChakraProvider>
    );
}