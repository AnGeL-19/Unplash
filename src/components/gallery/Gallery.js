import React,{ useCallback, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesloaded from 'imagesloaded';

import {ItemGallery} from '../item-gallery/ItemGallery';

import './gallery.css';
import { useSelector } from 'react-redux';

export const Gallery = () => {

    const {zIndex} = useSelector(state => state.ui)

    // aqui vamos a mandar los items 
    const {posts} = useSelector(state => state.post);
    
    
    const ref = useRef();
    

    const setRef = useCallback((node) => {
        
        ref.current = node;
    
        imagesloaded( ref.current, () => {
              new Masonry( ref.current, {
                // options
                itemSelector: '.img-title',
                columnWidth: 382,
                gutter: 40,
                isFitWidth: true
              });
        });
        
    }, [posts]);


    // 
    return (
        <div className="container-gallery" ref={setRef} style={{zIndex: zIndex}}>
            {posts.map( post => 
                    
                    <ItemGallery 
                                key={post.id}
                                img={post.img}
                                label={post.label}
                                id={post.id}/>
 
            )}
            
        </div>
    )
}
