import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    constructor() {
        super();
        
        
    }
    

    render() {
        
        return (
           <div> {this.props.name}</div>
        );
    }
}


// Hello.propTypes = {
    
// };

export default Hello
