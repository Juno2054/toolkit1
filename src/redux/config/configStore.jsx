import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../modules/appSlice.jsx';

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
