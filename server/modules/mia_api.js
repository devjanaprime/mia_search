const router = require( 'express' ).Router();

router.get( '/', ( req, res ) =>{
    console.log( '/ GET request:', req.query );
    res.send( 'meow' );
}) // end / GET

module.exports = router;