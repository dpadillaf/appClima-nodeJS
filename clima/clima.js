const axios = require( 'axios' );

const getClima = async ( lat, lng ) => {

    const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=378ee1006c4c467541fc4e1fc3656231&units=metric` );

    return resp.data.main.temp;

}

module.exports = {
    getClima
}