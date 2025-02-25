// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import themeConfig from './theme/themeConfig.ts'
import './globals.css'


const rootElement = document.getElementById('root')!

createRoot(rootElement).render(
  <ConfigProvider theme={themeConfig} wave={{ disabled: true }}>
    <App />
  </ConfigProvider>
)
