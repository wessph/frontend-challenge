import styled from "styled-components";

export const ButtonBack = styled.button`
  background-color: #8CC152;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 20px;

`;

export const CardGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

export const CardContent = styled.div`
  width: 60vh;
  padding: 20px;
  border-radius: 10px;
  background-color: #8CC152;
  box-shadow: #ab20fd 0px 5px 15px;
`;

export const CardContentHeader = styled.h1`
  font-weight: 600;
  font-family: "Bungee", cursive;
  text-shadow: 2px 3px black;
  color: #fff;
  text-align: center;
`;
export const CardContentImage = styled.img`
  width: 100%;
  border-radius: 5px;
  border: 2px solid #F6BB42;
`;
export const CardContentBody = styled.div`
  display: block;
  margin-top: 10px;
  padding: 10px;
  background-color: #FFCE56;
  border: 2px solid #F6BB42;
  border-radius: 5px;
`;

export const CardContentBodyText = styled.p`
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
  color: #2c2020d1;
  font-size: 1rem;
  font-weight: 700;
`

export const CardContentSpan = styled.span`
  float: right;
  font-weight: 400;
`
