import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

const DataEntryField = (props) => {
    return (
        <Container>
            <Row>
                <Col xs={2} sm={3}>
                    {props.label.concat(': ')}
                </Col>
                <Col md="auto">
                    <input
                        type="number" id="lname" name="lname"
                        value={props.value}
                        onChange={(event)=>{props.handleValueChanged(+event.target.value)}}
                    input/>
                </Col>
            </Row>
        </Container>
    );
}
 
export default DataEntryField;