var http = require('http');
var fs = require('fs');
var url = require('url');

var handleRequest = function(request, response){
    response.writeHead(200 , {"Content-Type": "text/plain"});
    var path = url.parse(request.url).pathname ;
    var text = "";
    if ( path == "/quote") {
            text += fs.readFileSync('/opt/quote.txt', 'utf8', function(err, data) {
            if (err) throw err;
            console.log(data);
}

);

    }
    response.end(text);
};
var server = http.createServer(handleRequest);
server.listen(80);