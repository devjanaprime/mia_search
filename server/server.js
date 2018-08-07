const express = require( 'express' );
const app = express();
const axios = require( 'axios' );
const mia_api = require( './modules/mia_api' );

app.use(express.static('server/public'));

app.use( '/mia_api', mia_api );

let port = 5000 ||process.env.PORT;

app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) //end server up