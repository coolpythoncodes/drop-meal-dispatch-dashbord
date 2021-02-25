import { useContext } from 'react'
import { MenuContext } from '../context'
import { NavLink } from 'react-router-dom'
import DropMealLogo from '../assest/DropMeal.png'
import '../Sass/Sidebar.scss'
// import OverviewTransparent from '../assest/overview_transparent.png'
import OverviewImage from '../assest/overview.png'
import TripsImage from '../assest/trips.png'
import PaymentImage from '../assest/payment.png'
import RidersImage from '../assest/riders.png'

const Sidebar = () => {

    const {sidebarOpen, setSidebarOpen} = useContext(MenuContext);
    const menuToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }


    const SidebarLink = (image, title, link) => (

        <li className="sidebar__link">
            <NavLink
                exact
                to={link}
                activeClassName='active'
            // isActive={(match,location) => {
            //     if(!match){
            //         setIsActive(!isActive)
            //     }
            // }}
            >
                <img src={image} alt="" />
                {/* <img src={isActive ? image : imageTransparent} /> */}
                <p>{title}</p>
            </NavLink>
        </li>
    )

    return (
        <div className={`sidebar ${sidebarOpen ? 'sidebar__close' : null}`}>
            <section>
                <div className="sidebar__logo">
                    <img src={DropMealLogo}  alt=''/>
                    <p>DropMeal <span>Dispatch</span></p>
                </div>
                <div className='sidebar__menuBtn menu__toggle' onClick={menuToggle}>
                    <div className='menuBtn__line'></div>
                    <div className='menuBtn__line'></div>
                    <div className='menuBtn__line'></div>
                </div>
            </section>

            <ul className="sidebar__links">
                {SidebarLink(OverviewImage, 'Overview', '/')}
                {SidebarLink(RidersImage, 'Riders', '/riders')}
                {SidebarLink(TripsImage, 'Trips', '/trips')}
                {SidebarLink(PaymentImage, 'Payment', '/payment')}
            </ul>
        </div>
    );
}

export default Sidebar;
