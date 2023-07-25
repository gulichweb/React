import React, { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     };
    //     this.addImportant = this.addImportant.bind(this);
    //     this.addLike = this.addLike.bind(this);
    // }

    // addImportant(){
    //     this.setState(({important}) => ({
    //         important: !important
    //     }));
    // }

    // addLike(){
    //     this.setState(({like}) => ({
    //         like: !like
    //     }));
    // }

    render () {

        const {avatar, first_name, last_name,  onOpenWindow, onOpenFullWindow, onDelete, onToggleImportant, onToggleLike, important, like } = this.props;
      
   
        let className ="app-list-item d-flex justify-content-between"

        if (important) {
            className += "  important";
        }
        
        if (like) {
            className += "  like";
        }
        return (
            
            <div className={className}>
                <img src={avatar} alt="img" width="50" height="50"></img>
                <span className="app-list-item-label" onClick={onToggleLike}>
                    
                    {first_name}{last_name}
                
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm" onClick={onToggleImportant}>
                     <i className="fa fa-star"></i> 
                    </button>
                    <button className="btn-trash btn-sm" onClick={onDelete}>
                     <i className="far  fa-trash-alt"></i>
                    </button>
                    <button className="btn-trash btn-sm" onClick={onOpenWindow}>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </button>
                    <button className="btn-full-inf0 btn-sm" onClick={onOpenFullWindow}>
                    {/* <i className="fa-sharp fa-light fa-circle-info"></i> */}
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    
                </div>
        
            </div>
        )
    }
}

