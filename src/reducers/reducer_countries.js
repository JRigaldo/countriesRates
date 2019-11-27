import {GET_COUNTRIES} from '../actions/index';
import {supportedCurrencyCode} from '../supportedCurrencies';

const initialState = {
    countries : []
}

// Va renvoyer countryReducer.countries return countries return countryReducer => SearchBar
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
            currencyCode: c.currencies[0].code,
            flag: c.flag,
            code: c.alpha3Code
        }
    }).filter(c => {
        // Est-ce bien présent dans le tableau
        return supportedCurrencyCode.indexOf(c.currencyCode) > -1;
        // return c.alpha3Code !== "USD";
    })
}

