import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { postStartAddNew } from '../../action/posts.js';
import { uiCloseModalAdd } from '../../action/ui.js';
import { useForm } from '../../hooks/useForm.js';

import './modal.css';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const GalleryAddModal = () => {

    const dispatch = useDispatch();
    const {modalOpenAdd} = useSelector(state => state.ui);
    const [values, handleInputChange ] = useForm({
      label: '',
      urlImg: ''
    });

    const {label, urlImg} = values;
 
    const closeModal = (e) => {
        e.preventDefault();
        dispatch(uiCloseModalAdd());
    }

    const submit = (e) => {
      e.preventDefault();
      console.log(e);
      console.log(values);
      if(label.length === 0){
        Swal.fire('Error','Label is empty','error');
        return;
      }
      if(urlImg.length===0){
        Swal.fire('Error','Url is empty','error');
        return;
      }
      dispatch(postStartAddNew(values));
      dispatch(uiCloseModalAdd());
      Swal.fire('Successful','Post success','success');
    }

    
    return (
        <Modal
            isOpen={modalOpenAdd}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
            
         > 
        <div className="modalcontainer">
          <h2 className="title-modal">Add a new photo</h2>
          <form onSubmit={submit}>

            <div className="inputs">

              <div className="lbl-input">
                <label className="lbl">Label</label>
                <input type="text" 
                       placeholder="Suspendisse elit massa"
                       onChange={handleInputChange}
                       name="label"
                       value={label}/>
              </div>

              <div className="lbl-input">
                <label className="lbl">Photo URL</label>
                <input type="text"
                       placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                       onChange={handleInputChange}
                       name="urlImg"
                       value={urlImg}/>
              </div>
            </div>
            
            <div className="btns-modal">
              <button onClick={closeModal} className="btn-m btn-can">Close</button>
              <button type="submit" className="btn-m btn-sub">Submit</button>
            </div>
            
          </form>
        </div>
        
      </Modal>
    )
}
