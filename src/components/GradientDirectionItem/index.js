import {DirectionButton, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onClickDirection} = props
  const {value, displayText} = directionDetails

  const onClickButton = () => {
    onClickDirection(value)
  }

  return (
    <DirectionButton onClick={onClickButton} type="button">
      <DirectionItem>{displayText}</DirectionItem>
    </DirectionButton>
  )
}

export default GradientDirectionItem
