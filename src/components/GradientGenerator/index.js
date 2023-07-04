import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Description,
  DirectionList,
  ColorInput,
  GenerateButton,
  InputContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    activeGradientValues: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  selectDirection = value => {
    this.setState({direction: value})
  }

  onClickGenerate = () => {
    const {color1, color2, direction} = this.state
    this.setState({
      activeGradientValues: `to ${direction}, ${color1}, ${color2}`,
    })
  }

  render() {
    const {color1, color2, activeGradientValues} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientValue={activeGradientValues}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Description>Choose Direction</Description>
        <DirectionList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              onClickDirection={this.selectDirection}
              key={eachItem.directionId}
              directionDetails={eachItem}
            />
          ))}
        </DirectionList>
        <Description>Pick the Colors</Description>
        <InputContainer width>
          <InputContainer direction>
            <Description>{color1}</Description>
            <ColorInput
              value={color1}
              onChange={this.onChangeColor1}
              type="color"
            />
          </InputContainer>
          <InputContainer direction>
            <Description>{color1}</Description>
            <ColorInput
              onChange={this.onChangeColor2}
              value={color2}
              type="color"
            />
          </InputContainer>
        </InputContainer>
        <GenerateButton onClick={this.onClickGenerate} type="button">
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
