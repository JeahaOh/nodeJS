let que_list = [];

app.route('/que/:que_name')
.put( (req, res) => {
    let que_name = req.params.que_name;
    if( que_list[ que_name ] ){
        que_list[ que_nqme ].push( req.body );
    }   else {
        que_list[ que_name ] = [ req.body ];
    }

    res.json({
        result:'ok'
    });
})
.get( (req, res) => {
    let que_name = req.params.que_name;

    let result;
    if( que_list[ que_name ] ){
        result = que_list[ que_name ].shift();
    }   else {
        result = null;
    }
});