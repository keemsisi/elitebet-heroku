var http = require('http') , app = require('./app') ,  port = process.env.PORT || 5006,
serverHostname = "localhost",  httpServer = http.createServer(app) ;
// httpServer.listen(
//     port , serverHostname , 
//     function () { console.log("Server is running ? YES", "port number ===> " + port);
// });
httpServer.listen(process.env.PORT || 5000);