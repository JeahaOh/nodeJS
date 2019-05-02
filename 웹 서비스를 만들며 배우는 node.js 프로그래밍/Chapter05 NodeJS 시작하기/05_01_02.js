filesystem_var.unlink( '/tmp/hello', ( err ) => {
    if( err ) {
        throw err;
        return;
    }

    console.log( 'Delete Success' );
});