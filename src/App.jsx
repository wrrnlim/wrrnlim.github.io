import './App.css'

const styles = {
  container: {
      backgroundImage: `url("../images/bg.png")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

function App() {
  return (
    <div className="App" style={styles}>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
