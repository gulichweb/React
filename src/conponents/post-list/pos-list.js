
import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.scss';
import './post-list.css';

const PostList = ({posts, onDelete,  onOpenFullWindow, onOpenWindow, onToggleImportant, onToggleLike}) => {

    const elem = posts.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <li key={id}>
                   <PostListItem 
                        {...itemProps}
                        onDelete={()=>onDelete(id)}
                        onToggleImportant={()=>onToggleImportant(id)}
                        onToggleLike={()=>onToggleLike(id)}
                        onOpenWindow={()=> {onOpenWindow(id);  History.push(`/preview/${id}`) }}
                        onOpenFullWindow={()=> {onOpenFullWindow(id);  History.push(`/fullinfo/${id}`) }}
                        
                        />
                </li>
      

            );
    })
    return (
        <ul className='app-list list-group'>
         {elem}
        </ul>
    )
}

export default PostList;