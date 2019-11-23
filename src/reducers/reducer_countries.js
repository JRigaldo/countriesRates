import {GET_COUNTRIES} from '../actions/index';
import {supportedCurrencyCode} from '../supportedCurrencies.js';

const initialState = {
    countries : []
}

export default function(countryReducer = initialState, action){
    switch(action.type){
        case GET_COUNTRIES :
            return {
                ...initialState,
                countries: getCountriesInfo(action.payload)
            }
        default : return countryReducer;
    }
}

function getCountriesInfo(data){
    return data.map(c => {
        return {
            name: c.name,
            currencies: c.currencies[0].code,
            flag: c.flag,
            code: c.alpha3Code
        }
    }).filter(c => {
        return supportedCurrencyCode.indexOf(c.currencies) > -1;
        // return c.alpha3Code !== "USD";
    })
}

