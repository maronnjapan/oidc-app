import { defineConfig } from 'orval'


const result = defineConfig({
    backend: {
        input: {
            target: "./swagger.yaml",
        },
        output: {
            target: "./app/api/backend.ts",
            clean: true,
            client: "react-query",
        },
    },
});

export default result;