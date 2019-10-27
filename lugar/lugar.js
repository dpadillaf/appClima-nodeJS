const axios = require( 'axios' );

const getLugarLatLng = async ( dir ) => {

    const encodeURL = encodeURI( dir );

    const instance = axios.create( {
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeURL,
        headers: { "x-rapidapi-key": "057c95dfb5mshdcfc0fc7986c263p18734ejsn4e93b4176d82" }
    } );

    const resp = await instance.get();

    if ( resp.data.Results === 0 ){
        throw new Error( `No hay resultado para ${ dir }` );
    }

    const data = resp.data.Results[ 0 ];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
            
    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}

