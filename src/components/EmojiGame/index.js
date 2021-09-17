import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  renderEmojisList = () => {
    const {emojisList} = this.props

    return (
      <div className="emoji-container">
        <ul className="unOrder">
          {emojisList.map(eachItem => (
            <EmojiCard emojiDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <NavBar />
        {this.renderEmojisList()}
        <WinOrLossCard />
      </div>
    )
  }
}

export default EmojiGame
