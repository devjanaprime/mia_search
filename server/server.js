const express = require( 'express' );
const app = express();
const mia_api = require( './modules/mia_api' );

app.use( '/mia_api', mia_api );

let port = 5000 ||process.env.PORT;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up