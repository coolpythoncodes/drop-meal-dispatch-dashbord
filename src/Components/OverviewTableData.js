import '../Sass/OverviewTableData.scss'

const TableData = ({ pickUp, dropOff, time, status, fee }) => {
    return (
        <div className='overview__tableData'>
            <div>
                <p>{pickUp}</p>
            </div>
            <div>
                <p>{dropOff}</p>
            </div>
            <div>
                <p>{time}</p>
            </div>
            <div>
                <p>{status}</p>
            </div>
            <div>
                <p className='fee'>{fee}</p>
            </div>
        </div>
    );
}

export default TableData;
