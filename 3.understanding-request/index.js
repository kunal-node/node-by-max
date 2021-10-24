const http = require("http");
const PORT = 3000;

const app = http.createServer((req, res) => {
    console.log("url : ", req.url);
    console.log("Method : ", req.method);
    console.log("headers : ", req.headers);
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});