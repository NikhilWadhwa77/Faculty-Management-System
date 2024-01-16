import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/signup': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
            '/signin': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
            '/getFaculty': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
            '/addFaculty': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            },
            '/deleteFaculty': {
                target: 'http://localhost:4000',
                changeOrigin: true,
            }
        }
    }
})
