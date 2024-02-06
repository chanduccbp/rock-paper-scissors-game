import {ButtonElement, ButtonImage, ListItem} from './styledComponents'

const Button = props => {
  const {buttonDetails, generateGameResult, lowerCaseId} = props
  const {id, imageUrl} = buttonDetails

  const onClickingButton = () => {
    generateGameResult(id)
  }

  return (
    <ListItem>
      <ButtonElement
        type="button"
        onClick={onClickingButton}
        data-testid={`${lowerCaseId}Button`}
      >
        <ButtonImage src={imageUrl} alt={id} />
      </ButtonElement>
    </ListItem>
  )
}

export default Button
