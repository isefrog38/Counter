import styled from "styled-components";

type MainBlockType = {
    wp?: number
}

export const MainBlock = styled.div<MainBlockType>`
  position: relative;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #ffffff;
  max-width: 60%;
  width: 60%;
  height: auto;
  border-radius: 20px;
  padding: 5%;
  z-index: 3;
  
  &:hover {
    border: 3px solid #ffffff;
  }
`

export const Table = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: transparent;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 3;
`

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px dashed #ffffff;
  padding-top: 20px;
`

export const Square = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  height: 105%;
  margin: auto;
`


