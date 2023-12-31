import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './styles/global'
import { AppProvider } from './hooks/StoriesContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider >
      <App />
    </AppProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
