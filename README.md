# Client

## step 1  Install Vite
create folder client

```bash
npm create vite
npm install
npm run dev
```

## step 2 Install tailwind
https://tailwindcss.com/docs/installation/using-vite

```bash
npm install tailwindcss @tailwindcss/vite
```
edit  vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
add this code to index.css
```css
@import "tailwindcss";
```
and test this code.
```jsx
<h1 className='text-3xl font-bold underline'>Hello World!</h1>
```

## step 3 Install React-Router
https://reactrouter.com/start/
```bash
npm i react-router
```
## step 4 Sweetalert2
```bash
npm i sweetalert2
```
## step 5
```bash

```