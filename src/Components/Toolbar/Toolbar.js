import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Dropdown from '../DropDown/DropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Toolbar.css';

const toolbar = props => (

    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><a href="/">LADY LASERS</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/"><FontAwesomeIcon icon={faCalendarAlt} size='md' /> Schedule</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faFileAlt} size='md' /> About</a></li>
                    <Dropdown />
                    <li><a href="/"><FontAwesomeIcon icon={faCog} size='md' /> Settings</a></li>
                </ul>
            </div>
        </nav>
    </header>

);

export default toolbar;