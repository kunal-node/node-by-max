const http = require("http");
const PORT = 3000;

const app = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <html>
            <head><title>MyApp</title></head>
            <body>
                <h1>Hello From Node</h1>
            </body>
        </html>
    `);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});