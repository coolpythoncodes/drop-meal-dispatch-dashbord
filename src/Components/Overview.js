import React from 'react';
import { useState } from 'react'
import '../Sass/Overview.scss'
import ArrowRight from '../assest/arrow_right.png'
import Avatar from '../assest/avatar.png'
import ArrowDown from '../assest/arrow_down.png'
import LogoOutImage from '../assest/logout.png'
import TableData from './TableData';

const Overview = () => {

    const [show, setShow] = useState(false);
    const showLogoOut = () => {
        setShow(!show)
    }

    return (
        <div className='overview'>
            <div className="overview__container">
                <div className="overview__greeting">
                    <h3>Hello, Emma Go</h3>
                    <small>Let’s make today productive!</small>
                </div>

                <div className="overview__earning">
                    <div className="overview__chart">

                    </div>
                    <div className="overview__walletBalance">
                        <p>Wallet Balance</p>
                        <h1>N 50, 500</h1>
                        <a href="/">Withdraw <img src={ArrowRight} alt="" style={{ marginLeft: '9px' }} /></a>
                    </div>
                </div>

                <div className="overview__pickupData">
                    <div className="table__head">
                        <div><p>Pick up</p></div>
                        <div><p>Drop off</p></div>
                        <div><p>Time</p></div>
                        <div><p>Status</p></div>
                        <div><p>Fee</p></div>
                    </div>
                    <div className="table__body">
                        <TableData
                            pickUp='Matt Ice (MM Way)'
                            dropOff='192 MM Way, Opposite...'
                            time='12.59 PM'
                            status='pending'
                            fee='N 500'
                        />
                        <TableData
                            pickUp='Kada Africana  (Sape ...'
                            dropOff='192 MM Way, Opposite...'
                            time='21 Jan. 2021'
                            status='Active'
                            fee='N 500'
                        />
                        <TableData
                            pickUp='Kada Fried (Sapele Rd.)'
                            dropOff='192 MM Way, Opposite...'
                            time='2 Nov. 2020'
                            status='Delivered'
                            fee='N 500'
                        />
                        <TableData
                            pickUp='Kada Fried (Sapele Rd.)'
                            dropOff='192 MM Way, Opposite...'
                            time='2 Nov. 2020'
                            status='Delivered'
                            fee='N 500'
                        />
                    </div>

                </div>
            </div>

            <div className="overview__user">
                <img src={Avatar} alt="" style={{ marginRight: '9px' }} />
                <img src={ArrowDown} alt="" onClick={showLogoOut} />
            </div>
            <div className={`overview__logout ${show ? 'show' : null}`} style={show ? { visibility: 'visible' } : null}>
                <img src={LogoOutImage} alt="" style={{ marginRight: '19px' }} />
                <p>Logout</p>
            </div>
        </div>
    );
}

export default Overview;
