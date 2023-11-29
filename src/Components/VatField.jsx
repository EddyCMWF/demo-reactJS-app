import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

export const VATField = (props) =>
{
    return(
        <Container className="mb-2">
            <Row>
                <Col xs={2} sm={3}>
                    VAT Rate: 
                </Col>
                <Col xs="auto">
                    <select onChange={(event)=>{
                            props.vatRateChanged(+event.target.value)
                        }}> 
                        <option value="20">20%</option> 
                        <option value="15">15%</option> 
                        <option value="12.5">12.5%</option> 
                        <option value="0">Exempt</option> 
                    </select>
                </Col>
            </Row>
        </Container>
    );
}