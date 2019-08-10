var http = require( 'http' );
var fs = require( 'fs' );
var url = require( 'url' );

function templateHTML( title, list, body ) {
    return `
    <!DOCTYPE HTML>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="UTF-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <a href="/create">Create</a>
        ${body}
    </body>
    </html>
    `;
}

function templateList( fileList ) {
    var list = '<ul>';
    var i = 0;
    while( i < fileList.length ) {
        list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
        i++;
    }
    list = list + '</ul>';
    return list;
}

var app = http.createServer( function( request, response ) {
    var _url = request.url;
    var queryData = url.parse( _url, true ).query;
    var pathname = url.parse( _url, true ).pathname;

    // console.log( pathname );

    if( pathname === '/' ){
        if( queryData.id === undefined ) {
            fs.readdir('./data', function( err, fileList ) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = templateList( fileList );
                var template = templateHTML( title, list, `<h2>${title}</h2> ${description}` );
                response.writeHead( 200 );
                response.end( template );
            });
        }   else {
            fs.readdir('./data', function( err, fileList) {
                fs.readFile( `data/${queryData.id}`, 'UTF-8', function( err, description ) {
                    var title = queryData.id;
                    var list = templateList( fileList );
                    var template = templateHTML( title, list, `<h2>${title}</h2> ${description}` );
                    response.writeHead( 200 );
                    response.end( template );
                });
            });
        }
    }   else if( pathname === '/create') {
        fs.readdir('./data', function( err, fileList ) {
            var title = 'WEB - create';
            var list = templateList( fileList );
            var template = templateHTML( title, list, `
            <form action="http://localhost:3000/process_create" method="POST">
                <p><input type="text" name="title" placeholder="TITLE"></p>
                <p>
                    <textarea name="description" placeholder="Description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            ` );
            response.writeHead( 200 );
            response.end( template );
        });
    }   else {
        response.writeHead( 404 );
        response.end( 'Not Found' );
    }
});
app.listen( 3000 );