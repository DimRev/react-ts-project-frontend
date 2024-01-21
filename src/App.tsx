import Footer from './cmps/Footer'
import Header from './cmps/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'

import { store } from './store/store'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

function App() {
  return (
    <section className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </section>
  )
}

export default App
