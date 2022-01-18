import React, { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    console.log(`filter will be set to ${event.target.value}`)
    setFilter(event.target.value)
  }
  
  return (
    <div className="App">
      <Filter handler={handleFilterChange} word={filter} />
    </div>
  );
}

export default App;
