const http = require('http');
const url = require('url');
const HOST = '127.0.0.1';
const PORT = 3000;

var movieLib = [
  {
    "id": 12,
    "title": "Forrest Gump",
    "genre": "drama"
  },
  {
    "id": 23,
    "name": "Mission Impossible 18",
    "genre": "action"
  },
];

const server = http.createServer((req, res) => {
  console.log('request received');
  const reqUrl = url.parse(req.url);
  const query = url.parse(req.url, true).query;
  let id = -1;
  if(url.parse(req.url, true).pathname.length > 7){
    id = reqUrl.pathname.split('/')[2];
  }
  let responseMovie = [];
  switch(reqUrl.pathname) {
    case '/movies':
      if(req.method === 'GET') {
        if(reqUrl.query){
          if(query.genre){
            movieLib.map((element) => {
              if(element.genre == query.genre){
                responseMovie.push(element);
              }
            })
          }
        }
        else{
          responseMovie = {
            movies: movieLib
          };
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(responseMovie, null, 2));
      }
      //=================================
      else if(req.method === 'POST') {
        let requestBody = '';
        if(req.headers.authorization != 'top-secret'){
          res.writeHead(403, {'Content-Type': 'application/json'});
          res.end('Not authorized');
        }
        else{
          req.on('data', (chunk) => {
            requestBody += chunk;
          })
          req.on('end', () => {
            if(requestBody.indexOf('title') < 0){
              res.statusCode = 400;
              res.end(`Doesn't contain title`);
            }
            else {
              if(requestBody.indexOf('genre') < 0){
                requestBody = JSON.parse(requestBody);
                requestBody = {...requestBody, genre: 'unknown'};
              }
              else{
                requestBody = JSON.parse(requestBody);
              }
              movieLib.map(element => {
                if(element.title == requestBody.title){
                  res.statusCode = 409;
                  res.end();
                }
                movieLib.push(requestBody);
                console.log(movieLib);
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({status: 'ok', date: Date.now()}));
                res.end();
              })
            }
          });
        }
      }
      //=================================
      else if(req.method === 'PUT') {
        res.writeHead(405, {'Content-Type': 'application/json'});
        res.end();
      }
      else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end();
      }
      break;
//================================================================================
    case `/movies/${id}`:
      if(req.method === 'GET') {
        movieLib.map((element) => {
          if(element.id == id){
            console.log(element.id);
            responseMovie.push(element);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(responseMovie, null, 2));
          }
        });
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end('No such id');
      }
      //=================================
      else if(req.method === 'DELETE') {
        if(req.headers.authorization != 'top-secret'){
          res.writeHead(403, {'Content-Type': 'application/json'});
          res.end('Not authorized');
        }
        else{
          for(let c in movieLib){
            if(movieLib[c].id == id){
              movieLib.splice(c,1);
              res.statusCode = 204;
              res.end();
            }
          }
          res.writeHead(404, {'Content-Type': 'application/json'});
          res.end(`No such id. Can't delete`);
        }
      }
      //=================================
      else if(req.method === 'PUT') {
        let requestBody = '';
        if(req.headers.authorization != 'top-secret'){
          res.writeHead(403, {'Content-Type': 'application/json'});
          res.end('Not authorized');
        }
        else {
          req.on('data', (chunk) => {
            requestBody += chunk;
          })
          req.on('end', () => {
            requestBody = JSON.parse(requestBody);
            if(!requestBody.id || !requestBody.title || !requestBody.genre){
              res.statusCode = 400;
              res.end(`Container is not correct`);
            }
            else {
              movieLib.map((element,index) => {
                if(element.title == requestBody.title){
                  if(requestBody.id == id){
                    console.log(element.id);
                    console.log(id);
                    movieLib.splice(index, 1);
                    movieLib.push(requestBody);
                    console.log(movieLib);
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(JSON.stringify(movieLib, null, 2));
                  }
                  else {
                    res.writeHead(400, {'Content-Type': 'application/json'});
                    res.end('id is wrong');
                  }
                }
                else {
                  res.writeHead(404, {'Content-Type': 'application/json'});
                  res.end('title is wrong');
                }
              })
              
            }
          });
        }
      }
      break;
    default:
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.end('failed');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`App is listening on ${HOST}:${PORT}`)
})