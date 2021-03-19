import { configureStore } from '@reduxjs/toolkit';
import FileFolderReducer from '../Reducers/FilesFoldresReducer'



export default configureStore({
    reducer: {
        storage: FileFolderReducer,
   
    }
})