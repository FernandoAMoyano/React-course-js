const getImagen = async () => {

  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    const res = await fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` );
    const { data } = await res.json();

    const { url } = data.images.original;
    const img = document.createElement( "img" );
    img.src = url;
    document.body.append( img );
  } catch ( error ) {
    //Manejo del error
    console.error( error );

  }
};

getImagen();

