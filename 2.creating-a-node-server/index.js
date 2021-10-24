const http = require("http");
const PORT = 3000;

const app = http.createServer((req, res) => {

});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});