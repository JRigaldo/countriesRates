import React, {Component} from 'react';
import {connect} from 'react-redux';
import RateExchangeListItem from '../components/rate-exchange-list-item';

class RateExchangeList extends Component {
    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Pays</th>
                        <th>Drapeaux</th>
                        <th className="col-md-6">Valeur de la monnaie par rapport au $</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.rateExchangeList.map( (r, index) => {
                             return <RateExchangeListItem key={r + index} rateExchange={r} />
                        })
                    }
                </tbody>
            </table>
        )
    }
}

// rateExchangeList = tableau du payload
// rateExchangeReducer = nom du reducer dans l'index
const mapStateToProps = state => {
    return {
        rateExchangeList: state.rateExchangeReducer.rateExchangeList
    }
}

export default connect(mapStateToProps, undefined) (RateExchangeList);