

import React, {Component} from 'react';


export default class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
         text: ''
        }
   
        this.onSearchPost = this.onSearchPost.bind(this);
    
   }
   
   onSearchPost(e){
        const value =  e.target.value
       this.setState({
         text: value
       });

       this.props.onUpdateSearchPanel(e.target.value);
    }

    render() {

        return (
            <input
            type="text"
            className='form-control search-input'
            placeholder='Поиск записей'
            onChange={this.onSearchPost}
            
            />
            )
    }
    
}

