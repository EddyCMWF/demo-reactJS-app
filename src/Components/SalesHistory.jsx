import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import { SalesHeader } from "./SalesHeader";
import salesDataHistory from '../data/sales.json'
import SaleItem from "./SaleItem.model";
import Sale from "./Sale";
import Home from './Home';
import { Link } from 'react-router-dom';

export const SalesHistory = (props) => {
    const sales = salesDataHistory.map(currentSaleItem => {
        const saleItem = new SaleItem(
            // This keys here map to the keys in the json file:
            currentSaleItem.salePrice,
            currentSaleItem.totalPrice,
            currentSaleItem.vatToPay,
            currentSaleItem.vatRate,
            currentSaleItem.id
        );
        return <Sale saleItem={saleItem} key={saleItem._id} />
    });
    return (
        <>
            <Home/>
            <Container className="p-5 mb-4 bg-light rounded-5">
                <Row className="p-1 mb-1 bg-light rounded-5">
                    <SalesHeader/>
                </Row>
                <Row className="p-1 mb-1 bg-light rounded-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><Link to='/'>Sale ID</Link></th>
                            <th>Sale Price</th>
                            <th>Total Price</th>
                            <th>VAT To Pay</th>
                            <th>VAT Rate</th>
                        </tr>
                    </thead>
                    <tbody>{sales}</tbody>
                </table>
                </Row>
            </Container>
        </>
    );
}