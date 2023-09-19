import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Team = () => {
    const [users, setUsers] = useState([])
    const fetchUserData = () => {
        fetch("https://reqres.in/api/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const userData = users?.data;
    // console.log(userData?.length);

    return (
        <Container className="py-4">
            {userData?.length > 0 && (
                <Row className="justify-content-center">
                    <Col md={12} className="mb-5 text-center">
                        <h1>Our Team</h1>
                    </Col>
                    {userData?.map(user => (
                        <Col key={user.id} xs={6} md={3} className="mb-5">
                            <Card className="p-3">
                                <Image src={user.avatar} alt="" roundedCircle className="d-block m-auto mb-3 " width="70%"/>
                                <div className="text-center">
                                    <h4>{user?.first_name} {user?.last_name}</h4>
                                    <a href={`mailto:${user?.email}`}>{user?.email}</a>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );

}

export default Team;