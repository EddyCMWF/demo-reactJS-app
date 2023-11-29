import { Col, Container, Row } from "react-bootstrap";
export const NotFound = () => {
    return (
        <Container className="p-5 mb-4 bg-light rounded-3">
            <Row className="p-1 mb-1 bg-light rounded-3">
                <Col>
                    <h1>Page Not Found</h1>
                </Col>
            </Row>
        </Container>
    )
}