import './App.css'
import Button from './components/Button'
import TextInput from './components/TextInput'

function App() {
  const handleDownload = () => {
    console.log('Download clicked!')
  }

  return (
    <>
      <div className="grid-container">
        {/* First Section */}
        <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '1 / 2' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#CBEFF1"
            icon="pin"
          >
            Pin location
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '1 / 2' }}>
          <TextInput
            placeholder="Search places..."
            icon="map"
            baseColor="#FFD6E8"
          />
        </div>

        {/* Second Section */}
        <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '2 / 3' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#FFD6E8"
            icon="sun"
          >
            Go to forecast
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '4 / 6', gridRow: '2 / 3' }}>
          <TextInput
            placeholder="Enter city..."
            icon="person"
            baseColor="#CBEFF1"
          />
        </div>

        {/* Third Section */}
        <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '3 / 4' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#C9E4DE"
            icon="cloud"
          >
            Download now
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '3 / 4' }}>
          <TextInput
            type="password"
            placeholder="Password..."
            icon="lock"
            baseColor="#FFEFA1"
          />
        </div>

        {/* Fourth Section */}
        <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '4 / 5' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#FFEFA1"
            icon="map"
          >
            Explore cities
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '4 / 6', gridRow: '4 / 5' }}>
          <TextInput
            placeholder="Search files..."
            icon="folder"
            baseColor="#C9E4DE"
          />
        </div>

        {/* Fifth Section */}
        <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '5 / 6' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#FFC09F"
            icon="moon"
          >
            Dark Mode
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '5 / 6' }}>
          <TextInput
            placeholder="Enter email..."
            icon="person"
            baseColor="#FFC09F"
          />
        </div>

        {/* Additional Elements */}
        <div className="grid-item" style={{ gridColumn: '2 / 4', gridRow: '6 / 7' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#CBEFF1"
            icon="cloud"
          >
            Upload Files
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '4 / 6', gridRow: '6 / 7' }}>
          <TextInput
            placeholder="Search tags..."
            icon="folder"
            baseColor="#FFD6E8"
          />
        </div>

        <div className="grid-item" style={{ gridColumn: '1 / 3', gridRow: '7 / 8' }}>
          <Button 
            onClick={handleDownload}
            baseColor="#C9E4DE"
            icon="sun"
          >
            Light Mode
          </Button>
        </div>
        <div className="grid-item" style={{ gridColumn: '3 / 5', gridRow: '7 / 8' }}>
          <TextInput
            placeholder="Enter username..."
            icon="person"
            baseColor="#FFEFA1"
          />
        </div>
      </div>
    </>
  )
}

export default App
