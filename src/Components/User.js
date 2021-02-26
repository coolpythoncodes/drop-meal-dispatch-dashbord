import { useState } from 'react'
import Avatar from '../assest/avatar.png'
import ArrowDown from '../assest/arrow_down.png'
import LogoOutImage from '../assest/logout.png'
import '../Sass/User.scss'

const User = () => {

    const [show, setShow] = useState(false);
    const showLogoOut = () => {
        setShow(!show)
    }
	return (
		<div className="account">
			<div className="account__user">
				<img src={Avatar} alt="" style={{ marginRight: "9px" }} />
				<img src={ArrowDown} alt="" onClick={showLogoOut} />
			</div>
			<div
				className={`account__logout ${show ? "show" : null}`}
				style={show ? { visibility: "visible" } : null}
			>
				<img src={LogoOutImage} alt="" style={{ marginRight: "19px" }} />
				<p>Logout</p>
			</div>
		</div>
	);
};

export default User;
