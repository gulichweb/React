import React, {Component}from 'react';
import { Button } from 'reactstrap';
import './post-status.css'


export default class PosStatusfilter extends Component {

    constructor(props) {
        super(props);
        this.button = [
            {
            name: "all", label: "Все"
        },

        {
            name: "like", label: "понравившиеся"
        }
        ] 
            
        
    }

    render() {

        const btns = this.button.map(({name, label}) => {
            const {filter, onUpdateFilter} = this.props;
            
            const active = filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name }type="button" className={`btn ${activeClass}`} onClick={()=>this.props.onUpdateFilter(name)}>{label}</button>
        )
        });
        return (
            <div className='btn-group'>
               {/* <Button type="button" class="btn btn-primary">Primary</Button> */}
               {/* <button type="button" className='btn btn-info btn-all'>Все</button> 
               <button type="button" className='btn btn-outline-secondary>Понравилась</button>  */}
               {btns}
           
            </div>
           )
       }

    }
    

