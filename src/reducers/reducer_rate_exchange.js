import {GET_RATE_EXCHANGE} from '../actions/index';

const initalState = {
    initialRateExchange : []
}

export default function(oldRateExchangeReducer = initalState, action){
    switch(action.type) {
        case GET_RATE_EXCHANGE :
            return {
                ...oldRateExchangeReducer,
                rateExchangeList: [action.payload, ...oldRateExchangeReducer.rateExchangeList]
            }
        default : return oldRateExchangeReducer;
    }
}