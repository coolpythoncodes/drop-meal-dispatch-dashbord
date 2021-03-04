// import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MoreImage from '../assest/more.png';
import '../Sass/RidersTableData.scss'

const RidersTableData = ({ data,index, handleChangePassword, close, showChangePasswordPopup, showEditOption, showEdit, handleCloseEdit }) => {


    
    return (
        <div className='tableData'>
            <div>
                <p>{data.name}</p>
            </div>
            <div>
                <p>{data.email}</p>
            </div>
            <div style={{justifySelf:'center'}} >
                <p>{data.trips}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <p>{data.status}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <img src={MoreImage} alt="" onClick={()=>showEditOption(data.id)}/>
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
                <div 
                    className='close' 
                    onClick={handleCloseEdit}
                    style={showChangePasswordPopup ? { pointerEvents: 'none' } : null}
                >
                    <CloseIcon /> 
                </div>
            </div>
        </div>
    );
}

export default RidersTableData;
