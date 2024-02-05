import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons'
import GameResults from '../GameResults'
import Button from '../Button'
import {
  GameContainer,
  TitleAndScoreContainer,
  Title,
  ScoreBox,
  ScoreText,
  Score,
  ButtonsContainer,
  PopupContainer,
  RulesImageContainer,
  CloseButton,
  RulesImage,
  RulesButton,
} from './styledComponents'

class GameView extends Component {
  state = {
    score: 0,
    result: '',
    yourChoiceImage: '',
    opponentChoiceImage: '',
    showResult: false,
  }

  playAgain = () => {
    this.setState({
      showResult: false,
    })
  }

  getGameView = () => {
    const {choicesList} = this.props

    return (
      <ButtonsContainer>
        {choicesList.map(eachObj => (
          <Button
            key={eachObj.id}
            buttonDetails={eachObj}
            generateGameResult={this.generateGameResult}
          />
        ))}
      </ButtonsContainer>
    )
  }

  generateGameResult = id => {
    const {choicesList} = this.props
    const yourChoiceObj = choicesList.find(eachObj => eachObj.id === id)
    const yourOptionImage = yourChoiceObj.imageUrl

    const opponentChoiceObj = choicesList[Math.floor(Math.random() * 3)]
    const opponentOptionImage = opponentChoiceObj.imageUrl
    const opponentOptionId = opponentChoiceObj.id

    if (id === 'ROCK' && opponentOptionId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === 'ROCK' && opponentOptionId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === 'SCISSORS' && opponentOptionId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === 'SCISSORS' && opponentOptionId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === 'PAPER' && opponentOptionId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === 'PAPER' && opponentOptionId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    } else if (id === opponentOptionId) {
      this.setState(prevState => ({
        score: prevState.score,
        result: 'IT IS DRAW',
        yourChoiceImage: yourOptionImage,
        opponentChoiceImage: opponentOptionImage,
        showResult: true,
      }))
    }
  }

  getGameResultView = () => {
    const {result, yourChoiceImage, opponentChoiceImage} = this.state

    return (
      <GameResults
        resultText={result}
        yourChoiceImage={yourChoiceImage}
        opponentChoiceImage={opponentChoiceImage}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {score, showResult} = this.state

    return (
      <GameContainer>
        <TitleAndScoreContainer>
          <Title>
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </Title>
          <ScoreBox>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreBox>
        </TitleAndScoreContainer>
        {showResult ? this.getGameResultView() : this.getGameView()}
        <PopupContainer>
          <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
            {close => (
              <RulesImageContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopupContainer>
      </GameContainer>
    )
  }
}

export default GameView
