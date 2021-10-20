import React from 'react';
import { Row } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <div>
            <Row xs={1}>
            <div className="bg-info p-5 mb-5">
                <h2 className="bg-info p-5 fs-1 fw-bold text-white">About Us</h2>
            </div>
            <div className="m-5 text-start w-75">
                <h2 className="mb-4">Our Mission</h2>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
                <p className="mb-5"> Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.</p>
                <h2 className="mt-5 mb-4">Our Vision</h2>
                <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.</p>
            </div> 

            <Row xs={1} md={2} className="my-5">
            <div className="mt-5 mb-">
                <img src={'https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg'} alt="" />
                
            </div>
            <div>
                <h6 className="fw-bold text-info mt-4 pt-5">More About Our Medicare</h6>
                <h2 className="fs-1 fw-bold mb-5">Want to know more</h2> 
                <p>There arge many variations ohf passages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                <br />
                <p>Creative ideas base</p>
                <p>Assages of sorem gpsum ilable</p>
                <p>Have suffered alteration in so</p>
                <p>Randomised words whi</p>
            </div>   
            </Row>
            </Row>
        </div>
    );
};

export default AboutMe;