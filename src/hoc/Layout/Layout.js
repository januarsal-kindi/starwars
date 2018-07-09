import React, { Component } from 'react';
import Auxa from '../Auxa/Auxa'
import Navber from '../../Components/NavBar/Navbar'

class Layout extends Component {

   
    render () {
        
        return (
            <Auxa>
                <Navber/>
                {this.props.children}
            </Auxa>
        )
    }
}



export default Layout;
  