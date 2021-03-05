import React from 'react';
import Search from './Search';
import '../Sass/Trips.scss'
import TripsTableData from './TripsTableData';

const Trips = () => {
    // const searchTerm = useSelector(state => state.state)
    return (
        <div className='trips'>
            <div className="trips__container">
                <div className="trips__header">
                    <Search />
                </div>

                <div className="trips__table">
                    <div className="trips__tableHead">
                        <div>
                            <p>Pick up</p>
                        </div>
                        <div>
                            <p>Drop off</p>
                        </div>
                        <div>
                            <p>Rider</p>
                        </div>
                        <div>
                            <p>Status</p>
                        </div>
                        <div>
                            <p>Fee</p>
                        </div>
                    </div>

                    <div className="trips__tableBody">
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />

                        {/*  */}
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                             <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                        <TripsTableData 
                            pickUp='Mat Ice (MM Way)'
                            dropOff='192 MM way, Opposite Ma...'
                            rider='Kazimdavids@gmailcom'
                            status='Riding'
                            fee={500}
                        />
                    </div>

                    <div className="trips__pagination">
                        <div className='current__page'>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>...</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trips;
