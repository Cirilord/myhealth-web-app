import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from './providers';

type RootLayoutProps = {
    children: ReactNode
}

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'My Health'
};

export default function RootLayout(props: RootLayoutProps) {

    const { children } = props;

    return (
        <html lang='en' suppressHydrationWarning={true}>
            <body className={inter.className}>
                <Providers>
                    {children}
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}