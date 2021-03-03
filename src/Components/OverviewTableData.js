import '../Sass/OverviewTableData.scss'

const TableData = ({ data }) => {

    const getStatusStyling = () => {
        if (data.status === 'Pending') {
            return {
                color: '#F28B2E'
            }
        }else if (data.status === 'Active'){
            return{
                color:'#2AB2FE'
            }
        }else{
            return {
                color:'#6DA544'
            }
        }
    }
    return (
        <div className='overview__tableData'>
            <div>
                <p>{data.pickUp}</p>
            </div>
            <div>
                <p>{data.dropOff}</p>
            </div>
            <div style={{justifySelf:'center'}}>
                <p>{data.time}</p>
            </div>
            <div style={{justifySelf:'center'}} >
                <p style={getStatusStyling()}>{data.status}</p>
            </div>
            <div>
                <p className='fee'>{data.fee}</p>
            </div>
        </div>
    );
}

export default TableData;
