import React from 'react'

import './App.css'
import PageContainer from './components/PageContainer/PageContainer'
import Particles from './components/Particles/Particles'

function App() {
  return (
    <div className="app container">
      <Particles />
      <div className="row">
        <PageContainer />
      </div>
    </div>
  )
}

export default App
