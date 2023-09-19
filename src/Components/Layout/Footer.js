import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

    return (
        <div className="bg-dark py-2">
            <Container>
                <Row>
                    <Col md={12} className="text-center text-light">
                        © {(new Date().getFullYear())} CodeClouds — All rights reserved
                    </Col>
                </Row>
            </Container>
        </div>
    );

};

export default Footer;