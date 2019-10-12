
 process.env["RUNNING_TIMER"] = 4*(12000 * 36 * 60 * 1 * 20);


setInterval(function(){
     process.env["RUNNING_TIMER"] =   parseInt(process.env["RUNNING_TIMER"]) -1  ;
    console.log( process.env["RUNNING_TIMER"] );
},1000);

var http = require('http') , app = require('./app') ,  port = process.env.PORT || 5006,
serverHostname = "localhost",  httpServer = http.createServer(app) ;
// httpServer.listen(
//     port , serverHostname , 
//     function () { console.log("Server is running ? YES", "port number ===> " + port);
// });
httpServer.listen(process.env.PORT || 5000);