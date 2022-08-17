import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`


export const Header = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px 0 10px 0;
  background-color: red;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const HeaderText = styled.h2 `
  font-weight: 600;
`

export const Body = styled.div`
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

// export const