import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookSquare, faGoogle, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    library.add(fab, faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faGoogle, faIdCard)

    return (
        <div className=" bg-dark mt-5 pt-5">
            <Row xs={1} md={2}>
            <div>
                <h2 className="text-white mb-5">Stay Updated</h2>
                <InputGroup className="mb-3 ms-5 w-50">
                <FormControl
                    placeholder="Email Eddress"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className="fw-bold bg-primary border border-1 rounded-1 text-white py-3 w-10"> Subscribe Now</Button>
                </InputGroup>
                <Row xs={2} md={2} className="">
                <div className="text-white">
                <h5 className="my-4 pb-4">About Us</h5>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Center</p>
                <p>Become An Instructor</p>
                </div>
                <div className="text-white">
                <h5 className="my-4 pb-4">Building</h5>
                <p>Our Plans</p>
                <p>Free Trial</p>
                <p>Business Solutions</p>
                <p>Government Solutions</p>
                </div>
                </Row>
            </div>
            <div>
                <h2 className="text-white mb-5">Let's Get Social</h2>
                <Row xs={5} md={5} className="ms- text-white">
                <h1><FontAwesomeIcon icon={faFacebookSquare} /></h1>
                <h1><FontAwesomeIcon icon={faTwitterSquare} /></h1>
                <h1><FontAwesomeIcon icon={faGoogle} /></h1>
                <h1><FontAwesomeIcon icon={faInstagramSquare} /></h1>
                <h1><FontAwesomeIcon icon={faYoutubeSquare} /></h1>
                </Row>
                <Row xs={2} md={2} className="">
                
                <div className="text-white">
                <h5 className="my-5">Support</h5>
                <p>Contact Us</p>
                <p>System Requirements</p>
                <p>Register Activation Key</p>
                <p>Site Feedback</p>
                </div>
                </Row>
            </div>
        </Row>
                <div className="justify-content-center bg-light fw-bold text-dark p-3 mt-2 mx-5">
                    <p>Copyright ©2021 All rights reserved | This template is made with <FontAwesomeIcon icon={faIdCard} /> Md Irfan
                    </p>
                </div>
        </div>
    );
};

export default Footer;