import {GET_RATE_EXCHANGE} from '../actions';

const initialState = {
    rateExchangeList : []
}

// ici rateEchangeList est le nom de l'objet désiré ou se trouvera le payload retourné depuis l'action
// ...oldRateExchangeReducer est le tableau des données de l'action retournée split spread (avec les trois petits points)
// rateExchangeList comprend le payload = les donées + les donées précèdentes puisque rateExchangeList est le nom de l'objet
// il y sera donc 2x
export default function(oldRateExchangeReducer = initialState, action){
    switch(action.type) {
        case GET_RATE_EXCHANGE :
            return {
                ...oldRateExchangeReducer,
                rateExchangeList: [action.payload, ...oldRateExchangeReducer.rateExchangeList]
            }
        default : return oldRateExchangeReducer;
    }
}

