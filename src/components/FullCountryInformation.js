import React from 'react'

const FullCountryInformation = ( {country} ) => {
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            capital {country.capital}<br />
            population {country.population}
            <h2>languages</h2>
            <ul>
                {Object
                    .values(country.languages)
                    .map(language => <li>{language}</li>)
                }
            </ul>
        </div>
    )
}

export default FullCountryInformation