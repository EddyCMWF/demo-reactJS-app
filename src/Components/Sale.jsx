import React from 'react';
import PropTypes from 'prop-types';
import SaleItem from './SaleItem.model';
import { Link } from 'react-router-dom';

const Sale = ({ saleItem }) => {
    const onClickHandler = (event)=>{
        if ( event.target.tagName === "TD")
            console.log( event )
            console.log( saleItem.salePrice )
    }
    return (
        <tr onClick={onClickHandler}>
            <td><Link to='/'>{saleItem._id}</Link></td>
            <td><Link to='/'>{saleItem.salePrice}</Link></td>
            <td><Link to='/'>{saleItem.totalPrice}</Link></td>
            <td>{saleItem.vatToPay}</td>
            <td>{saleItem.vatRate}</td>
        </tr>
    );
};

Sale.propTypes = {
    saleItem: PropTypes.instanceOf(SaleItem)
}

export default Sale;

