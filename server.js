const express = require('express')
const { parse } = require('querystring');
const path = require('path')
const app = express()
const port = 8080

app.post('/file-upload', (request, response) => {
  if (request.method === 'POST') {
    collectRequestData(request, result => {
        console.log('Request Body:')
        console.log(result);
    });
  }

  response.set('Access-Control-Allow-Origin', '*')
  const filePath = path.join(__dirname, 'sample.xlsx')
  response.sendFile(filePath)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

function collectRequestData(request, callback) {
  const FORM_URLENCODED = 'multipart/form-data';
  if(request.headers['content-type'] === FORM_URLENCODED) {
      let body = '';
      request.on('data', chunk => {
          body += chunk.toString();
      });
      request.on('end', () => {
          callback(parse(body));
      });
  }
  else {
      callback(null);
  }
}
