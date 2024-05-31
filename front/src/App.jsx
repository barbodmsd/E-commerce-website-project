import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// https://www.google.com/search?q=apple+watch&sca_esv=f5a20a2e9138d638&sca_upv=1&udm=2&biw=1360&bih=641&sxsrf=ADLYWIKv783s6GLg6VXK_srPBe-37M2njw%3A1717186577061&ei=ETBaZqGkA7GL7NYPxJ20qAU&oq=&gs_lp=Egxnd3Mtd2l6LXNlcnAiACoCCAMyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gJIuzBQwghY_QlwAngAkAEBmAH0AaAB9AGqAQMyLTG4AQHIAQD4AQGYAgKgAiSoAgrCAgoQABiABBhDGIoFwgIFEAAYgASYAwqIBgGSBwEyoAeQBg&sclient=gws-wiz-serp#imgrc=0w8UIoG6SBMPhM&imgdii=-uJ0dTxSK5qYXM