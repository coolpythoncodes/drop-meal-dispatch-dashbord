import React, { useState } from 'react';
import Search from './Search';
import '../Sass/Payment.scss'
import Button from './Button';
import PaymentTableData from './PaymentTableData';
import { useSelector } from 'react-redux';
import { selectSearchItem } from '../features/search/searchSlice';

const Payment = () => {
    const searchTerm = useSelector(selectSearchItem)
    const [paymentTableData, setPaymentTableData] = useState([
        {
            id: Date.now(),
            date: '2 Jan. 2021',
            amount: '150,000.00',
            reference: '#SME20215345',
            status: 'Processing',
        },
        {
            id: Date.now(),
            date: '2 Jan. 2021',
            amount: '150,000.00',
            reference: '#EFE20215345',
            status: 'Processing',
        },
        {
            id: Date.now(),
            date: '2 Jan. 2021',
            amount: '150,000.00',
            reference: '#KIN20215345',
            status: 'Processing',
        },
        {
            id: Date.now(),
            date: '2 Jan. 2021',
            amount: '150,000.00',
            reference: '#DIW20215345',
            status: 'Processing',
        },
    ]);
    
    const filterPaymentTableData = paymentTableData.filter(item => item.reference.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className='payment'>
            <div className="payment__container">
                <div className="payment__header">
                    <Search />
                </div>
                <div className="payment__withdraw">
                    <div className="payment__walletBalance">
                        <p>Wallet Balance</p>
                        <h1>N 50, 500</h1>
                    </div>
                    <div className="payment__withdrawBalance">
                        <div className="container">
                            <div className="payment__withdrawTop">
                                <h2>Withdraw balance</h2>
                            </div>
                            <div className="form">
                                <form action="">
                                    <div className="payment__accountName">
                                        <label>Account Name</label>
                                        <input type="text" name="" id="account-name" />
                                    </div>
                                    <div className="payment__bankName">
                                        <label>Select bank</label>
                                        <select name="" id="bank-name">
                                            <option value="1">First Bank</option>
                                            <option value="2">Access Bank</option>
                                        </select>
                                    </div>
                                    <div className="payment__accountNumber">
                                        <label htmlFor="">Account number</label>
                                        <input type="number" name="" id="account-number" />
                                    </div>
                                    <div style={{ alignSelf: 'end' }}>
                                        <Button
                                            title='PROCESS PAYMENT'
                                            color='#FBFBFB'
                                            background='#6DB8FF'
                                            style={{ height: '32px' }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment__transaction">
                    <div className="payment__transactionTop">
                        <h3>Transaction history</h3>
                    </div>

                    <div className="payment__tableHead">
                        <div>
                            <p>Date</p>
                        </div>
                        <div>
                            <p>Amount</p>
                        </div>
                        <div>
                            <p>Ref ID.</p>
                        </div>
                        <div>
                            <p>Status</p>
                        </div>
                    </div>

                    <div className="payment__tableBody">
                        {
                            filterPaymentTableData.map(item => (
                                <PaymentTableData
                                    id={item.id}
                                    date={item.date}
                                    amount={item.amount}
                                    reference={item.reference}
                                    status={item.status}
                                />
                            ))
                        }
                        {/* <PaymentTableData
                            date='2 Jan. 2021'
                            amount='150,000.00'
                            reference='#DIW20215345'
                            status='Processing'
                        /> */}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
