import { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [id, setId] = useState("1") //1 por default

    const navegar = useNavigate()

    const handleIdChange = (event) => {
        setId(event.target.value);
    };
    
    const handlePokemonSearch = () => {
        if (id) {
            navegar(`/pokemon/${id}`);
        } else {
            alert("ID Pokemon invalido = "+id);
            console.log("ID Pokemon invalido = "+id)

        }
    };

  return (
    <Container className="pt-5">
        <h1>Selecciona un Pokemon</h1>
        <Form>

            <Form.Group className="mb-3">
                <Form.Label column sm="2">Pokemon</Form.Label>
                <Col sm="10">
                    <Form.Select aria-label="Default select example" value={id} onChange={handleIdChange} >
                        <option value={1}>Bulbasaur</option>
                        <option value={2}>Ivysaur</option>
                        <option value={3}>Venusaur</option>

                        <option value={4}>Charmander</option>
                        <option value={5}>Charmeleon</option>
                        <option value={6}>Charizard</option>
                        
                        <option value={7}>Squirtle</option>
                        <option value={8}>Wartortle</option>
                        <option value={9}>Blastoise</option>

                        <option value={10}>Caterpie</option>
                        <option value={11}>Metapod</option>
                        <option value={12}>Butterfree</option>
                    </Form.Select>
                </Col>
            </Form.Group>
        </Form>
        <Button variant="dark" onClick={handlePokemonSearch}>Ver Detalles</Button>
    </Container>
    
  )
}

export default Home