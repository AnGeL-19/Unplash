import React, { useEffect } from 'react';
import {Navbar} from '../ui/Navbar';
import {Gallery} from '../gallery/Gallery';
import {GalleryAddModal} from '../gallery/GalleryAddModal';
import {GalleryDeleteModal} from '../gallery/GalleryDeleteModal';


import './style.css';
import { postStartLoading } from '../../action/posts';
import { useDispatch } from 'react-redux';



export const Unplash = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(postStartLoading());
    }, [dispatch]);

    return (
        <div className="container">
            
            <Navbar />

            <Gallery />
        
            

            <GalleryAddModal />
            <GalleryDeleteModal />

        </div>
    )
}
