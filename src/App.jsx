import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import TextInput from './components/TextInput'

const colorPalettes = {
  pastel: [
    '#CBEFF1',  // Light blue
    '#FFD6E8',  // Light pink
    '#C9E4DE',  // Light green
    '#FFEFA1',  // Light yellow
    '#FFC09F',  // Light coral
  ],
  sunset: [
    '#FFB3A0',  // Vibrant coral-red
    '#FFA088',  // Vibrant salmon
    '#FFB576',  // Vibrant orange-red
    '#FF9898',  // Vibrant warm red
    '#FFA682',  // Vibrant terracotta
  ],

  jewel: [
    '#FFE1F6',  // Light ruby
    '#E1EEFF',  // Light sapphire
    '#E1FFF1',  // Light emerald
    '#FFE1E1',  // Light garnet
    '#E8E1FF',  // Light amethyst
  ],
  berry: [
    '#FFD6E8',  // Light pink
    '#E8D6FF',  // Light lavender
    '#FFE8D6',  // Light peach
    '#FFD6D6',  // Light coral
    '#D6FFEF',  // Light mint
  ],
  forest: [
    '#CCFFAA',  // Vibrant lime
    '#AAFFCC',  // Vibrant mint
    '#A8FFE2',  // Vibrant aqua
    '#C1FF99',  // Vibrant chartreuse
    '#B9FFA8',  // Vibrant sage
  ],
};

function App() {
  const [currentPalette, setCurrentPalette] = useState('pastel');
  const baseColors = colorPalettes[currentPalette];

  const [buttonColors, setButtonColors] = useState({
    pin: 0,
    forecast: 1,
    download: 2,
    explore: 3,
    darkMode: 4,
    upload: 0,
    lightMode: 2
  });

  const handleButtonClick = (buttonId) => {
    setButtonColors(prev => ({
      ...prev,
      [buttonId]: (prev[buttonId] + 1) % baseColors.length
    }));
  }

  const handleDownload = () => {
    console.log('Download clicked!')
  }

  const PaletteButton = ({ name, colors }) => (
    <button 
      onClick={() => setCurrentPalette(name)}
      style={{
        width: '100%',
        height: '40px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        background: `linear-gradient(90deg, ${colors.join(', ')})`,
        boxShadow: currentPalette === name 
          ? '0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)' 
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
        transform: currentPalette === name ? 'translateY(-2px)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: currentPalette === name 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'none',
        transition: 'background 0.2s ease-in-out'
      }} />
    </button>
  );

  return (
    <div className="grid-container">
      {/* First Section */}
      <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}>
        <Button 
          onClick={() => {
            handleButtonClick('pin');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.pin]}
          icon="pin"
        >
          Pin location
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '5 / 7', gridRow: '1 / 2' }}>
        <TextInput
          placeholder="Search places..."
          icon="map"
          baseColor={baseColors[1]}
        />
      </div>
      <div className="grid-item" style={{ gridColumn: '4 / 5', gridRow: '1 / 2' }}>
        <PaletteButton name="pastel" colors={colorPalettes.pastel} />
      </div>

      {/* Second Section */}
      <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '2 / 3' }}>
        <Button 
          onClick={() => {
            handleButtonClick('forecast');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.forecast]}
          icon="sun"
        >
          Go to forecast
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '4 / 6', gridRow: '2 / 3' }}>
        <TextInput
          placeholder="Enter city..."
          icon="person"
          baseColor={baseColors[0]}
        />
      </div>
      <div className="grid-item" style={{ gridColumn: '6 / 7', gridRow: '2 / 3' }}>
        <PaletteButton name="sunset" colors={colorPalettes.sunset} />
      </div>

      {/* Third Section */}
      <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '3 / 4' }}>
        <Button 
          onClick={() => {
            handleButtonClick('download');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.download]}
          icon="cloud"
        >
          Download now
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '5 / 6', gridRow: '3 / 4' }}>
        <TextInput
          placeholder="Password..."
          icon="lock"
          baseColor={baseColors[3]}
        />
      </div>
      <div className="grid-item" style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}>
        <PaletteButton name="jewel" colors={colorPalettes.jewel} />
      </div>

      {/* Fourth Section */}
      <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '4 / 5' }}>
        <Button 
          onClick={() => {
            handleButtonClick('explore');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.explore]}
          icon="map"
        >
          Explore cities
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '5 / 7', gridRow: '4 / 5' }}>
        <TextInput
          placeholder="Search files..."
          icon="folder"
          baseColor={baseColors[2]}
        />
      </div>
      <div className="grid-item" style={{ gridColumn: '4 / 5', gridRow: '4 / 5' }}>
        <PaletteButton name="berry" colors={colorPalettes.berry} />
      </div>

      {/* Fifth Section */}
      <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '5 / 6' }}>
        <Button 
          onClick={() => {
            handleButtonClick('darkMode');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.darkMode]}
          icon="moon"
        >
          Dark mode
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '5 / 6' }}>
        <TextInput
          placeholder="Enter email..."
          icon="person"
          baseColor={baseColors[4]}
        />
      </div>
      <div className="grid-item" style={{ gridColumn: '5 / 6', gridRow: '5 / 6' }}>
        <PaletteButton name="forest" colors={colorPalettes.forest} />
      </div>

      {/* Additional Elements */}
      <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '6 / 7' }}>
        <Button 
          onClick={() => {
            handleButtonClick('upload');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.upload]}
          icon="cloud"
        >
          Upload files
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '4 / 6', gridRow: '6 / 7' }}>
        <TextInput
          placeholder="Search tags..."
          icon="folder"
          baseColor={baseColors[1]}
        />
      </div>

      <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '7 / 8' }}>
        <Button 
          onClick={() => {
            handleButtonClick('lightMode');
            handleDownload();
          }}
          baseColor={baseColors[buttonColors.lightMode]}
          icon="sun"
        >
          Light mode
        </Button>
      </div>
      <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '7 / 8' }}>
        <TextInput
          placeholder="Enter username..."
          icon="person"
          baseColor={baseColors[3]}
        />
      </div>
    </div>
  )
}

export default App
