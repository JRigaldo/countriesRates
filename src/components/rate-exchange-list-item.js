import React, {Component} from 'react';
import ReactChartKick, {AreaChart} from 'react-chartkick';
import Chart from 'chart.js';

ReactChartKick.addAdapter(Chart);
class RateExchangeListItem extends Component{
    render() {
        // console.log(this.props.rateExchange)
        const { name, flag, rates, currencyCode } = this.props.rateExchange;
        return (
            <tr>
                <td>{name}</td>
                <td><img src={flag} height="60 " width="100" alt={name} /></td>
                <td>
                    <AreaChart 
                        data={formatData(rates, currencyCode)} 
                        xtitle="Date"
                        ytitle={rates}
                    />
                </td>
            </tr>
        )
    }  
}
 
function formatData(rates, currencyCode){
    return Object.keys(rates).map(date => {
        return [date, rates[date][currencyCode]]
    })
}

export default RateExchangeListItem;