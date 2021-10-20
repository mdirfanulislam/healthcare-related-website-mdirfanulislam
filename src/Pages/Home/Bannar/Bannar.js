import { Carousel } from 'react-bootstrap';
import './Bannar.css';

const Bannar = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://i.ibb.co/Bw2rd9B/Two-dentists-doing-their-work-in-dentist-s-clinic.jpg"
                    alt=""
                    />
                    <Carousel.Caption className="text-dark">
                    <h3>Bringing The Future Of Healthcare</h3>
                    <p>Deep created replenish herb without night fruit day earth evening Called his green were they're fruitful to over Sea bearing sixth Earth face.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>                    
                    <img
                    className="img d-block w-100"
                    src="https://i.ibb.co/qCFksV6/Smiling-doctor-helping-of-senior-woman.jpg"
                    alt=""
                    />
                    <Carousel.Caption className="text-dark">
                    <h3>We Care for Your Health Every Moment</h3>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may see some for as low as each.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img d-block w-100"
                    src="https://i.ibb.co/wpNzDJC/Successful-medical-team.jpg"
                    alt=""
                    />
                    <Carousel.Caption className="text-dark">
                    <h3>Making Health Care Better Together</h3>
                    <p>Also you dry creeping beast multiply fourth abundantly our itsel signs bring our.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;