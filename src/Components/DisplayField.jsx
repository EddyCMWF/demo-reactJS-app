import { Container } from "react-bootstrap"
import { Col, Row } from "react-bootstrap";

export const DisplayField = (props) => {
    return (
        <Container className={props.cstyle}>
            <Row>
                <Col xs={2} sm={3}>
                    {props.label}
                </Col>
                <Col>
                    {props.value}
                </Col>
            </Row>
        </Container>
    )
}