import React from 'react'

import './styles/main.css'

import { useInput } from './hooks/useInput'
import InputBox from './components/InputBox'
import Display from './components/Display'

const App = () => {
  const { onSubmit, value, onChange, result, error } = useInput('')

  return (
    <div className='app'>
      <h1>Rupiah Denomination Calculator 2</h1>

      <InputBox value={value} onChange={onChange} onSubmit={onSubmit} />

      <br />

      <Display error={error} result={result} />
    </div>
  )
}

export default App
