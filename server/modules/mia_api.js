const router = require( 'express' ).Router();
const axios = require( 'axios' );

router.get( '/', ( req, res ) =>{
    console.log( '/ GET request:', req.query.search );
    let url = 'https://search.artsmia.org/' + req.query.search;
    axios.get( url )
    .then( ( response ) => {
      res.send( response.data );
    })
    .catch ( ( err ) => {
      console.log( 'Error on API request', err );
    })
}) // end / GET

module.exports = router;