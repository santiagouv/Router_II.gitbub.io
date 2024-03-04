import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Pokemones = () => {

    const {id} = useParams()
    const [data, setData] = useState(
        {
            name:"",  //name
            hp:"",    //stats[0].base_stat
            attack:"", //stats[1].base_stat
            defense:"", //stats[2].base_stat
            specialAttack:"", //stats[3].base_stat
            specialDefense:"", //stats[4].base_stat
            speed:"", //stats[5].base_stat
            type:"",  //type.0.type.name
            img:""   //sprites.front_default
        }
    )

    useEffect(()=>{
        APIRequest()
    }, [])

    const APIRequest = async() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await fetch(URL)
        const responseJSON = await response.json()
        setData({
            name: responseJSON.name,
            hp: responseJSON.stats[0].base_stat,
            attack: responseJSON.stats[1].base_stat,
            defense: responseJSON.stats[2].base_stat,
            specialAttack: responseJSON.stats[3].base_stat,
            specialDefense: responseJSON.stats[4].base_stat,
            speed: responseJSON.stats[5].base_stat,
            type: responseJSON.types[0].type.name,
            img: responseJSON.sprites['other']["official-artwork"].front_default
        });
    }

  return (

    <Container style={{alignItems: 'center'}}>
      <Row>
        <Col></Col>
        <Col>
            <Card style={{ width: '18rem', alignItems: 'center' }}>
                <Card.Title>{id} - {data.name}</Card.Title>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                    <Card.Text>
                        HP: {data.hp}<br/>
                        Attack: {data.attack}<br/>
                        Special-Attack: {data.specialAttack}<br/>
                        Special-defense: {data.specialDefense}<br/>
                        Speed: {data.speed}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
   
  )
}

export default Pokemones