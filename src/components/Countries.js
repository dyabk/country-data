import React from 'react'
import Country from './Country'
import FullCountryInformation from './FullCountryInformation'

const Countries = ( { list, length } ) => {
    const answer1 = <div>Too many matches, specify another filter</div>
    const answer2 = <FullCountryInformation country={list[0]} />
    const answer3 = 
        <div>
            {list.map(country =>
                <Country key={country.name.common} name={country.name.common}/>)
            }
        </div>
    
    return (length === 0 || length > 10
        ? answer1
        : length > 2 && length < 11
            ? answer3
            : answer2
    )
}

export default Countries