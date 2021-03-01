import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Sass/Overview.scss'
import ArrowRight from '../assest/arrow_right.png'
import OverviewTableData from './OverviewTableData';


const Overview = () => {

    const [tableDataOverview, setTableDataOverview] = useState([
        {
            pickUp: 'Matt Ice (MM Way)',
            dropOff: '192 MM Way, Opposite...',
            time: '12.59 PM',
            status: 'Pending',
            fee: 500,
        },
        {
            pickUp: 'Kada Africana  (Sape ...',
            dropOff: '192 MM Way, Opposite...',
            time: '21 Jan. 2021',
            status: 'Active',
            fee: 500,
        },
        {
            pickUp: 'Kada Fried (Sapele Rd.)',
            dropOff: '192 MM Way, Opposite...',
            time: '2 Nov. 2020',
            status: 'Delivered',
            fee: 500,
        },
        {
            pickUp: 'Kada Fried (Sapele Rd.)',
            dropOff: '192 MM Way, Opposite...',
            time: '2 Nov. 2020',
            status: 'Delivered',
            fee: 500,
        }
    ])

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
                        <Link to="/payment">Withdraw <img src={ArrowRight} alt="" style={{ marginLeft: '9px' }} /></Link>
                    </div>
                </div>

                <div className="overview__pickupData">
                    <div className="table__head">
                        <div><p>Pick up</p></div>
                        <div><p>Drop off</p></div>
                        <div style={{justifySelf:'center'}}><p>Time</p></div>
                        <div style={{justifySelf:'center'}}><p>Status</p></div>
                        <div><p>Fee</p></div>
                    </div>
                    <div className="table__body">
                        {
                            tableDataOverview.map((data,index) => {
                                return <OverviewTableData key={index} data={data} />
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Overview;
