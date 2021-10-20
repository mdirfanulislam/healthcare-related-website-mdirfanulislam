import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/UseAuth';
import './Navbar.css';

const Navbars = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar bg="light" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand className="text-white bg-light" to="/home">
                    <img src="data:image/webp;base64,UklGRnAFAABXRUJQVlA4TGMFAAAvjMAJEO8HK5JkW1F2X3SgCpHY23/u6X2JcNA2kiR5qvc+NMcfzAE4CvvUCgSSXPZnHHZt28aefb8/tm3zKVWkjNSQsjLylkJs47N9fRN4fzYoISHh4RMNQjgJwCQIvvGIX2SoVwT9IBjE3soCg3k89ScoNFrkiFZABxZGcIt/xKcmQFYBvGvzkQB8fHX8JYAe2ChWgMJrIsYV0pXE9PUAECTwcZcAPlaAg8uEh6gDDWSgAw10IANYbiSgUB0S4+gCwTNsCLyjPheNHvioT7m79OMQBCM4zviCc+9wCtAIQc/FxvV9sHCGXmw2gAQpAsQZeyDYBOkYapyj/+vv5Pm1iUFsoQuLmMAEukAaDBQqAwk0kEACDWRBArAS2oIsgIQGhQcKBQ0JCQUFgRQCHBoKGgYMGgYGGgYKDC0EBFokEFAw4EghYK9e8G8BKjB8uQFs1bsC6G59GMR+FiTwOQABfleAQgS2WjkFGEyseuDvAvTAR51hJ4Ybj2Dd5NhuLGDgeuJu34jP6edzuLhP/avT169ujP/HBMb/gR72/6Yt5TfKnsm2m2zbtl0z2U22XTP55jqZk23btmtzfdfaGJ31W7+N86z/I/oPwW0jRxLr8s0MNHH3Df2HTDPXnMsus87aRxxz/EGn7Efi/Pvr72+98bctuPXpB8iPmUgyYtiBe28hBH31y8cfvf0mc8uDnQ75MTNNJ9vngK2cnq9/+lzwVMcbNMOCFXbfmdV89+MXkvs8QjTv7EOXXHOtI4864eCuXXdgLed/I+owvs2Jw61tbcJpP3jv6EOGWdvbhjO/9dSkk02x6GKrrLjq+ocdO0Jytq/6iRuSnOurATWdJ/jLL4Mae/0Vr0zS2Gt/3thDxi6ndZuhMw9u7NXOo93Ph6n9AYCQKASSNmMXaYGdZypr4ySO04I3lG5DxeiuiEgBaPPH6Rdqxd19lbW5AqB4Q2qPvamxQ6onaOoF2vB8jdoIAHJ2RYLtZ20mDDNqdeZefPmmHrmO6lAAYnY4JCZzN2uMThnpcjFGCNBuiw3kLZl0GJdaY4MNN9p4k00323zrnWzHGRdedPEll152+RVXjhx1zfV3Up2Jx7j7jsQJyJV7llgT+3MExa6igjUFRCZFCiAjA9UN4XdXxCN7OHFhywO7dMgVQEwpoNmn4YvY1RVrgkmAQtvGEgBvgbJZCjA5EPZSya5RorRwsONcAoEGMMb9cwAo0ux42aNiC0othEahbQQSVqF7iVKwQ0wR6y8sPQaI2OF3FVbOSmwmuSdLs7DCKJQKiLVWvVYCSIJYBIVUhbZAV+AlZkxBpDNtUgkRf+oolabKmmeJlVdavf4iL7zcAHu4I3MEwvmtIxLP/RiFpIKWtzDlfE2fb49de1dtIdhd4XxppBSa2J+p8otk8jZehp64vS52h8i6LZQV9X5xmkr2EqlrUOxc6RkHt/Ka+PgdNUR2pxJAuzS/VnK+Wukq3dWQ26YISCmvwLojrWPQxEPaeYF+tvpTK3uZ54j5qij4xcKfMjGA3GakPMpITYETgDDP4LyR0E7KGBrYdepyzd1zc+Un+I4jd3bBeZQBqXaOMZuEF2ga4zRpu8XSHpkxvMwQezXgD+5+XbMOXaH5W5fnqJXRWW54gckzMrpmkzZafqcndGpy0NLrNjaa/BiO1mvsIb+sJtiupo6vthH98c9VI0ddzcZXO0p+e6diZ3y0xy625hzrkw/JS7OJtmQ1Z1mfffDue++/+FJf321+mUOy526s5vTvKxYZfYNH5ifBXvs7ORdUrXbvTd6YdhbX8JP3FXr+/7JiQ0+SH9N/4amIOfy4Q0+Sg/77+VPR/eTFEAA=" alt="" />
                </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="text-dark fw-bold link" to="/home">Home</Link>
                        <Link className="text-dark fw-bold link" to="/aboutUs">About Us</Link>
                        <Link className="text-dark fw-bold link" to="/doctors">Doctors</Link>

                        { user?.email ?
                        <button className="btn-logOut" onClick={logOut}>Log Out</button> :
                        <Link className="text-dark fw-bold link" to="/login">Login</Link> 
                        }
                    </Nav>
            </Container>
      </Navbar>
    );
};

export default Navbars;