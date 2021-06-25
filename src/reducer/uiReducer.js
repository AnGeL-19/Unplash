import { types } from "../types/types";

const initialState = { 
    modalOpenAdd: false,
    modalOpenDelete: false,
    zIndex: 9,
 }

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.uiOpenModalAdd:
            return {
                ...state,
                modalOpenAdd: true,
                zIndex: -9
            }

        case types.uiCloseModalAdd:
            return {
                ...state,
                modalOpenAdd: false,
                zIndex: 9 
            }

        case types.uiOpenModalDelete:
            return {
                ...state,
                modalOpenDelete: true,
                zIndex: -9
            }

        case types.uiCloseModalDelete:
            return {
                ...state,
                modalOpenDelete: false,
                zIndex: 9 
            }
        default:
            return state;
    }


}