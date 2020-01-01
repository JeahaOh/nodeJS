var http = require( 'http' );
var fs = require( 'fs' );
var url = require( 'url' );
var qs = require( 'querystring' );

//  refactoring
const template = {
    HTML : function( title, list, body, control ) {
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
            ${control}
            ${body}
        </body>
        </html>
        `;
    },
    list : function( fileList ) {
        var list = '<ul>';
        var i = 0;
        while( i < fileList.length ) {
            list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`
            i++;
        }
        list = list + '</ul>';
        return list;
    }
}

var app = http.createServer( function( request, response ) {
    var _url = request.url;
    var queryData = url.parse( _url, true ).query;
    var pathname = url.parse( _url, true ).pathname;

    if( pathname === '/' ){
        if( queryData.id === undefined ) {
            fs.readdir('./data', function( err, fileList ) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';

                /*
                var list = templateList( fileList );
                var template = templateHTML( title, list,
                    `<h2>${title}</h2> ${description}`,
                    `<a href="/create">Create</a>` );
                response.writeHead( 200 );
                response.end( template );
                */

                var list = template.list( fileList );
                var html = template.HTML( title, list,
                    `<h2>${title}</h2> ${description}`,
                    `<a href="/create">Create</a>` );
                response.writeHead( 200 );
                response.end( html );
                
            });
        }   else {
            fs.readdir('./data', function( err, fileList) {
                fs.readFile( `data/${queryData.id}`, 'UTF-8', function( err, description ) {
                    var title = queryData.id;
                    var list = template.list( fileList );
                    var html = template.HTML( title, list,
                        `<h2>${title}</h2> ${description}`,
                        `<a href="/create">Create</a>
                         <a href="/update?id=${title}">Update</a>
                         <form action="delete_process" method="post" onsubmit="REALLY??">
                            <input type="hidden" name="id" value="${title}">
                            <input type="submit" value="delete">
                         </form>` );
                    response.writeHead( 200 );
                    response.end( html );
                });
            });
        }
    }   else if( pathname === '/create') {
        fs.readdir('./data', function( err, fileList ) {
            var title = 'WEB - create';
            var list = template.list( fileList );
            var html = template.HTML( title, list, `
            <form action="/create_process" method="POST">
                <p><input type="text" name="title" placeholder="TITLE"></p>
                <p>
                    <textarea name="description" placeholder="Description"></textarea>
                </p>
                <p>
                    <input type="submit">
                </p>
            </form>
            `, '' );
            response.writeHead( 200 );
            response.end( html );
        });
    }   else if( pathname === '/create_process') {
        var body = '';
        request.on( 'data', function( data ) {
            body = body + data;
            //  Post data가 많으면 연결을 끊음.
            //  1e6 === 1 * Math.pow( 10, 6 ) === 1 * 1000000 ~~ 1 MB
            if( body.length > 1e6 ){
                request.connection.destroy();
            }
        });
        request.on( 'end', function() {
            var post = qs.parse( body );
            var title = post.title;
            var description = post.description;

            fs.writeFile( `data/${title}`, description, 'UTF8',
            function( err ) {
                response.writeHead( 302, { Location: `/?id=${title}` } );
                response.end( 'success' );
            });
        });
    }   else if( pathname === '/update' ) {
        fs.readdir('./data', function( err, fileList) {
            fs.readFile( `data/${queryData.id}`, 'UTF-8', function( err, description ) {
                var title = queryData.id;
                var list = template.list( fileList );
                var html = template.HTML( title, list,
                    `
                    <form action="/update_process" method="POST">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="TITLE" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="Description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                    `,
                    `<a href="/create">Create</a> <a href="/update?id=${title}">Update</a>` );
                response.writeHead( 200 );
                response.end( html );
            });
        });
    }   else if( pathname === '/update_process' ) {
        var body = '';
        request.on( 'data', function( data ) {
            body = body + data;
        });
        request.on( 'end', function() {
            var post = qs.parse( body );
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename( `data/${id}`, `data/${title}`, function( err ) {
                fs.writeFile( `data/${title}`, description, 'UTF8',
                function( err ) {
                    response.writeHead( 302, { Location: `/?id=${title}` } );
                    response.end( 'success' );
                });
            });
        });
    }   else if( pathname === '/delete_process' ) {
        var body = '';
        request.on( 'data', function( data ) {
            body = body + data;
        });
        request.on( 'end', function() {
            var post = qs.parse( body );
            var id = post.id;
            fs.unlink( `data/${id}`, function( err ) {
                response.writeHead( 302, { Location: `/` } );
                    response.end( 'success' );
            } );
        });
    }   else {
        response.writeHead( 404 );
        response.end( 'Not Found' );
    }
});
app.listen( 3000 );