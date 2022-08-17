import { useEffect, useState } from "react";

import CharactersApi from "../services/characters";

import Card from "../components/card";
import { Container, Row, Col } from "react-bootstrap";

export function Home(): JSX.Element {
  const [characters, setCharacters] = useState<any[]>([]);
  const [paginatio, setPagination] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    CharactersApi.getAll()
      .then((data) => {
        setCharacters(data.results);
        setPagination(data.info);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <Row>
        {characters.map((character) => (
          <Col md={3}>
            <Card key={character.id} character={character}></Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
