import Header from '@/components/Header';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TemplateProps = {
    children: ReactNode
};

export default function Template(props: TemplateProps) {
    const { children } = props;
    return (
        <Box bg='#f9fafb' minH='100vh'>
            <Header />
            {children}
        </Box>
    );
}