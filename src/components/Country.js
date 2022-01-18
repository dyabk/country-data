import React, { useState } from 'react'

const Country = ( { country, fullInfo } ) => {
    const [showInfo, setShowInfo] = useState(fullInfo)
    
    const toggleFullInfo = () => {
        setShowInfo(!showInfo)
    }

    return (
        showInfo
            ? <div>
                <h2>{country.name.common}
                <button onClick={toggleFullInfo}>hide</button>
                </h2>
                capital {country.capital}<br />
                population {country.population}
                <h3>Official languages</h3>
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
            : <div>
                {country.name.common}
                <button onClick={toggleFullInfo}>show</button>
            </div>
    )
}

export default Country