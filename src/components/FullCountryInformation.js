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
                    .entries(country.languages)
                    .map(language => <li key={language[0]}>{language[1]}</li>)
                }
            </ul>
            <picture>
                <img src={country.flags.png} alt=""/>
            </picture>
        </div>
    )
}

export default FullCountryInformation