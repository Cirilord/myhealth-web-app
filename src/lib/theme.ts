import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: {
                    value: '#9333ea'
                }
            }
        }
    }
});

export const system = createSystem(defaultConfig, customConfig);