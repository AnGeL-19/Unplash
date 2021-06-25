import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { desactivePost, postStartDelete } from '../../action/posts.js';
import { uiCloseModalDelete } from '../../action/ui.js.js';
import { useForm } from '../../hooks/useForm.js';

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

export const GalleryDeleteModal = () => {

    const dispatch = useDispatch();
    const {modalOpenDelete} = useSelector(state => state.ui);

    const [values, handleInputchange, reset] = useForm({
      password: ''
    });
 
    const {password} = values;

    const closeModal = (e) => {
        e.preventDefault();
        dispatch(uiCloseModalDelete());
        dispatch(desactivePost());
    }

    const submit = (e) => {
      e.preventDefault();
      if(password==='password'){
        dispatch(postStartDelete());
        Swal.fire('Successful','Post delete successful','success');
        dispatch(uiCloseModalDelete());
      }else{
        Swal.fire('Error','Password invalid','error');
      }

    }

    return (
        <Modal
            isOpen={modalOpenDelete}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            overlayClassName="modal-fondo"
         >     
        <div className="modalcontainer">
          <h2 className="title-modal">Are you sure?</h2>
          <form onSubmit={submit}>

            <div className="inputs">

              <div className="lbl-input">
                <label className="lbl">Password</label>
                <input type="password" 
                       placeholder="***********"
                       name="password"
                       value={password}
                       onChange={handleInputchange}
                       />
              </div>
              <p>password is password :)</p>
            </div>
      
            <div className="btns-modal">
              <button onClick={closeModal} className="btn-m btn-can">Close</button>
              <button type="submit" className="btn-m btn-del">Delete</button>
            </div>
            
          </form>
        </div>
      </Modal>
    )
}
