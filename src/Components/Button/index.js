import {ButtonElement} from './styledComponents'

const Button = props => {
  const {buttonDetails, generateGameResult} = props
  const {id, imageUrl} = buttonDetails

  const onClickingButton = () => {
    generateGameResult(id)
  }

  return (
    <ButtonElement type="button" onClick={onClickingButton}>
      {imageUrl}
    </ButtonElement>
  )
}

export default Button
