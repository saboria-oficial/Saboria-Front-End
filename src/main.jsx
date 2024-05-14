import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import MeuComponente from './components/Meucomponente.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <MeuComponente/>
  </React.StrictMode>,
)
