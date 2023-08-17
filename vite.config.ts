import { fileURLToPath, URL } from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { certificateFor } from 'devcert'

export default defineConfig(async ({mode})=>{
    const config = {
        plugins: [
            vue(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
    if(mode === 'development'){
        config['server'] = {
            host: 'test.com',
            https: await certificateFor('test.com')
        }
    }
    return config
})