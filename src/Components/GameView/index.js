import {Component} from 'react'
import GameResults from '../GameResults'
import Button from '../Button'

class GameView extends Component {
  state = {score: 0, result: '', yourChoiceImage: '', oppositionChoiceImage: ''}

  getGameView = () => {
    const {choicesList} = this.props
  }

  generateGameResult = id => {}

  getGameResultView = () => {}

  render() {}
}

export default GameView
