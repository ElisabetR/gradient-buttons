import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {
  

  const handleDownload = () => {
    console.log('Download clicked!')
  }

  return (
    <>
      <div>
  
        {/* Button showcase with different colors */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          marginTop: '2rem',
          alignItems: 'center'
        }}>
          <Button 
            onClick={handleDownload}
            baseColor="#CBEFF1"
            icon="pin"
          >
            Pin location
          </Button>
          <Button 
            onClick={handleDownload}
            baseColor="#FFD6E8"
            icon="sun"
          >
            Go to forecast
          </Button>
          <Button 
            onClick={handleDownload}
            baseColor="#C9E4DE"
            icon="cloud"
          >
            Download now
          </Button>
          <Button 
            onClick={handleDownload}
            baseColor="#FFEFA1"
            icon="map"
          >
            Explore cities
          </Button>
          <Button 
            onClick={handleDownload}
            baseColor="#FFC09F"
            icon="moon"
          >
            Dark Mode
          </Button>
        </div>
      </div>
   
    </>
  )
}

export default App
