import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Header, Body, HeaderText, Image } from "./styles";

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
  like?: boolean;
}

export default function CardComponent({ character }: Character[] | undefined): JSX.Element {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/${character?.id}`);
  }

  return (
    <Card onClick={handleClick}>
      <Header>
        <HeaderText>{ character.name }</HeaderText>
      </Header>
      <Body>
        <Image src={ character.image } alt={ character.name } />
      </Body>
    </Card>
  );
}