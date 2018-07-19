const router = require( 'express' ).Router();

router.get( '/', ( req, res ) =>{
    console.log( '/ GET request:', req.query );
    let url = 'https://search.artsmia.org/' + req.query.search;
    axios.get( url )
    .then( res => {
      response.send( res.data );
    })
    .catch ( error => {
      console.log('Error on giphy request', error);
    })
    res.send( 'meow' );
}) // end / GET

module.exports = router;