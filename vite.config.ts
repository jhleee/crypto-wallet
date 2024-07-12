import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    base: "/v0-app/", // GitHub 저장소 이름으로 수정
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
