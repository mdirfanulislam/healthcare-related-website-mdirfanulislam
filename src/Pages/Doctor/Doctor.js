import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {img, name, title} = props.doctor;
    return (
        <Col>
            <Card className="bg-info">
                <Card.Img height="350px" variant="top mb-4" src={img} />
                <Card.Body className="text-white">
                <Card.Text>
                    {title}
                </Card.Text>
                <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default Doctor;