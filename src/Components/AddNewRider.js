// import { useState } from 'react';
import '../Sass/AddNewRider.scss'
// import CloseButton from '../assest/Cancel.png'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from './Button';


const AddNewRider = ({ close, handleClose }) => {

    return (
        <div className='add__newRider' style={close ? {display:'block'} : {display:'none'}}>
            <div className="container">
                <div className="top">
                    <h1>Add new rider</h1>
                    <HighlightOffIcon style={{color:'#F0660C', fontSize: 40}} onClick={handleClose} />
                    {/* <img src={CloseButton} alt=""/> */}
                </div>
                <div className="form">
                    <form action="">
                        <div className="name">
                            <label>Full name</label>
                            <input className='addNewRider__input' type="text" name="" id="name"/>
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input className='addNewRider__input' type="email" name="" id="email"/>
                        </div>
                        <div className="password">
                            <label>Password</label>
                            <input className='addNewRider__input' type="password" name="" id="password"/>
                        </div>
                        <Button 
                            title='CREATE USER'
                            color='#FBFBFB'
                            background=' #0079EC'
                            height='32px'
                            style={{
                                marginTop: '25px'
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddNewRider;
