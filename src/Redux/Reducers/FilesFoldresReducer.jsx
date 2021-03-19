import { createSlice } from '@reduxjs/toolkit';


export const FilesFoldersSlice = createSlice({
    name: 'storage',
    initialState: {
        files: {},
        folders: [{parent_folder:'0'}],
    },
    reducers: {
        add: (state, action) => {
            if (action.payload.type === 'folder') {
                state.folders = [...state.folders, action.payload]
            } else {
                // state.files[action.payload.parent_folder] = [...state.files[action.payload.parent_folder],
                // action.payload]
            }
        },
    }
})


export const { add } = FilesFoldersSlice.actions
export const FileFolder = (state) => state.storage

export default FilesFoldersSlice.reducer
