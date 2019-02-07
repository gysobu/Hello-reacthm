import React from 'react';
// import PropTypes from 'prop-types';

class Friendlist extends React.Component {
    constructor() {
        super();
        
    }

    render() {
        let friends =this.props.friend.map((element)=>{
            if(element.age >=21){
            return <li>Name:{element.name} can party at moon <br/>Age:{element.age}</li>
            }
            else{
                return <li>Name:{element.name} <br/>Age:{element.age}</li>
            }
        })
        
        return (
            <div>
                <ul>
                    {friends}
                </ul>
                </div>
        );
    }
}


// friendlist.propTypes = {
    
// };

export default Friendlist
