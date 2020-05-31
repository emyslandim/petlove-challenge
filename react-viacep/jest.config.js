module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://localhost:3000/"
    },
    testMatch: [
        "**/tests/**/*.test.js"
    ],
    verbose: true
}