import { createSlice } from '@reduxjs/toolkit';


export const FilesFoldersSlice = createSlice({
    name: 'storage',
    initialState: {
        files: {},
        folders: [],
    },
    reducers: {
        add: (state, action) => {
            if (action.payload.type === 'folder') {
                state.folders = [...state.folders, action.payload]
            } else {
                //если в папку еще не добавлялись файлы, то присваиваем папке массив с переданным объектом иначе используем оператор расширения
                state.files[action.payload.parent_folder] === undefined ?
                    state.files[action.payload.parent_folder] = [action.payload] :
                    state.files[action.payload.parent_folder] = [...state.files[action.payload.parent_folder], action.payload]
            }
        },
        sort: (state, action) => {
            state.files[action.payload.id] = action.payload.sortedArray
        }
    }
})


export const { add, sort } = FilesFoldersSlice.actions
export const FileFolder = (state) => state.storage

export default FilesFoldersSlice.reducer
