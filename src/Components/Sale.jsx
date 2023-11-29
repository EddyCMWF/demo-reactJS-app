import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SaleItem from './SaleItem.model';
import { Link } from 'react-router-dom';
import { Toast } from 'react-bootstrap';

const Sale = ({ saleItem }) => {
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => {
        setShowToast((showToast) => !showToast)
    }

    const onClickHandler = (event)=>{
        // if (event.target.tagname === "TD")
        toggleShowToast();
    }

    return (
        <>
            <tr onClick={onClickHandler}>
                <td><Link to='/'>{saleItem._id}</Link></td>
                <td><Link to='/'>{saleItem.salePrice}</Link></td>
                <td><Link to='/'>{saleItem.totalPrice}</Link></td>
                <td>{saleItem.vatToPay}</td>
                <td>{saleItem.vatRate}</td>
            </tr>
            <Toast show={showToast} onClose={toggleShowToast}>
                <Toast.Header>
                    <strong className='me-auto'>Sale Item</strong>
                    <small>Details</small>
                </Toast.Header>
                <Toast.Body>
                    {
                        `${saleItem.salePrice}` + ' => ' + 
                        `${saleItem.totalPrice}` + ' => ' + 
                        `${saleItem.vatToPay}`
                    }
                </Toast.Body>
            </Toast>
        </>
    );
};

Sale.propTypes = {
    saleItem: PropTypes.instanceOf(SaleItem)
}

export default Sale;

