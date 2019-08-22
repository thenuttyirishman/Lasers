import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './DropDown.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown" style={{ color: "white" }} >
        <div className="button" onClick={this.showDropdownMenu}><li><a href="/"><FontAwesomeIcon icon={faUsers} size='md' /> Roster <FontAwesomeIcon icon={faCaretDown} size='md' /></a></li></div>

        {this.state.displayMenu ? (
          <ul>
            <li><a href="/">John Doe</a></li>
            <li><a href="/">Jane Doe</a></li>
          </ul>
        ) :
          (
            null
          )
        }
      </div>
    );
  }
}

export default Dropdown;