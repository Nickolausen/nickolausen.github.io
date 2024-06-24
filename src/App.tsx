import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import InitialScreen from './pages/InitialScreen'
import Education from './pages/Education'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='px-10'>
        <InitialScreen></InitialScreen>
        <Education></Education>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App