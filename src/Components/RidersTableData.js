import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MoreImage from '../assest/more.png';
import '../Sass/RidersTableData.scss'

const RidersTableData = ({ name, email, trips, status, handleChangePassword, close, showChangePasswordPopup }) => {

    const [showEdit, setShowEdit] = useState(false);

    const showEditOption = () => {
        setShowEdit(!showEdit)
    }

    const handleClose = () => {
        setShowEdit(!showEdit)
    }
    
    return (
        <div className='tableData'>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <p>{email}</p>
            </div>
            <div style={{justifySelf:'center'}} >
                <p>{trips}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <p>{status}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <img src={MoreImage} alt="" onClick={showEditOption}/>
            </div>
            <div className="tableData__edit" style={showEdit ? {visibility:'visible'} : null}>
                <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li 
                        onClick={handleChangePassword} 
                        style={close || showChangePasswordPopup ? { pointerEvents: 'none' } : null}
                    >
                        Change password
                    </li>
                </ul>
                <div className='close' onClick={handleClose}><CloseIcon /> </div>
            </div>
        </div>
    );
}

export default RidersTableData;
