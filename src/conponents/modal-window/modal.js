import { Component } from "react";
import Loading  from '../loading';

import './style.css'

export default class ModalWindow extends Component {
    render() {

        const {modalVisible, onCloseWindow, modalContent, modalContent:{email, first_name, last_name, avatar, info}} = this.props;
        let content, body;
        // console.log(modalContent);

        if(modalContent.length !== 0) {
            body = <Content first_name={first_name} last_name={last_name} avatar={avatar} onCloseWindow={onCloseWindow} email={email} info={info}/>
        }else {
            body = <Loading/>
        }

        if(modalVisible) {
            content = <div className="modal">
            < div className="modal-dialog">
          
               {body}

            </div>
        </div>
        } else content = null

        return (content);
    }
}

const Content = ({first_name, last_name, avatar, onCloseWindow, email, info}) => {
    return(
        <>
              <div className="modal-header">
                    <h1 className="modal-title">{first_name}{last_name}</h1>
                    <span className="modal-close" onClick={onCloseWindow}>x</span>

                </div>

               <div className="modal-body">
                <div className="modal-content">
                   <img src={avatar} alt={first_name} width="150" height="150"></img>
                   <p>{first_name}{last_name}</p>
                  <p><a href={"mailto"+ email}>{email}</a></p> 
                  <p>{info}</p>
                </div>                    
               </div>
            <div className="modal-footer">
                <button onClick={onCloseWindow}>Закрыть</button>
            </div>
        </>
    
)}




