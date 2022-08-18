import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
  border: 3px solid rgb(171, 32, 253);
  border-radius: 10px;
  box-shadow: #ab20fd 0px 5px 15px;
`


export const Header = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px 0 10px 0;
  background-color: #8CC152;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 10px 10px 0 0;
`
export const HeaderText = styled.h4`
  font-weight: 600;
  font-family: 'Bungee', cursive;
  text-shadow: 2px 3px black;
  color: #fff;
`

export const Body = styled.div`
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0 0 6px 6px;
`

// export const