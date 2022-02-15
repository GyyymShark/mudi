var http = require('http');
var url = require('url');
const playlist=require('./lib/playlist.js');
const song=require('./lib/song.js');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    
    
    if(pathname === '/'){
      if(queryData.id === undefined){
        playlist.home(request, response);
      } else {
        playlist.page(request, response);
      }
    } else if(pathname === '/create'){
      playlist.create(request, response);
    } else if(pathname === '/create_process'){
      playlist.create_process(request, response);
    } else if(pathname === '/update'){
      playlist.update(request, response);
    } else if(pathname === '/update_process'){
      playlist.update_process(request, response);
    } else if(pathname === '/delete_process'){
      playlist.delete_process(request, response);
    } else if(pathname === '/song/add/'){
      song.add(request, response);
    } else if(pathname=== '/song/add_process/'){
      song.add_process(request, response);
    } else if(pathname=== '/song/delete_process'){
      song.delete_process(request, response);
    } else if(pathname=== '/song/update'){
      song.update(request, response);
    } else if(pathname=== '/song/update_process/'){
      song.update_process(request, response);
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000); 