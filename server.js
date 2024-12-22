const http = require('node:http');
const pageInfo = require('./data.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${pageInfo.title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                }
                h1 {
                    color: #4CAF50;
                }
                h2 {
                    color: #333;
                }
                p {
                    font-size: 16px;
                }
                footer {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <h1>${pageInfo.title}</h1>
            <h2>${pageInfo.subtitle}</h2>
            <p>${pageInfo.description}</p>
            <footer>
                <p>Autor: ${pageInfo.author} &copy; ${pageInfo.year}</p>
            </footer>
        </body>
        </html>
    `;

    res.end(html);
});

server.listen(0, () => {
    console.log(`Servidor escuchando en ` + server.address().port);
});
