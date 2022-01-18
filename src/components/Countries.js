import React from 'react'
import Country from './Country'

const Countries = ( { countries, length } ) => {
    const answer1 = <div>Too many matches, specify another filter</div>
    const answer2 = <Country country={countries[0]} fullInfo={true} />
    const answer3 = 
        <div> {
            countries.map(country =>
                <Country key={country.name.common} country={country} fullInfo={false}/>
            )
        } </div>
    
    return (length === 0 || length > 10
        ? answer1
        : length === 1
            ? answer2
            : answer3
    )
}

export default Countries