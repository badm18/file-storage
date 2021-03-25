import { createSlice } from '@reduxjs/toolkit';


export const FilesFoldersSlice = createSlice({
    name: 'storage',
    initialState: {
        files: {},
        folders: {},
    },
    reducers: {
        add: (state, action) => {
            if (action.payload.type === 'folder') {
                state.folders[action.payload.parent_folder] === undefined ?
                    state.folders[action.payload.parent_folder] = [action.payload] :
                    state.folders[action.payload.parent_folder] = [...state.folders[action.payload.parent_folder], action.payload]
            } else {
                //если в папку еще не добавлялись файлы, то присваиваем папке массив с переданным объектом иначе используем оператор расширения
                state.files[action.payload.parent_folder] === undefined ?
                    state.files[action.payload.parent_folder] = [action.payload] :
                    state.files[action.payload.parent_folder] = [...state.files[action.payload.parent_folder], action.payload]
            }
        },
        sort: (state, action) => {
            action.payload.array[0].type === 'file' ?
                state.files[action.payload.id] = action.payload.array :
                state.folders[action.payload.id] = action.payload.array
        },
        drag: (state, action) => {
            let fileInfo = state.files[action.payload.id].findIndex(item => item.id === action.payload.fileId)
            //если в папке в которую перетаскивается файл, нет других файлов, то оператор расширения не используется
            state.files[action.payload.folderId] === undefined ?
                state.files[action.payload.folderId] = [state.files[action.payload.id][fileInfo]] :
                state.files[action.payload.folderId] = [...state.files[action.payload.folderId], state.files[action.payload.id][fileInfo]]
                
            state.files[action.payload.id] = state.files[action.payload.id].filter(item => item.id !== action.payload.fileId)
        }
    }
})


export const { add, sort, drag } = FilesFoldersSlice.actions
export const FileFolder = (state) => state.storage

export default FilesFoldersSlice.reducer
