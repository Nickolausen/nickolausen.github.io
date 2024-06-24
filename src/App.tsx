import './App.css'
import Navbar from './components/Navbar'

import InitialScreen from './pages/InitialScreen'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='px-10'>
        <InitialScreen></InitialScreen>
        <Education></Education>
        <Projects></Projects>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App