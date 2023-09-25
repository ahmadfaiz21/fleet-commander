const next = require('next')
const https = require('https')
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

const sslOptions = {
    key: fs.readFileSync('private.key'),
    cert: fs.readFileSync('certificate.crt'),
  };


  app.prepare().then(() => {
    const server = https.createServer(sslOptions, (req, res) => {
         return handle(req, res);
       
    })
    server.listen(443, (err) => {
        if (err) throw err
        console.log('> Ready on https://localhost:' );
      })
    })