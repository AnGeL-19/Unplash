import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePost } from '../../action/posts.js';
import { uiOpenModalDelete } from '../../action/ui.js';

// const img_not_found = require('../../assets/not_found.png');

import './item-gallery.css';

export const ItemGallery = ({id,img,label}) => {

    const dispatch = useDispatch();

    const [load, setLoad] = useState();
    const [hover, setHover] = useState(false);

    const changeBackgroundOver = (e) => {
       
        setHover(true);
        e.target.style.opacity = .5;
        e.target.style.zindex = 9;
        e.target.style.transition = 'all 0.3s ease-out';

    }

    const changeBackgroundLeave = (e) => {
       
        setHover(false);
        e.target.style.opacity = 1;

    }
    
    const handleDelete = () => {
        dispatch(setActivePost({id,img,label}));
        dispatch(uiOpenModalDelete());
    }

    return (
        
        <div className="img-title animate__animated animate__fadeIn" 
             onLoad={(e) => setLoad(e.target.height-1)}
             onMouseOver={changeBackgroundOver}
             onMouseLeave={changeBackgroundLeave}
             style={{height:load}}
            >
              
            <img className="item-img" src={img} alt="../../assets/not_found.png" height={load} width={382}/>
            {
                hover
                &&
                <>
                    <p className="title">{label}</p> 
                    <button className="delete"
                            onClick={handleDelete}
                            >delete</button>
                </>
            }
                
             
        </div>
        
    )
}
