import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <button
        className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
        onClick={() => {
          setIsMenuOpen((prev) => !prev)
        }}>
        x
      </button>
      <section className={`app-header ${isMenuOpen ? 'open' : ''}`}>
        <div className="header-logo">Logo</div>
        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="header-login">
          <button>Login</button>
        </div>
      </section>
    </>
  )
}

export default Header
