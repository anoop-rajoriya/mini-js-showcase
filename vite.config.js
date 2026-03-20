// vite.config.js
export default {
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                "01-theme-switcher": '/01-theme-switcher/index.html',
                "02-drag-drop-kanban": '/02-drag-drop-kanban/index.html',
            }
        }
    }
}