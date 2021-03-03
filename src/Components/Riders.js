import { useState } from 'react';
import Search from './Search';
import PlusImage from '../assest/add.png'
import '../Sass/Riders.scss';
import RidersTableData from './RidersTableData';
import AddNewRider from './AddNewRider';
import ChangePassword from './ChangePassword';


const Riders = () => {

    const [close, setClose] = useState(false); // open and close add new rider popup
    const [showChangePasswordPopup, setShowChangePasswordPopup] = useState(false)
    const [showEdit, setShowEdit] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const [tableDataRiders, setTableDataRiders] = useState([
        {
            name: 'Kazim Davids',
            email: 'Kazimdavids@gmailcom',
            trips: 3,
            status: 'Riding',
        }
    ]);

    // open and close add new rider popup
    const handleClose = () => {
        setClose(!close)
    }
    // open and close change password popup
    const handleChangePassword = () => {
        setShowChangePasswordPopup(!showChangePasswordPopup)
    }



    const showEditOption = () => {
        setShowEdit(!showEdit)
    }

    const handleCloseEdit = () => {
        setShowEdit(!showEdit)
    }

    const addNewRider = (fullName, email) => {
        const newRider = [...tableDataRiders, { name: fullName, email, trips: 0, status: 'Static' }]
        setTableDataRiders(newRider)
    }

    const handleAddNewRiderSubmit = e => {
        e.preventDefault();
        addNewRider(fullName, email)
        setFullName('')
        setEmail('')
    }

    return (
        <div className='riders'>
            <div className="riders__container">
                <AddNewRider
                    handleClose={handleClose}
                    close={close}
                    fullName={fullName}
                    setFullName={setFullName}
                    email={email}
                    setEmail={setEmail}
                    handleAddNewRiderSubmit={handleAddNewRiderSubmit}
                />
                <ChangePassword
                    showChangePasswordPopup={showChangePasswordPopup}
                    handleChangePassword={handleChangePassword}
                />
                <div className="riders__header">
                    <Search />
                    <div
                        className="riders__addUsers"
                        onClick={handleClose}
                        style={close || showChangePasswordPopup || showEdit ? { pointerEvents: 'none' } : null}
                    >
                        <p>Add new</p>
                        <img src={PlusImage} alt="" />
                    </div>
                </div>
                <div className="riders__table">

                    <div className="riders__tableHead">
                        <div>
                            <p>Full name</p>
                        </div>
                        <div>
                            <p>Email</p>
                        </div>
                        <div style={{ justifySelf: 'center' }} >
                            <p>Trips</p>
                        </div>
                        <div style={{ justifySelf: 'center' }}>
                            <p>Status</p>
                        </div>
                        <div style={{ justifySelf: 'center' }}></div>
                    </div>

                    <div className="riders__tableData">
                        {
                            tableDataRiders.map((data, index) => <RidersTableData key={index} data={data} handleChangePassword={handleChangePassword}
                                showChangePasswordPopup={showChangePasswordPopup}
                                close={close}
                                showEditOption={showEditOption}
                                showEdit={showEdit}
                                handleCloseEdit={handleCloseEdit} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Riders;
