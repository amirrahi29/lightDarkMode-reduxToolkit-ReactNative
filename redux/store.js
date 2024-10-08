import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from './features/darkModeSlice';

export const store = configureStore({
    reducer:{
        darkMode: darkModeSlice
    }
});