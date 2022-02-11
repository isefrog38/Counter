import styled from "styled-components";

export const MainBlock = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border: 3px solid palevioletred;
    width: 70%;
    height: 40%;
    border-radius: 5px;
    padding: 5%;
`

export const Table = styled.div`
  width: 100%;
  height: 500%;
  background-color: palevioletred;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 3px solid palevioletred;
  padding-top: 20px;
`

export const Square = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 105%;
`

