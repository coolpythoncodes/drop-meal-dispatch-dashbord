import React from 'react';
import '../Sass/TripsTableData.scss'

const TripsTableData = ({ pickUp, dropOff, rider, status, fee }) => {
    return (
        <div className='trips__tableData'>
            <div>
                <p>{pickUp}</p>
            </div>
            <div>
                <p>{dropOff}</p>
            </div>
            <div>
                <p>{rider}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <p>{status}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <p>N{fee}</p>
            </div>
        </div>
    );
}

export default TripsTableData;
