import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const Heading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: white;
  font-weight: 500;
`

export const Description = styled.p`
  color: white;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 300;
`

export const DirectionList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  list-style-type: none;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  width: ${props => props.width && '12vw'};
  border-width: 0px;
`

export const ColorInput = styled.input`
  height: 30px;
  width: 60px;
  border-width: 0px;
`

export const GenerateButton = styled.button`
  height: 35px;
  width: 80px;
  color: black;
  padding: 10px;
  border-radius: 5px;
  padding: 5px;
  font-family: 'Roboto';
  border-width: 0px;
  margin-top: 30px;
  background-color: #00c9b7;
`
