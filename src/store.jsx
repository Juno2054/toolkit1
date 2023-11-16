import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  content: '',
  postSelect: '',
  list: [],
  label:'',
  id:'',

};

const appSlice= createSlice({
  name:'app',
  initialState,
  reducers: { 
    updateName:(state,action)=>{
      state.name = action.payload;
    },
    updateContent:(state,action)=>{
      state.content = action.payload;
    },
    updatePostSelect:(state,action)=>{
      state.postSelect = action.payload;
    },
    updateList:(state,action)=>{
      state.list = action.payload;
     console.log(state.list);
    },
  },
}) ;

export const {updateName,updateContent,updatePostSelect,updateList}=appSlice.actions;

export default configureStore({
  reducer:{
    app: appSlice.reducer,
  },
});