import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const TitleAndScoreContainer = styled.div`
  border: solid 1px #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: 75%;
  height: 20vh;
  border-radius: 10px;
`
export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  width: 20%;
`
export const ScoreBox = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 40px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
`

export const ScoreText = styled.p`
  font-weight: bold;
  font-size: x-large;
  margin: 0px;
`

export const Score = styled.h1`
  font-family: 'Roboto';
  font-size: xx-large;
  margin: 0px;
`

export const ButtonsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  border-radius: 7px;
  height: 35px;
  padding: 5px;
  color: #223a5f;
  font-family: 'Bree Serif';
`

export const CloseButton = styled.button`
  border-style: none;
  padding: 5px;
  align-self: flex-end;
`
export const PopupContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`

export const RulesImageContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const RulesImage = styled.img`
  width: 70%;
`
