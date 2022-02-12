var template = require('./template.js');
var db = require('./db.js');
var url = require('url');
var qs = require('querystring');



exports.add=function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;

    db.query(`SELECT * FROM playlist`, function(error,playlists){
        if(error){
            throw error;
        }
        db.query(`SELECT * FROM song`,function(error2, songs){
          if(error2){
              throw error2;
          }
          
       

          let title = 'Create';
          let list = template.list(playlists);
         // var author=template.authorSelect(authors);
          var html = template.HTML(title, list,
            `
            <form action="/song/add_process/?id=${queryData.id}" method="post">
              <p><input type="text" autocomplete="off" name="title" placeholder="title">
                 <input type="text" autocomplete="off" name="singer" placeholder="singer">
                 </p>
                 <p>
                 <textarea name="description" placeholder="description" rows="10" cols="30"></textarea>
               </p>
                <p>
                <input type="submit">
                </p>
            </form>
            `,
            ``
          );
          response.writeHead(200);
          response.end(html);
        })
    
      });
}


exports.add_process=function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url, true).query;

    var body = '';
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        if(post.title){ //title이 공백이 아닌경우만 입력한다
        db.query(`UPDATE playlist SET songcount=songcount+1 WHERE id=?`,[queryData.id]);
        db.query(`
          INSERT INTO song (title, singer, description, playlist_id) 
            VALUES(?, ?, ?, ?)`,
          [post.title, post.singer, post.description, queryData.id], 
          function(error, result){
            if(error){
              throw error;
            }
            response.writeHead(302, {Location: `/?id=${queryData.id}`});
            response.end();
          }
        )
        
        }
        else{   //title이 공백인경우
            response.writeHead(302, {Location: `/?id=${queryData.id}`});
            response.end();
        }
    });
    
}