let stack_list = [];

app.route('/stack/:stack_name')
.get( ( req, res) => {
    let stack_name = req.params.stack_name;
    let result;
    if( stack_list[ stack_name ] ){
        result = stack_list[ stack_name ].pop();
    }   else {
        result = null;
    }

    res.json = null;
})
.put( ( req, res ) => {
    let stack_name = req.params.stack_name;

    if( stack_list[ stack_name ] ){
        stack_list[ stack_name ].push( req.body );
    }   else {
        stack_list[ stack_name ] = [ req.body ];
    }

    res.json({
        result: 'ok'
    });
});