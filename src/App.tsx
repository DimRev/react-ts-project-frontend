import Footer from './cmps/Footer'
import Header from './cmps/Header'
import Home from './pages/Home'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Store from './pages/Store'
import About from './pages/About'

function App() {
  return (
    <section className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </section>
  )
}

export default App
