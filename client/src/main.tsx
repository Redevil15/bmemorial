import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import ThemeProvider from './components/theme-provider.tsx'
import { store } from './redux/store.ts'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Toaster position="top-center" />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
