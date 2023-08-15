import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue"

export default defineConfig({
    plugins: [Vue()],
    test: {
        environment: "happy-dom",
        globals: true,
        setupFiles: ['./src/utils/setup-global-mocks.ts'],
        coverage: {
            reporter: ['json-summary'],
            lines: 100,
            branches: 100,
            functions: 100,
            statements: 100
        }
    }
})
