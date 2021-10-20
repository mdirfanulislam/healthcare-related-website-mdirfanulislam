import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DepartDetail = (props) => {
    const {img, name, describe, describeMore} = props.departDetail;
    return (
            <Col>
            <Card className="bg-light p-3">
                <Card.Img height="350px" variant="top mb-4" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {describe} {describeMore}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default DepartDetail;