import { useEffect, useState } from "react";

import CharactersApi from "../../services/characters";

import Card from "../../components/card";
import { Header } from "./styles";
import { Container, Row, Col } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import LinearProgress from "@mui/material/LinearProgress";

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { 
    name: string; 
    url: string 
  };
  location?: {
    name: string;
    url: string;
  };
  image: string;
  episode?: string[];
  url: string;
  created: string;
}

export function Home(): JSX.Element {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<any>({
    count: 0,
    next: "",
    prev: null,
    pages: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getAll = async (): Promise<void> => {
    CharactersApi.getAll(page)
      .then((data) => {
        setCharacters(data.results);
        setPagination(data.info);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAll();
  }, [page]);

  return (
    <Container>
      <Header>
        <Pagination
          page={page}
          count={pagination.pages}
          onChange={handleChange}
          color="secondary"
        />
      </Header>

      {loading ? (
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <LinearProgress color="secondary" />
        </Stack>
      ) : (
        <Row>
          {characters.map((character: Character) => (
            <Col key={character.id} md={3}>
              <Card character={character}></Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
