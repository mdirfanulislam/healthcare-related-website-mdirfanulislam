import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Departments.css';

const Departments = (props) => {
    const {img, name, describe} = props.department;
    return (
            <Col>
            <Card className="bg-light p-3">
                <Card.Img height="350px" variant="top mb-4" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {describe}
                </Card.Text>
                <Button onClick={() => props.handleAddToDetail(props.department)} className="btn-depart mt-3 px-5 text-white"> <Link className="depart-link" to='/departDetails'>{name} Details</Link> </Button>
                </Card.Body>
            </Card>
            </Col>
    );
};

export default Departments;