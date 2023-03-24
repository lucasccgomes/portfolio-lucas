import React, { Component } from 'react';
import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

interface NavbarProps {
  show: boolean;
}

interface NavbarState {
  showMenu: boolean;
  showClose: boolean;
  query: string;
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = {
      showMenu: false,
      showClose: false,
      query: '',
    };
  }


  handleMenuClick = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu, showClose: !showMenu });
  };


  handleCloseClick = () => {
    this.setState({ showMenu: false, showClose: false });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query });
  }

  render() {

    const { showMenu, showClose, query } = this.state;

    return (
      <div id='navbar'>
        <h1>LUCAS</h1>
        <nav className={`navbar ${showMenu ? "show" : ""}`}>
          <div className="nav-itens">
            <a href="">INICIO</a>
            <a href="">SOBRE</a>
            <a href="">TECNOLOGIAS</a>
            <a href="">CONTATO</a>
          </div>
        </nav>
        <div className="mobile" >
          {showClose ? (
            <AiOutlineClose className='icon-close' onClick={this.handleCloseClick} />
          ) : (
            <AiOutlineMenu className='icon-menu' onClick={this.handleMenuClick} />
          )}
        </div>
      </div>
    )
  }
}

export default Navbar;
