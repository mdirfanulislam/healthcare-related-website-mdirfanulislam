import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DepartDetail from '../DepartDetail/DepartDetail';

const DepartDetails = () => {
    const [departDetails, setDepartDetails] = useState([]);

    useEffect(() => {
        fetch('./DepartDetail.json')
        .then(res => res.json())
        .then(data => setDepartDetails(data));
    },[])

    return (
        <div>
            <h2 className="mt-5 text-primary">Medicare Departments Details</h2>
            <Row xs={1} md={2} lg={3} className="g-4 mx-3 mt-5">
                {
                    departDetails.map(departDetail => <DepartDetail
                        key={departDetail.id}
                        departDetail={departDetail}
                    >   
                    </DepartDetail>)
                }
            </Row>
        </div>
    );
};

export default DepartDetails;