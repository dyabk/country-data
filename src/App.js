import React, { useState } from 'react'
import Filter from './components/Filter'

const App = () => {
  const [filter, setFilter] = useState('')
  
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
