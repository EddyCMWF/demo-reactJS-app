import { Container } from "react-bootstrap";

const Header = () => {
    return ( 
        <header>
            <Container className="p-1 mb-1 bg-light">
                <h1><strong>VAT Calculator</strong></h1>
            </Container>
        </header>
     );
}
 
export default Header;