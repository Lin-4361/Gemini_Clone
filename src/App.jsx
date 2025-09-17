// src/App.jsx
import React from 'react'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import ContextProvider from './context/Context'

const App = () => {
  return (
    <ContextProvider>
      <SideBar/>
      <Main/>
    </ContextProvider>
  )
}

export default App