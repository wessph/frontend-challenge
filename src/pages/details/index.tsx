import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import CharactersApi from "../../services/characters";

import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Row, Col } from "react-bootstrap";
import {
  CardGame,
  CardContent,
  CardContentHeader,
  CardContentImage,
  CardContentBody,
  CardContentBodyText,
  CardContentSpan,
  ButtonBack
} from "./styles";

import { BsArrowReturnLeft } from 'react-icons/bs';

export function Details(): JSX.Element {
  const [character, setCharacter] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const { id }: any = useParams();

  const backToHome = () => {
    navigate("/");
  }

  const getCharacter = async (): Promise<void> => {
    CharactersApi.getOne(id)
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Container>
      <ButtonBack onClick={backToHome}><BsArrowReturnLeft /> Página inicial </ButtonBack>
      {loading ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      ) : (
        <Row>
          <Col key={character.id}>
            <CardGame>
              <CardContent>
                <CardContentHeader> {character.name}</CardContentHeader>
                <CardContentImage src={character.image} />
                <CardContentBody>
                  <CardContentBodyText>Status: <CardContentSpan>{character.status}</CardContentSpan> </CardContentBodyText>
                  <CardContentBodyText>Origin: <CardContentSpan>{character.origin.name}</CardContentSpan> </CardContentBodyText>
                  <CardContentBodyText>Species: <CardContentSpan>{character.species}</CardContentSpan> </CardContentBodyText>
                  <CardContentBodyText>Gender: <CardContentSpan>{character.gender}</CardContentSpan> </CardContentBodyText>
                </CardContentBody>
              </CardContent>
            </CardGame>
          </Col>
        </Row>
      )}
    </Container>
  );
}
