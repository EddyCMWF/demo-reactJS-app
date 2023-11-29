import { Container, Row } from "react-bootstrap";

const Footer = (props) => {
    return (
        <footer>
            <Container className="mt-3 mb-0">
                <Row>
                    The value being passed is: {props.incValue}
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;