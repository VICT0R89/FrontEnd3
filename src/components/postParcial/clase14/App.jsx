import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context'
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {

  const [language, setLanguage] = useState(languages.english)

  const handleChangeLA = () => {
    const nextLanguage = {
      [languages.english.id]: languages.spanish,
      [languages.spanish.id]: languages.portuguese,
      [languages.portuguese.id]: languages.english,
    }
    setLanguage((prevLanguage) => nextLanguage[prevLanguage.id])
  }
  return (
    <div className="App">
      <LanguageContext.Provider value={{language, handleChangeLA}}>
        <Navbar />
        <Body />
      </LanguageContext.Provider>
    </div>
  )
}
export default App