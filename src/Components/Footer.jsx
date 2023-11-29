import { Container, Row } from "react-bootstrap";

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <Row mt=3>
                    The value being passed is: {props.incValue}
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;