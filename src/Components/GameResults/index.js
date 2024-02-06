import {
  ResultContainer,
  Heading,
  OptionImage,
  OptionsComparingContainer,
  OptionContainer,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResults = props => {
  const {resultText, yourChoiceImage, opponentChoiceImage, playAgain} = props

  const onClickingPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultContainer>
      <OptionsComparingContainer>
        <OptionContainer>
          <Heading>YOU</Heading>
          <OptionImage src={yourChoiceImage} alt="your choice" />
        </OptionContainer>
        <OptionContainer>
          <Heading>OPPONENT</Heading>
          <OptionImage src={opponentChoiceImage} alt="opponent choice" />
        </OptionContainer>
      </OptionsComparingContainer>
      <ResultText>{resultText}</ResultText>
      <PlayAgainButton type="button" onClick={onClickingPlayAgain}>
        PLAY AGAIN
      </PlayAgainButton>
    </ResultContainer>
  )
}

export default GameResults
