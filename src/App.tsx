import './App.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'

function App() {
  return (
    <div className="App">
      <Navbar show={false}/>
      <Home />
      <About />
      <Project />
      <Footer />
    </div>
  )
}

export default App
