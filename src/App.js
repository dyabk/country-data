import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = filter === ''
    ? countries
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())).sort()
  
  return (
    <div className="App">
      <Filter handler={handleFilterChange} word={filter} />
      <Countries countries={countriesToShow} length={countriesToShow.length}/>
    </div>
  );
}

export default App;
