

var http = require("http");
function onQuest(request,response){
    response.writeHead(200,{"Content-type":"text/plain"});
    response.write("hello world");
    response.end();
}

http.createServer(onQuest).listen(9999);