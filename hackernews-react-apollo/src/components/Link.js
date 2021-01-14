import React, {Component} from 'react'

class Link extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {link} = this.props;
        return(
            <div>
                <div>
                    {link.description} ({link.url})
                </div>
            </div>
        )
    }
        
}
export default Link;