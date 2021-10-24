const http = require("http");
const fs = require("fs");
const PORT = 3000;

const app = http.createServer((req, res) => {
    const {method, url} = req;
    if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <head><title>MyApp</title></head>
                <body>
                    <form action="/message" method="POST">
                        <input name="message" type="text"/>
                        <button type="submit">send</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if(url === "/message" && method === "POST"){
        const data = [];
        //=======================================
        req.on("data", chunk => {
            data.push(chunk);
        });
        req.on("end", () => {
            const bf = Buffer.concat(data);
            const parsedData = bf.toString().split("=")[1];
            fs.writeFileSync("message.txt", parsedData);
            
        });
        //=======================================
        res.setHeader("Location", "/");
        res.statusCode = 302;
        return res.end();
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});