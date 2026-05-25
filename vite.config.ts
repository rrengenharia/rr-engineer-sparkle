import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // <-- É ESTA LINHA QUE ESTÁ FALTANDO

export default defineConfig({
  base: '/rr-engineer-sparkle/',
  plugins: [react()],
  // ... resto do seu código (se tiver)
});
