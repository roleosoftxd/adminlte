import react from 'react'
import Headers from './components/Headers.jsx'
import SideNav from './components/SideNav.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className='wrapper'>
      <Headers />
      <SideNav />
      <Home />
      <Footer /> 
    </div>
  )
}

export default App
