import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bg_img from "../Images/bg.svg";
import { Link } from "react-router-dom"

const Services = () => {
    const Card_item = [
        {
            id: 0,
            img: bg_img,
            name: "Card Title 1",
            text: "1 Some quick example text to build on the card title and make up the bulk of the card content."
        },
        {
            id: 1,
            img: bg_img,
            name: "Card Title 2",
            text: "2 Some quick example text to build on the card title and make up the bulk of the card content."
        },
        {
            id: 2,
            img: bg_img,
            name: "Card Title 3",
            text: "3 Some quick example text to build on the card title and make up the bulk of the card content."
        }
    ];
    // console.log(Card_item);

    return (
        <Container className='py-5'>
            <Row>
                <Col md={12} className="mb-5 text-center">
                    <h1>Our Services</h1>
                </Col>
                {Card_item.map((Services) => (
                    <Col xs={12} md={4} className='mb-3' key={Services.id}>
                        <Card>
                            <Card.Img variant="top" src={Services.img} />
                            <Card.Body className='text-center'>
                                <Card.Title>{Services.name}</Card.Title>
                                <Card.Text>
                                    {Services.text}
                                </Card.Text>
                                <Link to="/contact" className="btn btn-primary">Go somewhere</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Services;