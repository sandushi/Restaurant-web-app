import React, {Component} from 'react';
import NavBar from './NavBar';
import Services from './Services';

class Home extends Component{
    render(){
    return(
        <div>
        <NavBar />
        <Services />
       
        </div>        
    );

    }
}
export default Home;
