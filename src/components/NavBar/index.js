import './index.css'

const NavBar = () => (
  <nav className="navBar">
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      <h1 className="heading">Emoji Game</h1>
    </div>
    <div className="scores-container">
      <h1 className="score">Score:0</h1>
      <h1 className="top">Top Score:0</h1>
    </div>
  </nav>
)

export default NavBar
