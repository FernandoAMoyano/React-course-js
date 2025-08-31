const apiKey = import.meta.env.VITE_API_KEY;

const peticion = fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );
peticion
  .then( ( res ) => res.json() )
  .then( ( { data } ) => {
    //console.log( data.images.original.url );
    const { url } = data.images.original;
    const img = document.createElement( "img" );
    img.src = url;

    document.body.append( img );
  } )
  .catch( ( err ) => console.warn( err ) );
