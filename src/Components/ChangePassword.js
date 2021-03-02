import React from 'react';
import '../Sass/ChangePassword.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from './Button';

const ChangePassword = ({close, handleChangePassword, showChangePasswordPopup }) => {
    return (
        <div className='change__password' style={showChangePasswordPopup ? {display:'block'} : {display:'none'}}>
            <div className="container">
                <div className="top">
                    <h1>Change Password</h1>
                    <HighlightOffIcon
                        style={{ color: '#F0660C', fontSize: 40 }}
                        onClick={handleChangePassword} 
                    />
                    {/* <img src={CloseButton} alt=""/> */}
                </div>
                <div className="form">
                    <form action="">
                        <div className="name">
                            <label>New password</label>
                            <input className='change__passwordInput' type="password" name="" id="password1"/>
                        </div>
                        <div className="email">
                            <label>Confirm password</label>
                            <input className='change__passwordInput' type="password" name="" id="password2"/>
                        </div>
                        <Button 
                            title='CHANGE PASSWORD'
                            color='#FBFBFB'
                            background='#0079EC'
                            height='32px' 
                            style={{
                                marginTop:'25px',
                                marginBottom:'92px',
                            }}                         
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
