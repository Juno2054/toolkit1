import { configureStore, createSlice } from '@reduxjs/toolkit'
import fakeData2 from "./fakeData2.json";

const initialState = {
  name: '',
  content: '',
  postSelect: '',
  list: [...fakeData2],
  label:'카리나',
  id:'1',
};
// list에 페이크 데이터 넣어두기 

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
    //  console.log('스토어',state.list);
    },
  },
}) ;

export const {updateName,updateContent,updatePostSelect,updateList,updateLocalDate}=appSlice.actions;

export default configureStore({
  reducer:{
    app: appSlice.reducer,

  },
});