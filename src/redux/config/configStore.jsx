import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../modules/appSlice.jsx';
import userReducer from '../modules/userSlice.jsx';
export default configureStore({
  reducer: {
    app: appReducer,
    user:userReducer,
  },
});
