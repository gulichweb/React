import React from 'react';
import './app-header.css';
import styled from 'styled-components'

const AppDiv = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

     h1 {
        font-size: 26px;
        margin-bottom: 20px;
        cursor : pointer;
        :hover {
            color: orange;
        }
     }
     
    h2 {
        font-size: .9em;
        color: rgb(97, 74, 128);
     }


`;


const AppHeader = ({allPost, likes}) => {
    return (
      
        < AppDiv  className='app-header d-flex'>
            
            <h1>Gulnara Smadiiarova</h1>
            <h2>{allPost} записи из них {likes} понравлися</h2>
        </ AppDiv >

    )
}


export default AppHeader;