import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./Doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <div className="bg-primary p-5 mb-5">
                <h2 className="bg-primary p-5 fs-1 fw-bold text-white">Doctors</h2>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mx-3 mt-5">
            {
                doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                ></Doctor>)
            }
            </Row>
        </div>
    );
};

export default Doctors;