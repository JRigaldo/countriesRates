import React, { Component } from 'react';
import {fetchCountries} from '../actions/index';
import {connect} from 'react-redux';

class SearchBar extends Component{

    componentWillMount(){
        this.props.fetchCountries();
    }

    renderSelectCountries(){
        return(
            <select 
            onChange={e => this.onChangeCountry(e) }
            className="form-control search-bar">
                {this.props.countries.map(c => {
                    return (
                        <option key={c.code} value={c.code}>
                            {c.name}
                        </option>
                    );
                })}
            </select>
        )
    }

    onChangeCountry = e => {
        console.log('event country', e.target.value);
    }

    render(){
        return(
            <form className="form-group">
                {this.renderSelectCountries()}
            </form>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        countries: store.countryReducer.countries
    }
}

const mapDispatchToProps = {
    fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBar);