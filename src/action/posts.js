import { fetchAddpostImg, fetchDeletePostImg, fetchGetposts, fetchSearchPostImg } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2';

export const postStartAddNew = ({label,urlImg}) => {
    return async(dispatch) => {

        try{

            const resp = await fetchAddpostImg({label,urlImg});
            const body = await resp.json();

            if(body.ok){           
                dispatch(postAddNew(body.postImg));
            }
            
        }catch(err){
            console.log(err);
        }
        
    }

}

const postAddNew = (data) => ({
    type: types.addPostImg,
    payload: data
});

export const postStartLoading = () => {
    return async (dispatch) => {
        try{
            const resp = await fetchGetposts();
            const body = await resp.json();

            dispatch(postLoad(body))
        }catch(err){
            console.log(err);
        }
    }
}

const postLoad = (datas) => ({
    type: types.loadPostImg,
    payload: datas
});


export const postStartDelete = () => {
    return async (dispatch, getState) => {
        
        const {id} = getState().post.postActive;

        try {

            const resp = await fetchDeletePostImg(id);
            const body = await resp.json();
            console.log(body);
    
            if(body.ok){
                dispatch(postDelete());
            }
        } catch (error) {
            console.log(error);
        }
        

    }
}

const postDelete = () => ({
    type: types.deltePostImg
});

export const setActivePost = (data) => ({

    type: types.activePostImg,
    payload: data

});

export const desactivePost = () => ({
    type: types.desactivePostImg,
});

export const searchStartPost = (label) => {
    return async (dispach) => {

        try{

            const resp = await fetchSearchPostImg(label);
            const body = await resp.json();

            if(body.ok){
                dispach(searchPost(body.postImgs));
            }else{
                Swal.fire('Error',body.msg, 'error') ;  
            }

        }catch(error){
            console.log(error);
        }

    }
}

const searchPost = (data) => ({
    type: types.searchPost,
    payload: data
});