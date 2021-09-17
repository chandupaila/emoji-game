import './index.css'

const WinOrLossCard = () => (
  <div className="winOrLossCard">
    <div className="winCard">
      <div className="win-matter">
        <h1 className="youWon">You Won</h1>
        <h1 className="scores">Best Score</h1>
        <h1 className="number">12/12</h1>
        <div className="center">
          <button className="play" type="button">
            Play Again
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="won game"
        className="happy"
      />
    </div>

    <div className="winCard">
      <div className="win-matter">
        <h1 className="youWon">You loss</h1>
        <h1 className="score">Score</h1>
        <h1 className="number">12/12</h1>
        <div className="center">
          <button className="play" type="button">
            Play Again
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="won game"
        className="happy"
      />
    </div>
  </div>
)

export default WinOrLossCard
