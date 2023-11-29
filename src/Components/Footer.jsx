import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer>
            <Container className="mt-1 pt-1 pb-0 mb-0">
                <Row>
                    <Link to='/sales'>View sales history</Link>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;