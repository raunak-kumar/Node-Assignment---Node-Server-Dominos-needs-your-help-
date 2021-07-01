var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url == "/welcome"){
      res.writeHead(200,{
        "Content-Type" : "text/plain"
      })
    //   res.setHeader("Content-Type", "text/plain");
    //   res.setStatus = 200;
      res.write("Welcome to Dominos!")
      res.end();
  }
  else if(req.url == "/contact"){
    res.writeHead(200,{
        "Content-Type" : "application/json"
      })
    // res.setHeader("Content-Type", "application/json");
    // res.setStatus = 200;
    res.write(JSON.stringify({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
      }))
    res.end();
  }
  else{
      res.writeHead(404);
      res.end();
  }
}

httpServer.listen(8081, ()=>{console.log("running")})
module.exports = httpServer;