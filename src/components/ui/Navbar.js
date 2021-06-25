import React from 'react';
import { useDispatch } from 'react-redux';
import { searchStartPost } from '../../action/posts.js';
import { uiOpenModalAdd } from '../../action/ui.js';
import { useForm } from '../../hooks/useForm';


import './navbar.css';

export const Navbar = () => {

    const dispatch = useDispatch();

    const [values, handleInputchange, reset] = useForm({
        search:''
    });

    const handleOpenModal = () => {
        dispatch(uiOpenModalAdd());
        
    }

    const {search} = values;

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            console.log(search);
            dispatch(searchStartPost(search));
            reset();
        }
    }

    return (
        <nav className="nav-container">
            <div className="logo">
                    <span className="material-icons md-36">
                    collections
                    </span>
                    <span className="title_page">My Unsplash</span>
                    <span className="subtitle">devchallenges.io</span>
            </div>


            <div className="input_icon">
                <i className="material-icons md-24"
                >
                    search
                </i>
                <input type="text" 
                    placeholder="Search by name"
                    id="in"
                    name="search"
                    value={search} 
                    onChange={handleInputchange}
                    onKeyPress={handleKeyPress} />
            </div>
            

            <div className="btn-position">
                <button className="btn"
                        onClick={handleOpenModal} >
                    Add a photo
                </button>
            </div>
            
            
        </nav>
    )
}
