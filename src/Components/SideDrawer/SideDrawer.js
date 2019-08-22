import React from 'react';
import Dropdown from '../DropDown/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul className="SideNav">
                <li><a href="/"><FontAwesomeIcon icon={faCalendarAlt} size='md' /> Schedule</a></li>
                <li><a href="/"><FontAwesomeIcon icon={faFileAlt} size='md' /> About</a></li>
                <Dropdown />
                <li><a href="/"><FontAwesomeIcon icon={faCog} size='md' /> Settings</a></li>
            </ul>
        </nav>);
};

export default sideDrawer;
