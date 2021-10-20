import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Bannar from '../Bannar/Bannar';
import Departments from '../Departments/Departments';
import { addToDb, getStoredDetail } from '../../FakeDb/FakeDb';

const Home = () => {
    const [departments, setDepartments] = useState([]);
    const [storeDetail, setStoreDetail] = useState([]);

    useEffect(() => {
        fetch('./Departments.json')
        .then(res => res.json())
        .then(data => setDepartments(data));
    },[])

    useEffect(() => {
        if (departments.length) {
            const savedDetail = getStoredDetail();
            const storeDetail = [];
            for (const id in savedDetail) {
                const addedDepartment = departments.find(product => product.id === id);
                if (addedDepartment) {
                    const detail = savedDetail[id];
                    addedDepartment.detail = detail;
                    storeDetail.push(addedDepartment);
                }
            }
            setStoreDetail(storeDetail);
        }
    }, [departments])

    const handleAddToDetail = (department) => {
        const newCart = [...storeDetail, department];
        setDepartments(newCart);
        addToDb(department.id)
    }

    return (
        <div>
            <Bannar></Bannar>
            <h2 className="mt-5 pt-5 text-primary">Medicare Departments</h2>
            <Row xs={1} md={2} lg={3} className="g-4 mx-3 mt-5">
                {
                    departments.map(department => <Departments
                        key={department.id}
                        department={department}
                        handleAddToDetail={handleAddToDetail}
                    >   
                    </Departments>)
                }
            </Row>
        </div>
    );
};

export default Home;