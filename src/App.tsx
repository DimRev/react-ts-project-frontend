import Footer from './cmps/Footer'
import Header from './cmps/Header'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'

function App() {
  return (
    <section className='app'>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </section>
  )
}

export default App
