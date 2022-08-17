import React from "react";
import { Card, Header, Body, HeaderText, Image } from "./styles";

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
  like?: boolean;
}

export default function CardComponent({ character }: Character | undefined): JSX.Element {
  return (
    <Card>
      <Header>
        <HeaderText>{ character.name }</HeaderText>
      </Header>
      <Body>
        <Image src={ character.image } alt={ character.name } />
      </Body>
    </Card>
  );
}