import React from 'react';
import { Provider } from 'react-redux';

import {AppRouter} from './routers/AppRouter';
import { store } from './store/store';


import './style.css';

export const AppUnsplash = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
