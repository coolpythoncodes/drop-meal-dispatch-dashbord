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
    // open and close add new rider popup
    const handleClose = () => {
        setClose(!close)
        console.log(close)
    }
    // open and close change password popup
    const handleChangePassword = () => {
        setShowChangePasswordPopup(!showChangePasswordPopup)
    }

    return (
        <div className='riders'>
            <div className="riders__container">
                <AddNewRider
                    handleClose={handleClose}
                    close={close}
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
                        style={close || showChangePasswordPopup ? { pointerEvents: 'none' } : null}
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

                        <RidersTableData
                            name='Kazim Davids'
                            email='Kazimdavids@gmailcom'
                            trips={3}
                            status='Riding'
                            handleChangePassword={handleChangePassword}
                            showChangePasswordPopup={showChangePasswordPopup}
                            close={close}
                            
                        />
                        {/* <RidersTableData 
                            name='Robert King'
                            email='Robertking@gmailcom'
                            trips={0}
                            status='Static'
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Riders;
