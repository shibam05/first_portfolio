module.exports = {
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"]
            },
            colors: {
                terminal: {
                    bg: "#0b0f09",
                    text: "#d6f8c4",
                    accent: "#6efc8b",
                    dim: "#8da58c"
                }
            }
        }
    },
    plugins: []
};