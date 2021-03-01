import React from 'react';
import '../Sass/PaymentTableData.scss';

const PaymentTableData = ({ date, amount, reference, status}) => {
    return (
        <div className='payment__tableData'>
            <div>
                <p>{date}</p>
            </div>
            <div>
                <p>N {amount}</p>
            </div>
            <div>
                <p>{reference}</p>
            </div>
            <div>
                <p>{status}</p>
            </div>
        </div>
    );
}

export default PaymentTableData;
